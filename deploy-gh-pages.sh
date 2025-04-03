#!/bin/bash

# Deployment script for GitHub Pages

# Exit on any error
set -e

echo "🔍 Checking if the project is in a Git repository..."
if [ ! -d .git ]; then
  echo "❌ Error: This script must be run from the root of a Git repository."
  echo "Please initialize a Git repository first:"
  echo "  git init"
  echo "  git add ."
  echo "  git commit -m 'Initial commit'"
  exit 1
fi

# Make sure the repository has a remote
echo "🔍 Checking for a remote GitHub repository..."
if ! git remote -v | grep -q origin; then
  echo "❌ Error: No remote repository found."
  echo "Please add your GitHub repository as a remote:"
  echo "  git remote add origin https://github.com/yourusername/restaurant-titanic.git"
  exit 1
fi

# Use the GitHub Pages specific Vite config
echo "📦 Building the static site for GitHub Pages deployment..."
VITE_CONFIG_FILE=vite.config.github-pages.js npx vite build

# Create a .nojekyll file in the dist folder to disable Jekyll processing
echo "🔧 Creating .nojekyll file to disable Jekyll processing..."
touch dist/public/.nojekyll

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d dist/public

echo "✅ Deployment complete!"
echo "Your website should be available at: https://yourusername.github.io/restaurant-titanic/"
echo "⚠️ Note: You may need to wait a few minutes for the changes to propagate."
echo "⚠️ Remember to replace 'yourusername' with your actual GitHub username."