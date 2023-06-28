import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/

export default defineConfig({
  server: {
    "/api": {
      target: "https://movie.querydata.org", // 接口的域名
      secure: true, // 如果是https接口，需要配置这个参数
      changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      rewrite: (path) => path.replace(/^\/api/, "/api"),
    },
  },
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
