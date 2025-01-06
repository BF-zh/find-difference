import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
      ],
      resolvers: [ElementPlusResolver()],
      dts: './types/imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        'src/api',
      ],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      dirs: ['src/components'],
      directoryAsNamespace: true,
      extensions: ['vue', 'md'],
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      deep: true,
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: './types/components.d.ts',
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
  ],
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
})
