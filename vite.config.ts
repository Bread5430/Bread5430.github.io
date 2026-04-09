import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Project Pages (https://<user>.github.io/<repo>/), set GITHUB_PAGES_BASE=/repo-name/
// when building. The deploy script sets this automatically.
const base = process.env.GITHUB_PAGES_BASE?.trim() || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
