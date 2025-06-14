# Badminton Club

A monorepo containing a mobile-first Next.js application for managing badminton club members and matches.

## Project Structure

- `apps/web` - Next.js frontend + API routes
- `packages/db` - Mongoose models and connection helpers

## Setup

1. Install Node.js dependencies (requires internet access):
   ```sh
   npm install
   ```
2. Configure environment variables in `apps/web/.env.local`.
3. Run the development server:
   ```sh
   npm run dev --workspace=web
   ```

This project is designed to be deployed to Vercel.
