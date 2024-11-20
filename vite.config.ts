import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-recipes',
      closeBundle() {
        const srcDir = path.resolve(__dirname, 'src/data/recipes');
        const destDir = path.resolve(__dirname, 'dist/data/recipes');
        
        // Create the destination directory if it doesn't exist
        fs.mkdirSync(destDir, { recursive: true });
        
        // Copy all files from src/data/recipes to dist/data/recipes
        fs.readdirSync(srcDir).forEach(file => {
          fs.copyFileSync(path.resolve(srcDir, file), path.resolve(destDir, file));
        });
      }
    }
  ],
  base: '/AI-Italian-Cooking/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
