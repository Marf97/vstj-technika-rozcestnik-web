# VŠTJ Technika Praha — Rozcestník

A single-page React 19 + TypeScript + MUI directory linking to the club sports sections. The mounted page in `src/App.tsx` renders the club logo and introduction, a link to more information, `TilesGrid`, and `Footer`. `Header`, `About`, and `Contact` components exist but are not mounted; there is no client-side router.

## Local development

Use Node.js 20.19+ or 22.12+ and npm. From the repository root:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run lint
npm run build
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Open <http://127.0.0.1:5173/>. Stop the dev server with Ctrl+C. To preview a production build, run `npm run build` followed by:

```sh
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Open <http://127.0.0.1:4173/>. Choose another free port if needed. These commands bind the server to localhost only.

## Adding a tile

Edit the `tiles` array in `src/components/TilesGrid.tsx`. Each entry has a Czech title, destination URL, and a local public image path:

```tsx
const tiles = [
  { title: 'Tenis', href: 'https://tenis.technika-praha.cz', pictureUrl: '/tennis.png' },
  { title: 'Jachting', href: 'https://jachting.technika-praha.cz', pictureUrl: '/sailing-boat.png' },
  { title: 'Lukostřelba', href: 'https://www.cvut-archery.cz', pictureUrl: '/archery.svg' },
];
```

Place local assets in `public/` and reference them from the site root (for example, `/archery.svg`). Every entry uses the shared `Tile` component for the uniform card, decorative illustration, and link behavior. `TilesGrid` wraps and centers cards as space permits.

## Project map

- `src/main.tsx` — React bootstrap
- `src/App.tsx` — mounted page composition and theme
- `src/components/TilesGrid.tsx` — sports tile data and grid
- `src/components/Tile.tsx` — shared linked card
- `src/components/Footer.tsx` — mounted footer
- `src/components/Header.tsx`, `src/pages/About.tsx`, `src/pages/Contact.tsx` — currently unmounted components
- `public/` — static images

Run `npm run lint` and `npm run build` before submitting changes. There is no test script configured.