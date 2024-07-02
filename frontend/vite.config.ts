import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // GitHubによるBuildの場合、ベースディレクトリを変更する
  base: process.env.GITHUB_PAGES ? "Gingarenpo" : "./",
})
