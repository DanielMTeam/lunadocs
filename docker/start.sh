#!/bin/sh

set -e

cd /app

# Create project if empty
if [ ! -f package.json ]; then
  echo "Creating Astro Starlight project..."

  mkdir /tmp/starlight
  cd /tmp/starlight

  npm create astro@latest . -- --template starlight/tailwind --yes

  cp -r /tmp/starlight/* /app/
  cp -r /tmp/starlight/.* /app/ 2>/dev/null || true

  cd /app
fi

npm install

# Decide mode
if [ "$MODE" = "preview" ]; then
  echo "Running Astro production preview..."
  npm run build
  npm run preview -- --host 0.0.0.0
else
  echo "Running Astro development server..."
  npm run dev -- --host 0.0.0.0
fi