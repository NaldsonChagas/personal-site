# Project Documentation — Personal Site

## What the project is

Personal site and portfolio for **Naldson Bento Chagas**, focused on professional presentation as a **Senior Backend Developer**. The site is static (SPA), internationalized, responsive, and optimized for SEO and performance.

### Goals

- Present experience, skills, and impact cases (Fintech, Retail, Public Sector, iGaming, etc.).
- Offer content in **English (EN)** and **Portuguese (PT)**.
- Serve as a contact point (email, LinkedIn) for professional opportunities.
- Load fast and follow accessibility and SEO best practices.

---

## Stack and requirements

| Layer        | Technology                                                                           |
| ------------ | ------------------------------------------------------------------------------------ |
| **Runtime**  | **Node.js** — latest **LTS** version (see [nodejs.org](https://nodejs.org)).         |
| **Language** | **TypeScript** (frontend and server).                                                |
| **Frontend** | **Vue.js** (SPA) with **Tailwind CSS** for styling.                                  |
| **Backend**  | **Express** — serves static files and handles routing (SPA fallback).                |
| **i18n**     | Internationalization in the style of the templates (e.g. `lang="en"` / `lang="pt"`). |

---

## Reference structure

- **Layout references**: `layouts/desktop/` and `layouts/mobile/` (HTML + PNG) define the look and structure of sections (hero, about, cases, contact).
- **Profile photo**: `layouts/IMG_2003.jpg` — used on the site (in production, via `public/` or build assets).

---

## Standards and quality

The project follows rules defined in `.cursor/rules/`:

- **Code**: Google Style Guide (TypeScript), DRY, KISS, SRP; no unnecessary comments; low complexity.
- **CSS**: Tailwind as base; custom CSS in small files by responsibility (variables, base, layout, components, utilities).
- **HTML**: Semantic (header, nav, main, section, footer, heading hierarchy).
- **SEO**: Unique title and meta per page, stable URLs, content in HTML.
- **Performance**: Optimized images, lazy loading, bundling, and appropriate cache.
- **Responsiveness**: Analyze desktop and mobile layouts when developing features.
- **Commits**: Semantic commits with brief, meaningful descriptions.

---

## Documents

- **README.md** (this file): project overview, stack, and standards.
- **[structure.md](structure.md)**: Project folder structure (frontend and backend in `src/`).
- **[stack.md](stack.md)**: Build tools, styling, lint/format, router, i18n, and Husky.
- **[docker.md](docker.md)**: Build and run with Docker (Dockerfile and docker-compose).
- Other specific documents can be added under `docs/` as needed (e.g. architecture, deploy).
