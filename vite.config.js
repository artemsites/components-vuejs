import { resolve } from "path";

export default {

  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: true,
  },
  
  base: './',

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        'switcher-box': resolve(__dirname, "switcher-box.html"),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      },
    },
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
}