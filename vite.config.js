import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@reduxjs/toolkit': require.resolve('@reduxjs/toolkit'),
    },
  },
});
