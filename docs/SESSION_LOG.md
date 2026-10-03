# Session log

## 2026-10-03, Phase 0 start (read-only)

Instruction: execute `docs/MASTER_PROMPT.md`, Phase 0. Nothing live was changed in this session.

### Tools and access

| Tool | Status | Access | Notes |
| --- | --- | --- | --- |
| Shopify Admin API (Shopify connector, store celikkasaci.com) | Works | Read and write available; used read-only | Theme files, products, collections, pages, blogs, menus, redirects, discounts, orders, policies, app list all readable. Theme writes would go through `themeFilesUpsert`; not used. |
| Shopify CLI | Not available | None | Not installed and not authenticated in this container. |
| Theme in Git | Not present | None | This repository (`celikkasaciniz-debug/aa`) holds an old ikas theme (`celik-kasa-tema/`), not the Shopify theme. The live Shopify theme `MR WEB DESIGN-DW (izleme düzeltmesi)` (id 142811758792) exists only in Shopify. Decision needed in Phase 1 (see DECISIONS proposal in PHASE0-SUMMARY.md). |
| Google Ads (`google-ads` MCP, googleads/google-ads-mcp) | Works | Read only | Tools: `customers_list_accessible_customers`, `metadata_get_resource_metadata`, `search_search` (GAQL). It cannot change anything. Keyword Planner volumes are not available (KeywordPlanIdeaService is not exposed). An attempt to run a validate-only write through the Python client was blocked by this session's safety policy. |
| Google Ads accounts | | | Ad account Çelik Kasacı 2404786286 (TRY, Europe/Istanbul), accessed directly. Manager 2307077449 has no linked clients. Cloud project able-balm-510520-v4 has Basic API access. |
| Kling AI (`kling` MCP) | Works | OAuth, Pro plan, 3.055 credits | Generation is charged per job. Use is limited by MASTER_PROMPT section 4.8. Server reported a newer tool list (mcpVersion 1.3.3); restart the session to refresh. |
| Search Console | Not available | None | No connector or API credentials. Needed for section 6.2 and 6.10. |
| Live site over HTTP | Blocked | None | The container's network policy denies celikkasaci.com and celikkasaci.com.tr (proxy 403). No status codes, rendered HTML, robots.txt, sitemap, Lighthouse or PageSpeed from here. |
| Microsoft Clarity, PayTR panel, Merchant Center | Not available | None | |

### Consequences for Phase 0

- Everything that needs live HTTP (status codes, Lighthouse, page weight, rendered structured data, .com.tr sitemap) is marked "not measured" and listed in NEEDS-CONFIRMATION.md with the action that unblocks it.
- Keyword volumes are blank in keyword-map.csv until Keyword Planner or Search Console access exists.
