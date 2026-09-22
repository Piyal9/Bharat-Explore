import os
import sys
from pathlib import Path

# Add project root directory to Python path so backend imports resolve reliably in Vercel serverless environment
ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

# Import the initialized FastAPI application instance
from backend.server import app

# Export app as required by Vercel Serverless Function specification
# Vercel's @vercel/python detects 'app' as the ASGI application
