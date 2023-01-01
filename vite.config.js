import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import dns from 'dns'


dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react(), svgr()],
})
