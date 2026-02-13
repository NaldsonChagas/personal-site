import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = path.join(__dirname, '..', '..', 'dist');
const PORT = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.static(staticDir));
app.use((_req, res) => res.redirect(302, '/'));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
