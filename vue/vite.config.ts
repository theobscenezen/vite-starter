import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
const fs = require('fs');
const path = require('path');

emptyDirectory('<path-to-generated-dir>');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver()
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.ts$/],
    }),
    Icons({ compiler: 'vue3' }),
    checker({ vueTsc: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
  build: {
    modulePreload: {
      polyfill: true,
    },
    emptyOutDir: false,
    outDir: '<out-dir>',
    assetsDir: 'generated',
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: 'src/main.ts'
    }
  },
  server: {
    port: 3000,
    base: '/',
    hmr: {
      host: process.env.VIRTUAL_HOST,
      clientPort: 443,
    },
  }
});

function emptyDirectory(directory: string) {
    if (fs.existsSync(directory)) {
      fs.readdir(directory, (err: any, files: any) => {
        if (err) throw err;

        for (const file of files) {
          fs.unlink(path.join(directory, file), (err: any) => {
            if (err) throw err;
          });
        }
      });
    } else {
      console.log(`Directory "${directory}" does not exist.`);
    }
}
