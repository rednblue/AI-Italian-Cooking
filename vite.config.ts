import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    {
      name: 'copy-recipes',
      closeBundle() {
        const srcDir = resolve(__dirname, 'src/data/recipes');
        const destDir = resolve(__dirname, 'dist/data/recipes');
        
        // Create the destination directory if it doesn't exist
        mkdirSync(destDir, { recursive: true });
        
        // Copy all files from src/data/recipes to dist/data/recipes
        const fs = require('fs');
        fs.readdirSync(srcDir).forEach(file => {
          copyFileSync(resolve(srcDir, file), resolve(destDir, file));
        });
      }
    }
  ],
  base: "/AI-Italian-Cooking/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
