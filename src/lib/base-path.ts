const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public-folder path when the site is built for GitHub Pages. */
export function withBasePath(path: string) {
  if (!path || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
