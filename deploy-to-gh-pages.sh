#!/bin/bash

# Script to deploy to GitHub Pages
echo "🚀 Starting GitHub Pages deployment process..."

# Make sure the script is executable
chmod +x deploy-to-github-pages.js

# Run the deployment script
echo "📦 Running deployment script..."
node deploy-to-github-pages.js

echo "✅ Deployment script completed!"