import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    server: {
      port: env.PORT
    },
    build: {
      target: 'es2015',
      outDir: 'build',
    },
    envPrefix: 'VITE_APP_',
  })
}
