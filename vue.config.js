const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxAssetSize: 600 * 1024,       // 600 KiB
      maxEntrypointSize: 1024 * 1024, // 1 MiB
    }
  }
}

