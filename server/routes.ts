import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertServiceRequestSchema } from "@shared/schema";
import { z } from "zod";

// TODO: SEC-01 Implement Admin Session Auth
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  // Placeholder logic: Require a bearer token 'admin-secret' for now, or just check existence.
  // For a real implementation, this would verify a session or JWT.
  if (!authHeader || authHeader !== "Bearer admin-secret") {
     return res.status(401).json({ message: "Unauthorized: Access Denied" });
  }
  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  const baseUrl = process.env.PUBLIC_URL || "https://www.homeandofficefixology.co.ke";

  // Robots.txt
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`);
  });

  // Sitemap.xml
  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml");
    const today = new Date().toISOString().split('T')[0];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    res.send(sitemap);
  });

  // Contact form submission endpoint
  app.post("/api/service-request", async (req, res) => {
    try {
      const validatedData = insertServiceRequestSchema.parse(req.body);
      const serviceRequest = await storage.createServiceRequest(validatedData);
      
      res.json({ 
        success: true, 
        message: "Service request submitted successfully! We will contact you within 30 minutes.",
        id: serviceRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit service request" 
        });
      }
    }
  });

  // Get all service requests (for admin purposes)
  app.get("/api/service-requests", isAuthenticated, async (req, res) => {
    try {
      const requests = await storage.getServiceRequests();
      res.json(requests);
    } catch (_error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch service requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
