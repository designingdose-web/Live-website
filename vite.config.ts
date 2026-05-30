
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
      plugins: [
        react(),
        {
          name: 'html-transform',
          transformIndexHtml(html) {
            if (command === 'build') {
              // Smart Build: Remove the CDN script, inline config, and duplicate styles for production.
              // This ensures the live site relies solely on the optimized, pre-built CSS bundle.
              return html
                .replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '')
                .replace(/<script>[\s\S]*?tailwind\.config[\s\S]*?<\/script>/, '')
                .replace(/<style type="text\/tailwindcss">[\s\S]*?<\/style>/, '')
                .replace(/<script type="importmap">[\s\S]*?<\/script>/, '');
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
