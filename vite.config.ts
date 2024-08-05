import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const extensions = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
  '.mjs',
];

export default defineConfig({
  clearScreen: true,
  plugins: [react()],
  resolve: {
    extensions: extensions,
    alias: {
      'react-native': 'react-native-web',
    },
  },
});
