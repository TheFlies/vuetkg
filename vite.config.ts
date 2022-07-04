import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

import transformDirective from '@unocss/transformer-directives'

import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      rules: [
        [
          /^bgimg-(\w+)$/,
          ([, name]) => {
            return {
              'background-image': `url("/img/${name.replace('_dot_', '.')}")`,
            }
          },
        ],
        [
          /^bg-(auto|\d+)-(auto|\d+)$/,
          ([, s1, s2]) => {
            return {
              'background-size': `${s1 !== 'auto' ? s1 + '%' : s1} ${
                s2 !== 'auto' ? s2 + '%' : s2
              }`,
            }
          },
        ],
      ],
      transformers: [transformDirective()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
