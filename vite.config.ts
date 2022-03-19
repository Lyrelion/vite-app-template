import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 模块 "path"" 只能在使用 "allowSyntheticDefaultImports" 标志时进行默认导入
import path from "path";
// 在 tsconfig.json 中的 compilerOptions 对象下，设置 allowSyntheticDefaultImports 为 true

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  // 打包路径
  base: "./",
  resolve: {
    // 设置别名
    alias: {
      // 找不到 __dirname 是因为缺少 node @types声明（解决方案：npm install --save-dev @types/node）
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // 启动端口
    port: 4000,
    open: true,
    proxy: {
      // 代理网址
      "/api": "http://123.56.85.24:5000",
    },
    cors: true,
  },
});
