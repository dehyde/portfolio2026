# Portfolio Home Screen

This is a code bundle for Portfolio Home Screen. The original project is available at https://www.figma.com/design/T1UCgNucsm1CDSCm577vDF/Portfolio-Home-Screen.

## Running the code

1. Run `npm i` to install the dependencies.
2. Run `npm run dev` to start the development server.

## Deploying to GitHub Pages

This repository is configured to deploy automatically from `main` using GitHub Actions.

1. Ensure the repository owner has Pages enabled for GitHub Actions deployments.
2. Push changes to `main`; the `Deploy to GitHub Pages` workflow will install dependencies, run `npm run build`, and publish the `dist` folder to the Pages site at `https://dehyde.github.io/portfolio/`.
3. If you need to deploy manually, run `npm run build` locally and upload the generated `dist/` folder as the Pages artifact in a workflow run.
