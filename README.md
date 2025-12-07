# Portfolio Home Screen

This is a code bundle for Portfolio Home Screen. The original project is available at https://www.figma.com/design/T1UCgNucsm1CDSCm577vDF/Portfolio-Home-Screen.

## Running the code

1. Run `npm i` (or `npm ci` if you prefer using the committed lockfile) to install the dependencies.
2. Run `npm run dev` to start the development server; the app will be available at the Vite dev URL printed in the console.

## Deploying to GitHub Pages

This repository is configured to deploy automatically from `main` using GitHub Actions.

1. In the repository settings, ensure Pages is enabled for GitHub Actions and set **Pages → Source** to **GitHub Actions** (using any other source will serve the raw `index.html` and produce a 404 for `/src/main.tsx`).
2. Push changes to `main`; the `Deploy to GitHub Pages` workflow will install dependencies, run `npm run build`, and publish the `dist` folder to the Pages site at `https://dehyde.github.io/portfolio/`.
3. If you need to deploy manually, run `npm run build` locally and upload the generated `dist/` folder as the Pages artifact in a workflow run. Confirm the workflow run finishes without errors before expecting the site to update.
