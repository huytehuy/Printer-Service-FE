import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import UnoCSS from 'unocss/vite';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    UnoCSS(),
    svgr(),
    federation({
      name: 'commonData',
      filename: 'commonData.js',
      exposes: {
        './App': './src/App',
      },
      shared: [
        '@tanstack/react-query',
        '@loadable/component',
        '@mantine/core',
        'yup',
        'react',
        'react-router-dom',
        'react-dom',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  // remove when not using mock service
  server: {
    proxy: {
      // Configure proxy if needed
    },
    host: true,
    watch: {
      // Disable watch mode for the mock service worker
      ignored: 'mockServiceWorker.js',
    },
  },
});
