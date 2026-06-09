
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        cssCodeSplit: true,
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'router': ['react-router-dom'],
            }
          }
        }
      },
      plugins: [
        react(),
        {
          name: 'html-transform',
          transformIndexHtml(html) {
            if (command === 'build') {
              return html
                .replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '')
                .replace(/<script>[\s\S]*?tailwind\.config[\s\S]*?<\/script>/, '')
                .replace(/<style type="text\/tailwindcss">[\s\S]*?<\/style>/, '')
                .replace(/<script type="importmap">[\s\S]*?<\/script>/, '')
                .replace(/<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/, '<link rel="stylesheet" href="$1" media="print" onload="this.media=\'all\'"><noscript><link rel="stylesheet" href="$1"></noscript>');
            }
            return html;
          }
        }
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
