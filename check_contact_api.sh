#!/usr/bin/env bash
# Simple utility to verify the deployed contact API endpoints.
# Usage:
#   ./check_contact_api.sh https://your-vercel-app.vercel.app
#   ./check_contact_api.sh https://your-vercel-app.vercel.app -p
#   CHECK_API_POST=true ./check_contact_api.sh https://your-vercel-app.vercel.app

set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <base-url> [--post]"
  echo "Example: $0 https://aryamandev-cmuyw2e16-portfolio-47704487.vercel.app --post"
  exit 1
fi

BASE_URL="$1"
POST=false

if [ "${2:-}" = "--post" ] || [ "${CHECK_API_POST:-}" = "true" ]; then
  POST=true
fi

echo "Checking API at: $BASE_URL"

check_url() {
  local url="$1"
  local expect="$2"
  local label="$3"

  printf 'GET %s ... ' "$url"
  local output
  local status
  output=$(curl -sS -w '%{http_code}' --max-time 10 "$url" 2>&1) || true
  status=${output: -3}
  body=${output:0:-3}

  if [ "$status" = "200" ] && echo "$body" | grep -q "$expect"; then
    echo "OK"
    return 0
  fi

  if [ "$status" = "401" ]; then
    echo "FAILED (401 Unauthorized)"
    echo "  This looks like Vercel deployment protection / login is enabled."
    echo "  Make sure the project is public or use Vercel auth for API access."
  else
    echo "FAILED ($status)"
  fi
  echo "  Response snippet:"
  echo "$body" | head -n 15
  return 1
}

echo
check_url "$BASE_URL/api/" 'Hello World' '/api/'
echo
check_url "$BASE_URL/api/health" 'contact-api' '/api/health'

if [ "$POST" = true ]; then
  echo
  echo "POSTing test contact message to $BASE_URL/api/contact"
  if command -v jq >/dev/null 2>&1; then
    curl -sS --max-time 15 \
      -H 'Content-Type: application/json' \
      -d '{"name":"Test User","email":"test@example.com","project":"Test project","message":"Testing contact endpoint."}' \
      "$BASE_URL/api/contact" | jq .
  else
    curl -sS --max-time 15 \
      -H 'Content-Type: application/json' \
      -d '{"name":"Test User","email":"test@example.com","project":"Test project","message":"Testing contact endpoint."}' \
      "$BASE_URL/api/contact"
  fi
fi
