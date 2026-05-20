# Fall Of Dump

Browser games by a tiny AI-native studio.

## Stack

- **Language:** TypeScript (strict)
- **Engine:** [Phaser 3](https://phaser.io/) — small, well-trodden 2D engine with built-in scenes, text, and input. Good fit for a narrative game with one NPC and dialogue (M3).
- **Build tool:** [Vite](https://vitejs.dev/) — sub-second cold start, instant HMR.
- **Hosting:** GitHub Pages via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package. Pure static. Free.

All tooling is free and OSS. No paid services.

## Run locally

```bash
npm install        # one-time
npm run dev        # vite dev server on http://localhost:5173
```

Hot reload is on by default — edit `src/**` and the page refreshes.

Other scripts:

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with HMR.                          |
| `npm run build`     | Typecheck + production build → `dist/`.       |
| `npm run preview`   | Serve the built `dist/` locally.              |
| `npm run typecheck` | Typecheck only (no build).                    |
| `npm run deploy`    | Build and publish `dist/` to `gh-pages` branch. |

## Deploy

The build output is a fully static site — drop `dist/` on any static host.

**Default path (GitHub Pages):**

1. Ensure `origin` points at the studio's GitHub repo.
2. `npm run deploy` — builds, then pushes `dist/` to the `gh-pages` branch.
3. In repo Settings → Pages, set source to the `gh-pages` branch.

For project-style URLs (`https://<user>.github.io/<repo>/`), build with:

```bash
VITE_BASE=/<repo>/ npm run deploy
```

For a custom domain or user/org page, `VITE_BASE=/` (the default) is correct.

## Repo layout

```
.
├── index.html                  # Vite entry document
├── public/                     # static files copied verbatim into dist/
├── src/
│   ├── main.ts                 # Phaser.Game bootstrap
│   └── scenes/                 # one file per Phaser scene
│       └── HelloScene.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Where assets live

- **Static files** (favicon, fonts, raw audio, sprite sheets you don't transform): `public/` — referenced from code as `/foo.png`.
- **Imported assets** (anything you want hashed/optimized by Vite): `src/assets/` — referenced via `import url from './assets/foo.png'`.

Neither directory is required to exist; create whichever fits the asset.

## Roadmap notes

- **M3 (narrative + LLM dialogue):** Phaser scenes handle dialogue UI; the LLM call will live behind a small `/api/dialogue` endpoint (a serverless function alongside the static deploy) to keep keys off the client. No engine work needed to support this today.
