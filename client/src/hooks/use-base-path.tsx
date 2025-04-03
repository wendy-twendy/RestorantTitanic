import { useCallback } from 'react';

/**
 * This hook handles GitHub Pages base path by detecting if we're on GitHub Pages
 * and extracting the repository name from the URL path.
 * 
 * Usage:
 * const basePath = useBasePath();
 * 
 * Then use it with your routes and links:
 * <Link to={`${basePath}/some-route`}>
 */
export function useBasePath() {
  const getBasePath = useCallback(() => {
    // Check if we're running on GitHub Pages (with repo name in the URL)
    const isGitHubPages = window.location.hostname.includes('github.io');
    if (isGitHubPages) {
      // Extract repo name from pathname - this assumes the format is /{repo-name}/...
      const pathSegments = window.location.pathname.split('/');
      if (pathSegments.length > 1) {
        return `/${pathSegments[1]}`;
      }
    }
    return '';
  }, []);

  return getBasePath();
}

/**
 * Directly get the base path without using React hooks
 * Useful in non-component code
 */
export function getBasePath(): string {
  if (typeof window === 'undefined') return '';
  
  // Check if we're running on GitHub Pages (with repo name in the URL)
  const isGitHubPages = window.location.hostname.includes('github.io');
  if (isGitHubPages) {
    // Extract repo name from pathname - this assumes the format is /{repo-name}/...
    const pathSegments = window.location.pathname.split('/');
    if (pathSegments.length > 1) {
      return `/${pathSegments[1]}`;
    }
  }
  return '';
}

/**
 * Creates a path with the correct base path for GitHub Pages
 * 
 * @param path The path to append to the base path
 * @returns The full path including base path if needed
 */
export function createPath(path: string): string {
  const basePath = getBasePath();
  // If path already starts with the base path, don't add it again
  if (path.startsWith(basePath)) return path;
  
  // Handle paths that start with / correctly
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}