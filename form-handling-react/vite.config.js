import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxInclude: ['**/*.js', '**/*.jsx'],  // تسمح بمعالجة JSX في ملفات js و jsx
    }),
  ],
});
