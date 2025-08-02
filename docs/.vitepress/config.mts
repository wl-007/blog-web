import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog-web/',
  outDir: '../dist',
  title: "WangLeiBlog",
  description: "web blog",
   head: [['link', { rel: 'icon', href: '/coder.svg' }]],
  themeConfig: {
    logo: "/coder.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "WEB基础",
        items: [
          {
            text: "三剑客",
            items: [{ text: "css", link: "/web/css/base" }],
          },
          {
            text: "web框架",
            items: [
              { text: "vue2", link: "/web/vue2/base" },
              { text: "vue3", link: "/web/vue3/base" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      "/web/vue3/": [
        {
          text: "Vue3",
          items: [
            { text: "基础夯实", link: "/web/vue3/base" },
            { text: "进阶特性", link: "/web/vue3/advanced" },
          ],
        },
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      "/config/": [
        {
          text: "Config",
          items: [
            { text: "Index", link: "/config/" },
            { text: "Three", link: "/config/three" },
            { text: "Four", link: "/config/four" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/wl-007" }],
    search: {
      provider: "local",
    },
    footer: {
      copyright: "Copyright ©2024-present scwanglei777@163.com",
    },
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__dirname, "../../"),
        codesandbox: {
          show: true,
        },
      });
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },
  },
});
