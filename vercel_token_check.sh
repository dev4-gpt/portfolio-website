#!/usr/bin/env bash
# Check whether Vercel auth is available from the terminal.
# Usage:
#   VERCEL_TOKEN=your_token ./vercel_token_check.sh

set -euo pipefail

if [ -z "${VERCEL_TOKEN:-}" ]; then
  cat <<'EOF'
ERROR: VERCEL_TOKEN is not set.

To use this command, set the token in your environment:
  export VERCEL_TOKEN=your_token
  ./vercel_token_check.sh

If you do not have a token yet, you can generate one from your Vercel account:
1. Visit https://vercel.com/account/tokens
2. Create a token with read access
3. Export it in your shell as VERCEL_TOKEN
EOF
  exit 1
fi

echo "Checking Vercel token..."

user_info=$(curl -sS -H "Authorization: Bearer $VERCEL_TOKEN" https://api.vercel.com/v1/user)
if [ $? -ne 0 ]; then
  echo "Failed to verify token." >&2
  echo "$user_info"
  exit 1
fi

echo "Vercel token is valid. User info:"
echo "$user_info" | python3 -c 'import sys, json; data=json.load(sys.stdin); print(data.get("username") or data.get("email") or data)' 2>/dev/null || echo "$user_info"

echo
if command -v npx >/dev/null 2>&1; then
  echo "Your terminal can run Vercel commands with the token set. Example:"
  echo "  VERCEL_TOKEN=\$VERCEL_TOKEN npx vercel whoami"
else
  echo "Note: npx is not available; use curl-based API calls instead."
fi
