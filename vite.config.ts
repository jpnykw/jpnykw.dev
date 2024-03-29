import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || '8000'),
  },
  plugins: [
		reactRefresh(),
		svgr({ exportAsDefault: true }),
	],
  resolve: {
    alias: [{ find: /^@\/(.*)/, replacement: resolve(__dirname, 'src/$1') }],
  },
  define: {
    global: 'window',
  },
})

