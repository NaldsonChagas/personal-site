# Stack

Technical stack and tooling for the personal site (frontend and backend).

## Build and development

| Tool           | Role                                                           |
| -------------- | -------------------------------------------------------------- |
| **pnpm**       | Package manager. Use `pnpm install`, `pnpm dev`, `pnpm build`. |
| **Vite**       | Build tool and dev server. Current major: 7.x.                 |
| **Vue 3**      | Frontend framework. Composition API.                           |
| **TypeScript** | Strict mode; all app code in `src/` is typed.                  |
| **Express**    | Production server; serves `dist/public/`.                |

- **Scripts**: `dev` (Vite dev server), `build` (vue-tsc + Vite build), `preview` (preview production build), `start` (Express server for production).
- **Path alias**: `@` points to `src/` (e.g. `import X from '@/components/X.vue'`).

## Styling

- **Tailwind CSS** (v4): Via `@tailwindcss/vite` plugin; no separate PostCSS Tailwind config. Single `@import 'tailwindcss'` in `src/style.css`.
- **Custom CSS**: Organized by responsibility under `src/styles/` (variables, base, layout, components, utilities). See [structure.md](structure.md) and `.cursor/rules/tailwind-and-css.mdc`.

## Quality and formatting

- **ESLint**: Vue + TypeScript (flat config in `eslint.config.js`). Rules aligned with project standards (2 spaces, naming, etc.).
- **Prettier**: Code formatting; config in `.prettierrc`. Use `eslint-config-prettier` so ESLint does not conflict with Prettier.
- **Scripts**: `lint`, `lint:fix`, `format` (Prettier write).
- **Git hooks**: **Husky** runs `pnpm run lint` on pre-commit so commits must pass ESLint.

## Router and i18n

- **Vue Router**: Single entry route `/` by default. Use lazy-loaded components for additional routes: `() => import('@/views/...')`.
- **i18n**: No external library in the initial setup. Messages in `src/i18n/messages.ts` (EN/PT); composable `useI18n()` in `src/i18n/useI18n.ts` exposes `locale`, `t(key)`, and `setLocale`. Document `lang` is updated when locale changes (see `.cursor/rules/semantic-html-seo.mdc`).

## Backend

- **Express** server in TypeScript under `src/server/`.
- Serves static files from `dist/public/` (Vite output of `pnpm build`).
- Any request that does not match a file in `dist/public/` is redirected to `/` (single-page site).
- Production: run `pnpm build` then `pnpm start` to serve the site.
- The app can also be run via Docker; see [docker.md](docker.md).
