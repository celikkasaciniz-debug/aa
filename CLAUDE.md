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

## Google Ads MCP

`.mcp.json` registers the `google-ads` server ([googleads/google-ads-mcp](https://github.com/googleads/google-ads-mcp), pinned in `scripts/google-ads-mcp.sh`). The launcher installs it into `~/.venvs/google-ads-mcp` on first use. Tools are read-only: `customers_list_accessible_customers`, `metadata_get_resource_metadata`, `search_search` (GAQL).

Credentials come from environment variables (set them in the cloud environment settings, never in the repo):

- `GOOGLE_ADS_DEVELOPER_TOKEN` — optional; Google no longer requires one and API access levels are managed in Google Cloud Console. The account's existing token is Test Account level only, so leave it unset
- `GOOGLE_ADS_ADC_JSON` — contents of an `authorized_user` ADC file with the `adwords` scope; the launcher writes it to `~/.config/gcloud/application_default_credentials.json`
- `GOOGLE_ADS_LOGIN_CUSTOMER_ID` — manager (MCC) account ID when access goes through it; the manager account is `2307077449`
- `GOOGLE_CLOUD_PROJECT` — optional, defaults to the project `able-balm-510520-v4` in `.mcp.json`
