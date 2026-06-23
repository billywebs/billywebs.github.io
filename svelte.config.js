import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * SvelteKit config — static site for GitHub Pages.
 *
 * To deploy under a project repo (e.g. github.com/billywebs/portfolio served at
 * billywebs.github.io/portfolio), set the BASE_PATH env var at build time:
 *   BASE_PATH=/portfolio npm run build
 *
 * For an org root repo (billywebs.github.io) or a custom domain (billywebs.ca),
 * leave BASE_PATH unset.
 */
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.BASE_PATH ?? ''
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;
