import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
		  registerType: 'autoUpdate',
		  includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
		  manifest: {
			name: 'Stocked Up',
			short_name: 'StockedUp',
			description: 'An inventory management system',
			theme_color: '#ffffff',
			icons: [
			  {
				src: 'pwa-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			  },
			  {
				src: 'pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			  }
			]
		  },
		  workbox: {
			runtimeCaching: [
			  {
				urlPattern: ({ request }) => request.destination === 'document',
				handler: 'NetworkFirst',
				options: {
				  cacheName: 'html-cache'
				}
			  }
			]
		  }
		})
	  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/public': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    include: ['shared-types'],
  },
});
