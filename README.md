# Fiable Assessment

Assessment project built with React, Vite, Material UI, and Storybook.

### Deployed Storybook URL

Open the live Storybook here:

- https://fiable-assessment-6i568ats7-evedave1999-2990s-projects.vercel.app

## What was built

- Reusable component structure for a small design system
- `Header` component
- `Button` component
- `Alert` component
- `Card` component
- `LabeledValue` component
- `GridTable` component for a 5x5 grid
- Storybook pages for overview and component documentation
- Playground page with validation, input parsing, and grid preview
- Global shared constants and reusable utilities

## Tech stack

- React 
- Vite
- Material UI
- Storybook
- TypeScript

## Project structure

- `src/components` — reusable UI components
- `src/constants` — shared global constants
- `src/utils` — reusable helper functions
- `src/theme` — MUI theme configuration

## Setup & Run Storybook

```bash
npm install
```

```bash
npm run storybook
```

Open:

```bash
http://localhost:6006
```

### Build Storybook for production

```bash
npm run build-storybook
```

The output will be generated in:

```bash
storybook-static
```

## Build the app

```bash
npm run build
```

The production app build will be generated in:

```bash
dist
```

## Vercel deployment

The repository is configured for Vercel.

### Storybook as the deployed site

Current Vercel config is set to deploy Storybook as the site root:

- Build command: `npm run build-storybook`
- Output directory: `storybook-static`

### App deployment

If you want the app instead of Storybook, update Vercel settings or `vercel.json` to:

- Build command: `npm run build`
- Output directory: `dist`

## Validation and playground

The playground validates input in the following format:

```text
xAxis,yAxis,direction
```

Example:

```text
2,3,NORTH
```

Accepted directions:

- `NORTH`
- `SOUTH`
- `EAST`
- `WEST`

## Notes

- Pressing Enter in the playground input applies the value.
- Validation errors are shown with the reusable error alert.
- The grid shows the current selected position and direction.
