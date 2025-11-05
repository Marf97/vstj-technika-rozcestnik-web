// Allow importing markdown files as strings
declare module '*.md' {
  const content: string;
  export default content;
}

// Allow importing with Vite's ?raw suffix
declare module '*?raw' {
  const content: string;
  export default content;
}
