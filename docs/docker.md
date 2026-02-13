# Docker

Run the site in a container: the image builds the frontend (Vite) and runs the Express server serving `dist/`.

## Prerequisites

- Docker
- Docker Compose

## Build and run

```bash
# Build the image and start the container
docker compose up --build

# Run in background
docker compose up --build -d
```

The app is available at `http://localhost:3000`.

## Stop

```bash
docker compose down
```

## Configuration

- **Port**: Host and container use port 3000. Override in the container with the `PORT` environment variable (see `docker-compose.yml`).
- **Build**: The Dockerfile uses Node 24 Alpine, installs dependencies with pnpm, runs `pnpm build`, then starts the server with `pnpm start`.

## Without Compose

```bash
docker build -t carrer .
docker run -p 3000:3000 carrer
```
