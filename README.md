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
