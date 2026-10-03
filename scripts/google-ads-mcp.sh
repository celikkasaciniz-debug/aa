#!/usr/bin/env bash
# Launches the Google Ads MCP server (googleads/google-ads-mcp) over stdio.
# Installs it into a venv on first run (cloud containers start empty) and
# writes Application Default Credentials from the GOOGLE_ADS_ADC_JSON secret.
# Everything except the server itself must write to stderr: stdout is the MCP channel.
set -euo pipefail

REV=8efbd2e2b56da755cd0b3e642149ed8ad96b44b5
VENV="$HOME/.venvs/google-ads-mcp"

if [ ! -x "$VENV/bin/google-ads-mcp" ]; then
  python3 -m venv "$VENV" >&2
  "$VENV/bin/pip" install -q --disable-pip-version-check \
    "git+https://github.com/googleads/google-ads-mcp.git@$REV" >&2
fi

if [ -n "${GOOGLE_ADS_ADC_JSON:-}" ]; then
  mkdir -p "$HOME/.config/gcloud"
  (umask 077; printf '%s' "$GOOGLE_ADS_ADC_JSON" > "$HOME/.config/gcloud/application_default_credentials.json")
fi

exec "$VENV/bin/google-ads-mcp"
