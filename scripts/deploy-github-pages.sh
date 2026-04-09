#!/usr/bin/env bash
# Build for GitHub Project Pages and push /dist to the gh-pages branch.
# Usage: ./scripts/deploy-github-pages.sh [repository-name]
# Requires: Node.js, npm, git, remote "origin" -> GitHub repo.

set -euo pipefail

REPO_NAME="${1:-prototype1}"
export GITHUB_PAGES_BASE="/${REPO_NAME}/"
echo "GITHUB_PAGES_BASE=${GITHUB_PAGES_BASE}"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run build
npx gh-pages -d dist -m "Deploy GitHub Pages"

echo "Done. In the GitHub repo: Settings -> Pages -> branch gh-pages / root."
