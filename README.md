# Portfolio Home Screen

This is a code bundle for Portfolio Home Screen. The original project is available at https://www.figma.com/design/T1UCgNucsm1CDSCm577vDF/Portfolio-Home-Screen.

## Running the code

1. Install deps: `npm install` (or `npm ci` to use the lockfile)
2. Start dev server: `npm run dev` (Vite will print the local URL)

## Deploying to GitHub Pages

The Vite build outputs static files to `docs/` with `base: '/portfolio/'`, so GitHub Pages can serve directly from the repo.

1. Build: `npm run build` (generates `docs/`)
2. Commit and push `docs/` to `main`
3. In GitHub repo settings → Pages: set **Source** to branch `main`, folder `/docs`
4. The site will be available at https://dehyde.github.io/portfolio/

If you rebuild later, re-run `npm run build`, commit the updated `docs/`, and push to `main`.
