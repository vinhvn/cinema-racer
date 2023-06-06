import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    alias: {
      $components: './src/components',
      $routes: './src/routes',
      $stores: './src/stores',
      $utils: './src/utils',
    },
  },
};

export default config;
