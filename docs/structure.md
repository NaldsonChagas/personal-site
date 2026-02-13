# Project structure (frontend)

This document describes the frontend folder structure. The `layouts/` directory at the **repository root** is for **reference only** (HTML and PNG mockups); the actual Vue application lives under `src/`.

## Directory tree

```
src/
  assets/              # Images, fonts (e.g. profile photo copy from layouts/IMG_2003.jpg for build)
  components/          # Reusable UI components (Nav, Hero, MetricCard, etc.)
  composables/         # Reusable logic (e.g. future composables besides i18n)
  layouts/
    desktop/
      DesktopLayout.vue  # Desktop theme layout shell
  views/               # Page-level components (e.g. HomeView.vue); use lazy load when multiple routes exist
  router/
    index.ts           # Vue Router configuration
  i18n/                # EN/PT message keys and useI18n composable (no external i18n lib in initial setup)
  styles/              # CSS by responsibility (see .cursor/rules/tailwind-and-css.mdc)
    variables.css      # :root, design tokens (colors, typography)
    base.css           # body, reset, scroll behavior
    layout.css         # container, grid, page structure (header/footer/main)
    components/        # Per-component or group CSS (e.g. nav.css, metric-card.css)
    utilities.css      # Utility classes not in Tailwind (e.g. .gradient-text, .glass-card)
  App.vue
  main.ts
public/                # Static assets (favicon, etc.)
index.html
```

## Notes

- **Root `layouts/`**: Contains reference HTML and PNGs (`layouts/desktop/`, `layouts/mobile/`). Do not confuse with `src/layouts/desktop/`, which holds the Vue desktop layout component.
- **CSS import order** (in `src/style.css`): Tailwind → variables → base → layout → components → utilities.
- **Router**: Single route `/` by default; add more routes in `src/router/index.ts` and use lazy-loaded views when needed for performance.
