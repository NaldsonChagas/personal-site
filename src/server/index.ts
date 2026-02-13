import compression from 'compression';
import express from 'express';
import path from 'path';

const staticDir = path.join(process.cwd(), 'dist');
const PORT = Number(process.env.PORT) || 3000;

const LONG_CACHE = 'public, max-age=31536000, immutable';
const NO_CACHE = 'no-cache';

function setCacheHeaders(res: express.Response, filePath: string): void {
  const normalized = filePath.replace(/\\/g, '/');
  if (normalized.includes('/assets/')) {
    res.setHeader('Cache-Control', LONG_CACHE);
    return;
  }
  if (normalized.endsWith('index.html')) {
    res.setHeader('Cache-Control', NO_CACHE);
    return;
  }
  res.setHeader('Cache-Control', NO_CACHE);
}

const app = express();
app.use(compression());
app.use(
  express.static(staticDir, {
    setHeaders: setCacheHeaders,
  })
);
app.get('/{*splat}', (_req, res) => {
  res.setHeader('Cache-Control', NO_CACHE);
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
