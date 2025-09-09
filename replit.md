# CVR Corpacs Business Website

## Overview

CVR Corpacs is a comprehensive business consulting website built with a modern full-stack architecture. The application serves as a professional platform for CVR Corpacs LLP, a business consulting firm established in 2004 that specializes in taxation, accounting, and business support services across India. The website features a client-facing portal with service information, team details, contact functionality, and an AI-powered recommendation system to help businesses identify suitable services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React 18 with TypeScript and follows a component-based architecture. The application uses Wouter for client-side routing instead of React Router, providing a lightweight navigation solution. The UI is constructed using Radix UI primitives with shadcn/ui components for a consistent design system.

**Key Frontend Design Decisions:**
- **Styling Framework**: Tailwind CSS for utility-first styling with custom color schemes and animations
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Component Library**: Radix UI primitives wrapped in shadcn/ui components for accessibility and consistency

### Backend Architecture
The backend follows a Node.js Express architecture with TypeScript support. The server handles API routes, email functionality, and database operations through a modular structure.

**Key Backend Design Decisions:**
- **Runtime**: Node.js with Express framework for HTTP server functionality
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Email Integration**: Nodemailer for contact form submissions and notifications
- **API Design**: RESTful endpoints with proper error handling and validation

### Database Design
The application uses PostgreSQL with Drizzle ORM for database operations. The schema includes tables for contact messages, user preferences, service interactions, and AI recommendations.

**Key Database Decisions:**
- **Primary Database**: PostgreSQL via Neon Database service
- **ORM Choice**: Drizzle for type-safe database queries and schema management
- **Migration Strategy**: Drizzle Kit for database schema migrations and updates

### Development and Build System
The project uses Vite as the build tool for fast development and optimized production builds. The development workflow supports hot module replacement and concurrent development of frontend and backend.

**Build System Decisions:**
- **Build Tool**: Vite for frontend bundling with React plugin support
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development**: Concurrent development with tsx for backend TypeScript execution
- **Production**: Optimized builds with esbuild for server-side bundling

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern React features
- **Express**: Node.js web framework for API routes and server functionality
- **TypeScript**: Type safety across the entire application stack
- **Vite**: Build tool and development server for frontend assets

### Database and ORM
- **@neondatabase/serverless**: PostgreSQL database connection via Neon's serverless offering
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **drizzle-kit**: Database migration and schema management tool

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Low-level UI primitives for accessible component development
- **shadcn/ui**: Pre-built component library based on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for external validation libraries
- **Zod**: Runtime type validation and schema definition library

### Communication and Email
- **Nodemailer**: Email sending functionality for contact form submissions
- **@tanstack/react-query**: Server state management and API caching

### Development Tools
- **tsx**: TypeScript execution for Node.js development
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit integration