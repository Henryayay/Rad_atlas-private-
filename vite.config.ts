import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { viteSingleFile } from 'vite-plugin-singlefile';

/**
 * Provides a no-op stub for `virtual:pwa-register` when building non-PWA targets
 * (Electron desktop app or standalone single-file HTML).
 */
function pwaNoopStub(): Plugin {
  const virtualId = 'virtual:pwa-register';
  const resolvedId = '\0' + virtualId;
  return {
    name: 'pwa-noop-stub',
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id === resolvedId) return 'export function registerSW() {}';
    },
  };
}

export default defineConfig(({ mode }) => {
  const isSingleFile = mode === 'singlefile';
  const isDesktop = mode === 'desktop';
  const isPwa = !isSingleFile && !isDesktop;

  const outDir = isSingleFile
    ? 'release/singlefile'
    : isDesktop
      ? 'dist-desktop'
      : 'dist';

  return {
    base: './',
    build: {
      outDir,
      emptyOutDir: true,
      copyPublicDir: !isSingleFile,
    },
    plugins: [
      react(),
      ...(isSingleFile ? [viteSingleFile()] : []),
      ...(isPwa
        ? [
            VitePWA({
              registerType: 'autoUpdate',
              injectRegister: 'auto',
              includeAssets: [
                'favicon.svg',
                'apple-touch-icon.png',
                'apple-touch-icon.svg',
                'pwa-192x192.png',
                'pwa-512x512.png',
                'pwa-192x192.svg',
                'pwa-512x512.svg',
              ],
              workbox: {
                globPatterns: [
                  '**/*.{js,css,html,ico,png,jpg,jpeg,webp,svg,woff,woff2,json}',
                ],
                maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
                cleanupOutdatedCaches: true,
                clientsClaim: true,
                skipWaiting: true,
                navigateFallback: 'index.html',
              },
              devOptions: {
                enabled: true,
              },
              manifest: {
                name: 'Rad Atlas — Radiographic Positioning & Technique Guide',
                short_name: 'RadAtlas',
                description:
                  '100% Offline Dark-Mode Radiographic Positioning, Exposure & Troubleshooting Atlas',
                theme_color: '#020617',
                background_color: '#020617',
                display: 'standalone',
                orientation: 'any',
                start_url: './',
                scope: './',
                icons: [
                  {
                    src: 'pwa-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                    purpose: 'any',
                  },
                  {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any',
                  },
                  {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'maskable',
                  },
                  {
                    src: 'pwa-512x512.svg',
                    sizes: '512x512',
                    type: 'image/svg+xml',
                    purpose: 'any',
                  },
                ],
              },
            }),
          ]
        : [pwaNoopStub()]),
    ],
  };
});
