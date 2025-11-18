import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ----------------------------------------------------------------------

const PORT = 3031;

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_ASSETS_DIR || '/';

  return {
    base,
  plugins: [
    react(),
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        dev: { logLevel: ['error'] },
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^src(.+)/,
        replacement: path.resolve(process.cwd(), 'src/$1'),
      },
    ],
  },
    server: { port: PORT, host: true },
    preview: { port: PORT, host: true },
  };
});
