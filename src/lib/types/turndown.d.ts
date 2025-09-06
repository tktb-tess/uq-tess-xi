declare module '@joplin/turndown' {
  export { default } from 'turndown';
}

declare module '@joplin/turndown-plugin-gfm' {
  import type { Plugin } from 'turndown';
  const gfm: Plugin;
}
