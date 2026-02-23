import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();

// Security Headers (CSP)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://replit.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      connectSrc: ["'self'", "*"],
    },
  },
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { message: "Too many requests, please try again later." },
});

// Apply rate limiting to /api/* routes
app.use("/api", limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health Check Endpoints
app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: Date.now() });
});

app.get("/readyz", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: Date.now() });
});

// Helper to redact PII from logs
function sanitizeLogBody(body: any): any {
  if (!body) return body;
  if (Array.isArray(body)) {
    return body.map(item => sanitizeLogBody(item));
  }
  if (typeof body === 'object' && body !== null) {
    const sanitized: Record<string, any> = { ...body };
    const piiFields = ['email', 'phone', 'name', 'password', 'token', 'creditCard'];
    for (const key of Object.keys(sanitized)) {
      if (piiFields.some(field => key.toLowerCase().includes(field))) {
        sanitized[key] = '***';
      } else {
        sanitized[key] = sanitizeLogBody(sanitized[key]);
      }
    }
    return sanitized;
  }
  return body;
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      const sanitizedBody = sanitizeLogBody(capturedJsonResponse);

      console.log(JSON.stringify({
        method: req.method,
        path,
        statusCode: res.statusCode,
        durationMs: duration,
        body: sanitizedBody
      }));
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
