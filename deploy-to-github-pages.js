#!/usr/bin/env node

// Simple script to deploy to GitHub Pages
import ghpages from 'gh-pages';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub repository name - replace this with your actual repository name
const repoName = 'restaurant-titanic';

console.log('📦 Building the static site for GitHub Pages deployment...');

// Run Vite build with GitHub Pages configuration to generate the static site
try {
  execSync('vite build --config vite.config.github-pages.js', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed', error);
  process.exit(1);
}

// Create a CNAME file if you have a custom domain
// Uncomment the following lines and replace with your domain if needed
/*
fs.writeFileSync(
  path.join(__dirname, 'dist/public', 'CNAME'), 
  'yourdomain.com'
);
console.log('✅ CNAME file created');
*/

// Create a simple index.html in the root to redirect to the base URL with the repo name
const indexHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting to Restaurant Titanic</title>
    <meta http-equiv="refresh" content="0; URL=https://yourusername.github.io/${repoName}/">
    <link rel="canonical" href="https://yourusername.github.io/${repoName}/">
  </head>
  <body>
    <p>Redirecting to <a href="https://yourusername.github.io/${repoName}/">Restaurant Titanic</a>...</p>
  </body>
</html>
`;

// Create a .nojekyll file to disable Jekyll processing
fs.writeFileSync(path.join(__dirname, 'dist/public', '.nojekyll'), '');
console.log('✅ .nojekyll file created to disable Jekyll processing');

// Create a vite.config.js file with the base configuration for GitHub Pages
const viteConfigJs = `
// This file is used only for the GitHub Pages build
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/${repoName}/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  root: path.resolve(__dirname, 'client'),
  build: {
    outDir: path.resolve(__dirname, 'dist/public'),
    emptyOutDir: true,
  },
});
`;

console.log('🚀 Publishing to GitHub Pages...');
ghpages.publish('dist/public', {
  branch: 'gh-pages',
  message: 'Auto-generated commit by gh-pages',
}, (err) => {
  if (err) {
    console.error('❌ Deployment failed', err);
    process.exit(1);
  }
  console.log('✅ Successfully published to GitHub Pages!');
  console.log(`🌐 Your site should be available at: https://yourusername.github.io/${repoName}/`);
  console.log('⚠️ Note: You may need to wait a few minutes for the changes to propagate.');
  console.log('⚠️ Remember to replace "yourusername" in the URL with your actual GitHub username.');
});