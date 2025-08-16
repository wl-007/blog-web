import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import path from "path";
// 导入主题的配置
import { blogTheme } from "./blog-theme";
import AutoNavPlugin from "vitepress-auto-nav-sidebar";
const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: [
    "node_modules",
    "assets",
    "public",
    ".vitepress",
    "code",
    ".obsidian",
    "utils",
    "sop",
  ], // 需要排除的一些目录
  ignoreFiles: ["index", "about"], // 需要排除的一些文件
  dirPrefix: "目录：",
  filePrefix: "文件：",
  showNavIcon: false,
  showSideIcon: true,
  collapsed: true,
  singleLayerNav: false,
  hiddenFilePrefix: ".",
});
// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base: "/blog-web/",
  outDir: "../dist",
  lang: "zh-cn",
  title: "WangLei",
  description: "WangLei的博客主题，基于 vitepress 实现",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/coder.svg" }],
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    // 默认文案修改
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "相关文章",
    lastUpdatedText: "上次更新于",

    // 设置logo
    logo: "/coder.svg",
    nav,
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/wl-007",
      },
    ],
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
