# VŠTJ Technika Praha — Rozcestník (links) web

Short single-page React + Vite site used as a small hub for subdomains (tenis, jachting, ...).  
Built with React 19, TypeScript and MUI. Simple client-side navigation (history pushState).

---

## Table of contents

- Project overview
- Prerequisites
- Local setup (Windows / PowerShell)
- Dev workflow (run / build / preview)
- Project structure (important files & folders)
- Key components / responsibilities
- How to add a new Tile (step-by-step)
- How to add a new page (O nás / Kontakt pattern)
- Markdown files note (imports & TS declarations)
- Theme / colors
- Deployment notes
- Troubleshooting (common problems & fixes)
- Contributing / commit guidelines

---

## Project overview

This repo is a minimal SPA that:
- Shows a header and footer on every page
- Renders a centered grid/list of Tiles that link to subdomains
- Has two simple pages ("O nás", "Kontakt") in the SPA
- Uses MUI for layout and visual components

Goal: keep things small and easy to maintain.

---

## Prerequisites

- Node.js (LTS recommended).
  - Check: `node -v`
  - Recommended: Node 18+ (or current LTS available when project was created).
- npm (bundled with Node) or yarn (commands below assume npm).
- A code editor (VS Code recommended).

---

## Local setup (Windows PowerShell)

Clone and install dependencies:
```powershell
git clone <repo-url>
cd vstj-techinka-rozcestnik-web
npm install
```

Start dev server:
```powershell
npm run dev
# open the printed local URL (e.g. http://localhost:5173/)
```

Build for production:
```powershell
npm run build
# optional preview of the build:
npm run preview
```

Note: if your environment shows peer warnings during install, verify `react` and `react-dom` versions.

---

## Dev workflow

- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build locally: `npm run preview`
- If you add TypeScript declaration files (`src/types/*.d.ts`), restart your editor TS server.

---

## Project structure (high level)

- package.json — deps & scripts
- tsconfig.json — TypeScript config
- index.html — app mount
- src/
  - main.tsx — app bootstrap
  - App.tsx — top-level router & layout (imports Header, Footer, TilesGrid)
  - components/
    - Header.tsx
    - Footer.tsx
    - Tile.tsx
    - TilesGrid.tsx
  - pages/
    - About.tsx
    - Contact.tsx
  - content/
    - About.md (example markdown)
  - types/
    - md.d.ts (declaration for importing .md files or `?raw`)

---

## Key components / responsibilities

- Header.tsx
  - AppBar with title and navigation links ("O nás", "Kontakt")
  - Title is clickable and navigates home via pushState

- Footer.tsx
  - Left: address / contact text
  - Right: social icon links (Facebook, Instagram, YouTube)

- Tile.tsx
  - Card that links to external subdomain (CardActionArea with fixed height and maxWidth)
  - Keep uniform sizing (maxWidth + fixed action height) for consistent layout

- TilesGrid.tsx
  - Renders tiles from an array
  - Uses a wrapping layout (flex or grid) with centered justification
  - Controls how many tiles per row (via card width + gap + container width)

- pages/About.tsx & pages/Contact.tsx
  - Simple centered content; rendered inside App layout so header/footer persist

---

## How to add a new Tile

Open `src/components/TilesGrid.tsx`. Tiles come from an array like:

```ts
const tiles = [
  { title: 'Tenis', href: 'https://tenis.technika-praha.cz' },
  { title: 'Jachting', href: 'https://jachting.technika-praha.cz' },
  // add new tile:
  { title: 'Nový oddíl', href: 'https://novy.technika-praha.cz' },
];
```

- To change how many tiles are shown per row, either:
  - Adjust `CARD_W` (card base width) so more/less fit in the container, or
  - Use a CSS Grid `repeat(auto-fit, minmax(...))` pattern or responsive breakpoints.

- Keep the Tile component consistent (maxWidth + fixed height) to ensure equal sizes.

---

## How to add a new page

- Create `src/pages/MyPage.tsx`:

```tsx
export default function MyPage() {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h5">Ještě na tom pracujeme...</Typography>
    </Box>
  );
}
```

- Add navigation:
  - Update `Header.tsx` navigation to call `navigateTo('/my-page')`
  - Update the router logic in `App.tsx` to render the new page when `location.pathname` matches `/my-page`.

Note: This project uses a tiny pushState-based router — client-side only. If you need direct deep-linking on the server, configure your static host to fallback to `index.html`.

---

## Markdown files note

- Markdown files can be imported and displayed on pages.
- TypeScript needs a declaration for `.md` imports. Add `src/types/md.d.ts`:

```ts
declare module '*.md' {
  const content: string;
  export default content;
}
```

- Prefer Vite raw import when you need markdown text directly:
  ```ts
  import aboutMd from '../content/About.md?raw';
  ```

If you add these files, restart your editor TS server.

---

## Theme / colors

- Theme is MUI-driven.
- Header primary color used: `#de403a` (adjust in theme or inline sx).
- To change site colors: update MUI theme palette or inline sx styles in `Header`/`Footer`.

---

## Deployment notes

- Output is static (Vite build). Upload `dist/` to static host (Netlify, Vercel, S3, GitHub Pages).
- SPA routes require redirect/fallback to `index.html`. Configure host accordingly (Netlify `_redirects`, Vercel settings, etc.)

---

## Troubleshooting (common issues)

- Blank page in browser:
  - Open DevTools Console — check for module not found / runtime errors.
  - Missing MUI packages cause runtime import errors — ensure `@mui/material`, `@emotion/react`, `@emotion/styled` are installed.
  - Duplicate React copies → `npm ls react react-dom` should show a single copy.

- TypeScript errors on `.md` imports:
  - Add `src/types/md.d.ts` and restart TS server.

- App not updating after edits:
  - Restart dev server. Clear browser cache if necessary.

- Invalid hook call / Rules of Hooks:
  - Ensure React is installed once and hooks are used only inside components.

---

## Updating dependencies

- Use `npm update` or update specific packages:
```powershell
npm install react@latest react-dom@latest
npm install @mui/material @emotion/react @emotion/styled
```
- After large upgrades (React/MUI), run the build and test pages.

---

## Contributing & style

- Small PRs are preferred.
- Clear commit messages: `feat: add new tile`, `fix: header clickable area`.
- Keep code modular: header/footer/tiles separated in `src/components`.
- Add tests or smoke checks if adding significant behavior.

---

## Notes for maintainers

- Routing is intentionally minimal to keep bundle small. If project grows, consider React Router.
- TilesGrid layout uses either flex-wrap or CSS Grid. If you change layout, verify center behavior for incomplete final rows.
- Keep Tile dimensions consistent (maxWidth + fixed action height) so UI stays stable.

---

If you want, I can:
- Add this README to the repo (done),
- Create a CONTRIBUTING.md with a PR checklist,
- Add lint/format scripts (`npm run lint`, `npm run format`) and a pre-commit hook.

```// filepath: c:\Users\Martin\repos\vstj-techinka-rozcestnik-web\README.md
# VŠTJ Technika Praha — Rozcestník (links) web

Short single-page React + Vite site used as a small hub for subdomains (tenis, jachting, ...).  
Built with React 19, TypeScript and MUI. Simple client-side navigation (history pushState).

---

## Table of contents

- Project overview
- Prerequisites
- Local setup (Windows / PowerShell)
- Dev workflow (run / build / preview)
- Project structure (important files & folders)
- Key components / responsibilities
- How to add a new Tile (step-by-step)
- How to add a new page (O nás / Kontakt pattern)
- Markdown files note (imports & TS declarations)
- Theme / colors
- Deployment notes
- Troubleshooting (common problems & fixes)
- Contributing / commit guidelines

---

## Project overview

This repo is a minimal SPA that:
- Shows a header and footer on every page
- Renders a centered grid/list of Tiles that link to subdomains
- Has two simple pages ("O nás", "Kontakt") in the SPA
- Uses MUI for layout and visual components

Goal: keep things small and easy to maintain.

---

## Prerequisites

- Node.js (LTS recommended).
  - Check: `node -v`
  - Recommended: Node 18+ (or current LTS available when project was created).
- npm (bundled with Node) or yarn (commands below assume npm).
- A code editor (VS Code recommended).

---

## Local setup (Windows PowerShell)

Clone and install dependencies:
```powershell
git clone <repo-url>
cd vstj-techinka-rozcestnik-web
npm install
```

Start dev server:
```powershell
npm run dev
# open the printed local URL (e.g. http://localhost:5173/)
```

Build for production:
```powershell
npm run build
# optional preview of the build:
npm run preview
```

Note: if your environment shows peer warnings during install, verify `react` and `react-dom` versions.

---

## Dev workflow

- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview production build locally: `npm run preview`
- If you add TypeScript declaration files (`src/types/*.d.ts`), restart your editor TS server.

---

## Project structure (high level)

- package.json — deps & scripts
- tsconfig.json — TypeScript config
- index.html — app mount
- src/
  - main.tsx — app bootstrap
  - App.tsx — top-level router & layout (imports Header, Footer, TilesGrid)
  - components/
    - Header.tsx
    - Footer.tsx
    - Tile.tsx
    - TilesGrid.tsx
  - pages/
    - About.tsx
    - Contact.tsx
  - content/
    - About.md (example markdown)
  - types/
    - md.d.ts (declaration for importing .md files or `?raw`)

---

## Key components / responsibilities

- Header.tsx
  - AppBar with title and navigation links ("O nás", "Kontakt")
  - Title is clickable and navigates home via pushState

- Footer.tsx
  - Left: address / contact text
  - Right: social icon links (Facebook, Instagram, YouTube)

- Tile.tsx
  - Card that links to external subdomain (CardActionArea with fixed height and maxWidth)
  - Keep uniform sizing (maxWidth + fixed action height) for consistent layout

- TilesGrid.tsx
  - Renders tiles from an array
  - Uses a wrapping layout (flex or grid) with centered justification
  - Controls how many tiles per row (via card width + gap + container width)

- pages/About.tsx & pages/Contact.tsx
  - Simple centered content; rendered inside App layout so header/footer persist

---

## How to add a new Tile

Open `src/components/TilesGrid.tsx`. Tiles come from an array like:

```ts
const tiles = [
  { title: 'Tenis', href: 'https://tenis.technika-praha.cz' },
  { title: 'Jachting', href: 'https://jachting.technika-praha.cz' },
  // add new tile:
  { title: 'Nový oddíl', href: 'https://novy.technika-praha.cz' },
];
```

- To change how many tiles are shown per row, either:
  - Adjust `CARD_W` (card base width) so more/less fit in the container, or
  - Use a CSS Grid `repeat(auto-fit, minmax(...))` pattern or responsive breakpoints.

- Keep the Tile component consistent (maxWidth + fixed height) to ensure equal sizes.

---

## How to add a new page

- Create `src/pages/MyPage.tsx`:

```tsx
export default function MyPage() {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h5">Ještě na tom pracujeme...</Typography>
    </Box>
  );
}
```

- Add navigation:
  - Update `Header.tsx` navigation to call `navigateTo('/my-page')`
  - Update the router logic in `App.tsx` to render the new page when `location.pathname` matches `/my-page`.

Note: This project uses a tiny pushState-based router — client-side only. If you need direct deep-linking on the server, configure your static host to fallback to `index.html`.

---

## Markdown files note

- Markdown files can be imported and displayed on pages.
- TypeScript needs a declaration for `.md` imports. Add `src/types/md.d.ts`:

```ts
declare module '*.md' {
  const content: string;
  export default content;
}
```

- Prefer Vite raw import when you need markdown text directly:
  ```ts
  import aboutMd from '../content/About.md?raw';
  ```

If you add these files, restart your editor TS server.

---

## Theme / colors

- Theme is MUI-driven.
- Header primary color used: `#de403a` (adjust in theme or inline sx).
- To change site colors: update MUI theme palette or inline sx styles in `Header`/`Footer`.

---

## Deployment notes

- Output is static (Vite build). Upload `dist/` to static host (Netlify, Vercel, S3, GitHub Pages).
- SPA routes require redirect/fallback to `index.html`. Configure host accordingly (Netlify `_redirects`, Vercel settings, etc.)

---

## Troubleshooting (common issues)

- Blank page in browser:
  - Open DevTools Console — check for module not found / runtime errors.
  - Missing MUI packages cause runtime import errors — ensure `@mui/material`, `@emotion/react`, `@emotion/styled` are installed.
  - Duplicate React copies → `npm ls react react-dom` should show a single copy.

- TypeScript errors on `.md` imports:
  - Add `src/types/md.d.ts` and restart TS server.

- App not updating after edits:
  - Restart dev server. Clear browser cache if necessary.

- Invalid hook call / Rules of Hooks:
  - Ensure React is installed once and hooks are used only inside components.

---

## Updating dependencies

- Use `npm update` or update specific packages:
```powershell
npm install react@latest react-dom@latest
npm install @mui/material @emotion/react @emotion/styled
```
- After large upgrades (React/MUI), run the build and test pages.

---

## Contributing & style

- Small PRs are preferred.
- Clear commit messages: `feat: add new tile`, `fix: header clickable area`.
- Keep code modular: header/footer/tiles separated in `src/components`.
- Add tests or smoke checks if adding significant behavior.

---

## Notes for maintainers

- Routing is intentionally minimal to keep bundle small. If project grows, consider React Router.
- TilesGrid layout uses either flex-wrap or CSS Grid. If you change layout, verify center behavior for incomplete final rows.
- Keep Tile dimensions consistent (maxWidth + fixed action height) so UI stays stable.