import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const APP_NAME = process.env.npm_package_name
const env_config = {
  // 生产环境配置
  prod: {
    assetsPublicPath: `//s1.xmcdn.com/yx/${APP_NAME}/last/dist/`,
  },
  // uat环境配置
  uat: {
    assetsPublicPath: `//s1.uat.xmcdn.com/yx/${APP_NAME}/last/dist/`,
  },
  // test环境配置
  test: {
    assetsPublicPath: `//static2.test.donyfeng.com/yx/${APP_NAME}/last/dist/`,
  },
}

let assetsPublicPath = './'
if (env_config[process.env.env_config]) {
  assetsPublicPath = env_config[process.env.env_config].assetsPublicPath
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: assetsPublicPath,
  resolve: {
    //别名
    alias: {
      '@': path.resolve(__dirname, __dirname + '/src/'),
      '/images': path.resolve(__dirname, __dirname + '/src/assets/images/'),
    },
    //导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.json'],
  }, //构建
  build: {
    //输出路径
    outDir: 'dist',
    //生成静态资源的存放路径
    assetsDir: 'static',
    //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 2048,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //启用/禁用 brotli 压缩大小报告
    brotliSize: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
