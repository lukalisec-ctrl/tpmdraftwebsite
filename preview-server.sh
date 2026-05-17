#!/bin/bash
# preview-server.sh — Local preview for the Tanja Pia Metelko website

PORT=8000

echo ""
echo "  Dr. Tanja Pia Metelko — Local Preview"
echo "  ─────────────────────────────────────"
echo "  Server: http://localhost:$PORT"
echo "  Press Ctrl+C to stop."
echo ""

# Try Python 3 first, fall back to Python 2
if command -v python3 &>/dev/null; then
  python3 -m http.server $PORT
elif command -v python &>/dev/null; then
  python -m SimpleHTTPServer $PORT
else
  echo "  Error: Python not found. Install Python 3 to use this script."
  exit 1
fi
