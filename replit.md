# Appliance Repair Service Website

## Overview

This is a full-stack web application for an appliance repair service company. The application provides a professional landing page with service information and a contact form for customers to request repairs. It's built with a modern tech stack using React for the frontend and Express.js for the backend, with PostgreSQL as the database.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### January 2025
- Removed emergency service references from navigation and business hours per user request
- Updated all service images to be more relevant to appliance repair (washing machines, refrigerators)
- Changed business model to standard hours (Sunday closed) instead of 24/7 emergency availability
- Maintained professional service focus on washing machine and refrigerator repair in Nairobi
- Fixed "Call Now" button visibility issue in hero section
- Integrated user-uploaded images for service sections (washing machine and refrigerator)
- Added Vercel deployment configuration with serverless functions
- Created individual API endpoints for service requests compatible with Vercel
- Added comprehensive deployment documentation in README.md
- Replaced complex contact form with simple email-based contact system
- **Expanded services to include 5 core offerings**: Washing Machine Repair, Refrigerator Repair, Generator Repair, Solar Installation, and Air Conditioning
- Updated services section with 3-column responsive grid layout for all 5 services
- Added user-provided images for new services (generator, solar, air conditioning)
- Updated hero section and email template to reflect expanded service offerings
- Enhanced footer navigation with all new services listed

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Request Logging**: Custom middleware for API request tracking
- **Error Handling**: Centralized error handling middleware

### Database & ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema management
- **Schema Validation**: Zod for runtime type checking

## Key Components

### Frontend Components
- **Landing Page**: Professional appliance repair service website with:
  - Hero section with call-to-action
  - Services showcase with appliance icons
  - Service request form
  - Contact information and social links
- **UI Components**: Complete shadcn/ui component library implementation
- **Form Handling**: Validated contact forms with real-time feedback
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Services
- **Service Request API**: Handles customer service requests
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Request Validation**: Zod schema validation for all API inputs
- **Development Tools**: Vite integration for hot reloading in development

### Data Models
- **Users**: Basic user management (prepared for future authentication)
- **Service Requests**: Customer repair requests with:
  - Contact information (name, phone, email)
  - Appliance type and location
  - Problem description
  - Automatic timestamps

## Data Flow

1. **Service Request Submission**:
   - Customer fills out form on landing page
   - Frontend validates data using Zod schemas
   - API request sent to `/api/service-request`
   - Backend validates and stores request
   - Success/error feedback displayed to customer

2. **Request Management**:
   - Admin endpoint at `/api/service-requests` for viewing all requests
   - In-memory storage for development (ready for PostgreSQL integration)

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem (React, React DOM)
- **Component Library**: Radix UI primitives with shadcn/ui
- **Styling**: Tailwind CSS with class-variance-authority
- **Data Fetching**: TanStack Query for server state
- **Database**: Drizzle ORM with PostgreSQL driver
- **Validation**: Zod for schema validation
- **Form Handling**: React Hook Form with resolvers
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx, date-fns for common operations

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **TypeScript**: Full TypeScript support across stack
- **Development Server**: Express with Vite middleware integration
- **Hot Reloading**: Vite HMR for fast development cycles

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations prepare PostgreSQL schema

### Environment Configuration
- **Development**: Runs with tsx for TypeScript execution and Vite dev server
- **Production**: Compiled JavaScript with static file serving
- **Database**: Environment variable configuration for database URL

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Database schema deployment

### Hosting Considerations
- Designed for platforms supporting Node.js applications
- Static assets served from Express in production
- PostgreSQL database required (Neon serverless configured)
- Environment variables needed for database connection