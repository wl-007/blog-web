import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import path from "path";
import { withSidebar } from "vitepress-sidebar";
import { withI18n } from 'vitepress-i18n';
import AutoNavPlugin from 'vitepress-auto-nav-sidebar'
const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: ["node_modules", "assets", "public", ".vitepress", "code", ".obsidian", "utils"], // 需要排除的一些目录
  ignoreFiles: ['index'], // 需要排除的一些文件
  dirPrefix: '目录：',
  filePrefix: '文件：',
  showNavIcon:false,
  showSideIcon:true,
  collapsed: true,
  singleLayerNav:false,
  hiddenFilePrefix: '.'
})
console.log("🚀 ~ nav:", nav)
const vitePressOptions = {
  base: "/blog-web/",
  outDir: "../dist",
  title: "WangLeiBlog",
  description: "web blog",
  head: [["link", { rel: "icon", href: "/coder.svg" }]],
  themeConfig: {
    logo: "/coder.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    // sidebar: {
    //   // 当用户位于 `guide` 目录时，会显示此侧边栏
    //   "/web/vue3/": [
    //     {
    //       text: "Vue3",
    //       items: [
    //         { text: "基础夯实", link: "/web/vue3/base" },
    //         { text: "进阶特性", link: "/web/vue3/advanced" },
    //       ],
    //     },
    //   ],

    //   // 当用户位于 `config` 目录时，会显示此侧边栏
    //   "/config/": [
    //     {
    //       text: "Config",
    //       items: [
    //         { text: "Index", link: "/config/" },
    //         { text: "Three", link: "/config/three" },
    //         { text: "Four", link: "/config/four" },
    //       ],
    //     },
    //   ],
    // },
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
};

const vitePressSidebarOptions = [
    {
      documentRootPath: 'docs',
      scanStartPath: 'web/vue2',
      resolvePath: '/web/vue2/',
      useTitleFromFileHeading: true
    },
    {
      documentRootPath: 'docs',
      scanStartPath: 'web/vue3',
      resolvePath: '/web/vue3/',
      useTitleFromFrontmatter: true
    }
  ];
const vitePressI18nConfig = {
  // VitePress I18n config
  locales: ['en', 'zhHans'], // first locale 'en' is root locale
  searchProvider: 'local' // enable search with auto translation
};
export default defineConfig(
  withSidebar(
   vitePressOptions , vitePressSidebarOptions
  )
);
