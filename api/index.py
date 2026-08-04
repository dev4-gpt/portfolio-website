import os
import sys

# Ensure the project root is on sys.path so `backend` is importable when
# Vercel packages the function in an isolated environment.
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if ROOT not in sys.path:
	sys.path.insert(0, ROOT)

from backend.server import app

# Vercel serverless function handler
handler = app
