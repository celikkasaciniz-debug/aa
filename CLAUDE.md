# celikkasamerkezi

ikas storefront theme for the Çelik Kasa Merkezi store (Preact + TypeScript, ikas Code Components).

- `celik-kasa-tema/` — the theme project. Read `celik-kasa-tema/CLAUDE.md` before changing anything there; it holds the framework rules (CLI-managed files, sub-components, icons, Button).
- `celikkasaci-yedek/` — backups of storefront snippets removed from the live store (for restore only, not part of the build).

## Working in this repo

All commands run from `celik-kasa-tema/`:

- `npm ci` — install (a SessionStart hook does this automatically in cloud sessions)
- `npx ikas-component check --json` — type-check
- `npx ikas-component build` — build to `dist/` (gitignored)
- `python3 scripts/sync-inlined-styles.py` — re-run after editing styles of components inlined into ProductDetail / ProductCard

Live preview (`ikas theme dev`) needs the global `ikas` CLI and a login to the store editor; it is meant for a local machine, not the cloud container.
