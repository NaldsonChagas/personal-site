# My personal website

Personal site and portfolio for **Naldson Bento Chagas** — Senior Backend Developer. SPA with i18n (EN/PT), responsive layout, and focus on SEO and performance.

---

## Stack

- **Node.js** (latest LTS)
- **pnpm** (package manager)
- **TypeScript**
- **Vue 3** + **Vue Router**
- **Vite**
- **Tailwind CSS**
- **Express** (serves production build)

---

## How to run

**Prerequisites:** Node.js LTS and [pnpm](https://pnpm.io) installed.

```bash
# Install dependencies
pnpm install

# Development server (with hot reload)
pnpm dev

# Production build
pnpm build

# Preview production build locally
pnpm preview

# Production: build then run Express server
pnpm build
pnpm start
```

Development server runs at `http://localhost:5173` (or the port shown in the terminal). Production server runs at `http://localhost:3000` (or set `PORT`).

---

## Run with Docker

**Prerequisites:** Docker and Docker Compose installed.

```bash
# Build and run
docker compose up --build

# Run in background
docker compose up --build -d

# Stop
docker compose down
```

The app is available at `http://localhost:3000`.
