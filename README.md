# Kago Hills: Next.js + Sanity CMS

This is a monorepo containing the Kago Hills frontend and Sanity Studio for content management.

## Project Structure

```
kago-hills-fronted/
├── frontend/        # Next.js frontend application
├── cms/          # Sanity Studio CMS
└── package.json     # Root workspace configuration
```

## Getting Started

### Install Dependencies

Install all dependencies for both workspaces:

```bash
yarn install
```

### Development

Run both frontend and cms simultaneously:

```bash
yarn dev
```

Or run them individually:

```bash
yarn dev:frontend    # Runs Next.js on http://localhost:3000
yarn dev:cms      # Runs Sanity Studio on http://localhost:3333
```

### Building

Build all workspaces:

```bash
yarn build
```

Build specific workspace:

```bash
yarn build:frontend
# or
yarn build:cms
```

## Workspaces

### Frontend (`frontend/`)

Next.js application for the Kago Hills website.

- **Development**: `yarn workspace frontend dev`
- **Build**: `yarn workspace frontend build`
- **Start**: `yarn workspace frontend start`
- **Port**: <http://localhost:3000>

### CMS (`cms/`)

Sanity Studio for content management.

- **Development**: `yarn workspace studio dev`
- **Build**: `yarn workspace studio build`
- **Deploy**: `yarn workspace studio deploy`
- **Port**: <http://localhost:3333>

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
