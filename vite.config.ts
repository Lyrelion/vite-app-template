import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 模块 "path"" 只能在使用 "allowSyntheticDefaultImports" 标志时进行默认导入
import path from 'path';
// 在 tsconfig.json 中的 compilerOptions 对象下，设置 allowSyntheticDefaultImports 为 true

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  // 设置打包路径
  base: './',
  resolve: {
    // 设置别名
    alias: {
      // 找不到 __dirname 是因为缺少 node @types声明（解决方案：npm install --save-dev @types/node）
      '@': path.resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
    },
  },
  server: {
    // 设置服务启动端口号
    port: 4000,
    // 设置服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 设置代理，根据项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
});
