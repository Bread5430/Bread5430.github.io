import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: project sites use GITHUB_PAGES_BASE=/repo-name/; user/org sites
// ({owner}.github.io repo) use /. CI sets this automatically; local scripts can export it.
const base = process.env.GITHUB_PAGES_BASE?.trim() || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
