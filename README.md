# Home & Office Fixology - Appliance Repair Website

A professional single-page website for appliance repair services in Nairobi, Kenya. Built with React, Express.js, and TypeScript.

## Features

- Professional landing page with service information
- Contact form for service requests
- Responsive design for mobile and desktop
- Service sections for washing machine and refrigerator repair
- Modern UI with shadcn/ui components

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5000](http://localhost:5000) in your browser

## Deployment on Vercel

This project is configured for deployment on Vercel with the following setup:

### Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Vercel CLI installed (optional): `npm i -g vercel`

### Deployment Steps

#### Method 1: Using Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [vercel.com](https://vercel.com) and log in
3. Click "New Project"
4. Import your Git repository
5. Vercel will automatically detect the configuration and deploy

#### Method 2: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

### Configuration

The project includes a `vercel.json` configuration file that:

- Builds the frontend using Vite
- Sets up serverless functions for API endpoints
- Configures routing for SPA and API requests
- Serves static files from the `dist/public` directory

### API Endpoints

- `POST /api/service-request` - Submit a service request
- `GET /api/service-requests` - Get all service requests (admin)

### Environment Variables

If you need to add environment variables (e.g., for database connections):

1. In Vercel Dashboard: Go to Project Settings → Environment Variables
2. Add your variables (e.g., `DATABASE_URL`, `API_KEY`, etc.)

### Build Process

The build process:
1. Runs `npm run build` to compile the frontend and backend
2. Creates static files in `dist/public`
3. Sets up serverless functions in the `api` directory

### Custom Domain

To use a custom domain:
1. In Vercel Dashboard: Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── service-request.js  # Service request submission
│   └── service-requests.js # Get service requests
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   └── src/               # React components and pages
├── server/                # Express.js backend (for local dev)
├── shared/                # Shared TypeScript schemas
└── vercel.json            # Vercel deployment configuration
```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: In-memory storage (ready for PostgreSQL)
- **Deployment**: Vercel with serverless functions
- **Build Tools**: Vite, esbuild

## Support

For any issues with the website, please contact the development team.