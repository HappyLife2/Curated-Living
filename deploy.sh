#!/usr/bin/env bash
# Curated Living — production deploy ritual (run on the VPS in /opt/projects/curated-living).
# Pulls main, rebuilds the container, restarts, and health-checks. Secrets stay in ./.env.
set -euo pipefail

cd "$(dirname "$0")"

echo "▸ Pulling latest main…"
git pull origin main

echo "▸ Building image…"
docker compose build

echo "▸ Restarting container…"
docker compose up -d

echo "▸ Waiting for health…"
for i in $(seq 1 30); do
  if curl -fsS http://127.0.0.1:3008/api/health >/dev/null 2>&1; then
    echo "✓ Healthy. Deployed."
    exit 0
  fi
  sleep 2
done

echo "✗ Health check failed — inspect: docker compose logs --tail=80 app"
exit 1
