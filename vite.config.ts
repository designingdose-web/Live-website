
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to determine if a CSS selector block is critical above-the-fold content
function isCriticalSelector(selector: string): boolean {
  const s = selector.toLowerCase();
  
  // Base document patterns
  if (s === 'html' || s === 'body' || s === 'html, body' || s === 'body, html' || s === ':root') {
    return true;
  }
  
  // Specific critical styles requested
  if (s.includes('.glass-panel') || 
      s.includes('.gradient-text') || 
      s.includes('.sr-only') || 
      s.includes('.skip-link')) {
    return true;
  }
  
  // Header section styles
  if (s.includes('header') || s.includes('.header')) {
    return true;
  }
  
  // Hero / Banner section styles
  if (s.includes('banner') || s.includes('hero') || s.includes('.banner') || s.includes('.hero')) {
    return true;
  }
  
  return false;
}

// Custom block css parser to extract critical rules recursively (including inside media queries)
function extractCriticalCss(css: string): string {
  let criticalCss = '';
  let pos = 0;
  const len = css.length;
  
  while (pos < len) {
    if (css[pos] === ' ' || css[pos] === '\n' || css[pos] === '\t' || css[pos] === '\r') {
      pos++;
      continue;
    }
    
    // Skip comments
    if (css[pos] === '/' && css[pos + 1] === '*') {
      pos += 2;
      while (pos < len && !(css[pos] === '*' && css[pos + 1] === '/')) {
        pos++;
      }
      pos += 2;
      continue;
    }
    
    let start = pos;
    while (pos < len && css[pos] !== '{') {
      if (css[pos] === '"' || css[pos] === "'") {
        const quote = css[pos];
        pos++;
        while (pos < len && css[pos] !== quote) {
          if (css[pos] === '\\') pos++;
          pos++;
        }
      }
      pos++;
    }
    
    if (pos >= len) break;
    
    const selectorSection = css.substring(start, pos).trim();
    pos++; // skip '{'
    
    let braceCount = 1;
    let blockStart = pos;
    while (pos < len && braceCount > 0) {
      if (css[pos] === '"' || css[pos] === "'") {
        const quote = css[pos];
        pos++;
        while (pos < len && css[pos] !== quote) {
          if (css[pos] === '\\') pos++;
          pos++;
        }
      } else if (css[pos] === '{') {
        braceCount++;
      } else if (css[pos] === '}') {
        braceCount--;
      }
      pos++;
    }
    
    const blockContent = css.substring(blockStart, pos - 1);
    const fullRule = selectorSection + ' {' + blockContent + '}';
    
    if (selectorSection.startsWith('@media')) {
      const nestedRules = extractCriticalCss(blockContent);
      if (nestedRules.trim()) {
        criticalCss += selectorSection + ' {\n' + nestedRules + '\n}\n';
      }
    } else if (selectorSection.startsWith('@keyframes') || selectorSection.startsWith('@font-face') || selectorSection.startsWith('@import') || selectorSection.startsWith('@theme')) {
      if (selectorSection.includes('marquee') || selectorSection.includes('fade') || selectorSection.includes('slide')) {
        criticalCss += fullRule + '\n';
      }
    } else {
      if (isCriticalSelector(selectorSection)) {
        criticalCss += fullRule + '\n';
      }
    }
  }
  
  return criticalCss;
}

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
                .replace(/<script type="importmap">[\s\S]*?<\/script>/, '');
            }
            return html;
          }
        },
        {
          name: 'critical-css-inliner',
          generateBundle(options, bundle) {
            let allCssContent = '';
            
            // Gather all CSS content
            for (const [fileName, fileInfo] of Object.entries(bundle)) {
              if (fileName.endsWith('.css') && fileInfo.type === 'asset') {
                allCssContent += fileInfo.source.toString();
              }
            }
            
            if (!allCssContent) return;
            
            const criticalCss = extractCriticalCss(allCssContent);
            
            // Transform built HTML files
            for (const [fileName, fileInfo] of Object.entries(bundle)) {
              if (fileName.endsWith('.html') && fileInfo.type === 'asset') {
                let htmlContent = fileInfo.source.toString();
                
                // Inline critical CSS before </head>
                const styleTag = `<style id="critical-css">\n${criticalCss}\n</style>`;
                htmlContent = htmlContent.replace('</head>', `${styleTag}\n</head>`);
                
                // Convert stylesheet link tags to preloaded non-render-blocking stylesheets with noscript fallback
                htmlContent = htmlContent.replace(/<link rel="stylesheet"([^>]*href="([^"]+?\.css)"[^>]*)>/g, (match, attrs) => {
                  return `<link rel="preload" ${attrs} as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" ${attrs}></noscript>`;
                });
                
                // Remove any duplicate preload links that may have been added
                const seen = new Set<string>();
                htmlContent = htmlContent.replace(/<link rel="preload"[^>]*as="style"[^>]*>/g, (match) => {
                  const hrefMatch = match.match(/href="([^"]+)"/);
                  if (hrefMatch) {
                    if (seen.has(hrefMatch[1])) return '';
                    seen.add(hrefMatch[1]);
                  }
                  return match;
                });
                
                fileInfo.source = htmlContent;
              }
            }
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
