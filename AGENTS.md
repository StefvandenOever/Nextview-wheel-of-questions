# Project Agents Guide

This file provides guidance for AI agents working on the Nextview Wheel of Questions codebase.

## Project Structure
- `/src`: React source code
  - `App.jsx` and `main.jsx` provide the application entry points.
  - Utility modules such as `random.js` and `shuffleBag.js` live here.
  - `tailwind.css` contains Tailwind inputs. Create `src/components/` for new React components.
- `/tests`: Jest test files.
- `/tailwind.css`: Generated Tailwind output (do not edit directly).
- Other root files include `index.html` and `ConfettiEngine.js`.

## Coding Conventions
- Use JavaScript/JSX with **2 spaces** for indentation and terminate statements with semicolons.
- Prefer `rg` for code search (avoid `grep -R` or `ls -R`).
- Use functional components with React hooks and keep components small.
- Name React components using `PascalCase.jsx`; utilities use `camelCase.js`.
- Add comments for complex logic and keep variable/function names meaningful.

## Styling
- Use Tailwind CSS utility classes; custom CSS should be rare.
- If `src/tailwind.css` changes, run `npm run build:css` to regenerate the root `tailwind.css`.

## Testing & Programmatic Checks
- Run `npm test` and ensure it passes.
- For targeted tests use: `npm test -- path/to/test.test.js`.
- Run `npm run build` to confirm the project builds without errors.

## Pull Requests
1. Provide a clear description and reference related issues.
2. Ensure tests and builds pass and include screenshots for UI changes.
3. Keep pull requests focused on a single concern.

Happy hacking!
