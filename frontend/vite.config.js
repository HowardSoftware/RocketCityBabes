import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // binds to 0.0.0.0 so you can access from host
    port: 5173, // fixed port mapping
    strictPort: true, // fail if port is taken instead of finding another
    watch: {
      usePolling: true, // fixes unreliable FS events in Docker
      interval: 100, // how often to check for changes (ms)
    },
  },
})