// docs/.vitepress/config.mts
import { defineConfig } from "file:///E:/workspace/web/my-blog/node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_3f1c103ae193140e80fb8be27f35f685/node_modules/vitepress/dist/node/index.js";
import { vitepressDemoPlugin } from "file:///E:/workspace/web/my-blog/node_modules/.pnpm/vitepress-demo-plugin@1.4.7_3f5834819b5fd6930850b7ee161cd42c/node_modules/vitepress-demo-plugin/dist/index.js";
import path from "path";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///E:/workspace/web/my-blog/node_modules/.pnpm/@sugarat+theme@0.5.6_@eleme_ec5d6b545c757c15c6dc70e96db629f6/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  // 默认开启 markdown 图表支持（会增加一定的构建耗时）
  // mermaid: false
  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: "Copyright \xA92024-present wangLei",
    version: {
      name: "@sugarat/theme"
    }
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "WangLei",
  // 友链
  friend: [
    {
      nickname: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
      des: "\u4F60\u7684\u6307\u5C16\u7528\u4E8E\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF",
      avatar: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://sugarat.top"
    },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitepress.dev/"
    }
  ]
  // 公告
  // popover: {
  //   title: '公告',
  //   body: [
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'text',
  //       content: '文章首/文尾有群二维码',
  //       style: 'padding-top:0'
  //     },
  //     {
  //       type: 'button',
  //       content: '作者博客',
  //       link: 'https://sugarat.top'
  //     },
  //     {
  //       type: 'button',
  //       content: '加群交流',
  //       props: {
  //         type: 'success'
  //       },
  //       link: 'https://theme.sugarat.top/group.html',
  //     }
  //   ],
  //   duration: 0
  // },
});

// docs/.vitepress/config.mts
import AutoNavPlugin from "file:///E:/workspace/web/my-blog/node_modules/.pnpm/vitepress-auto-nav-sidebar@0.1.1/node_modules/vitepress-auto-nav-sidebar/dist/index.js";
var __vite_injected_original_dirname = "E:\\workspace\\web\\my-blog\\docs\\.vitepress";
var { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: [
    "node_modules",
    "assets",
    "public",
    ".vitepress",
    "code",
    ".obsidian",
    "utils",
    "sop"
  ],
  // 需要排除的一些目录
  ignoreFiles: ["index", "about"],
  // 需要排除的一些文件
  dirPrefix: "\u76EE\u5F55\uFF1A",
  filePrefix: "\u6587\u4EF6\uFF1A",
  showNavIcon: false,
  showSideIcon: true,
  collapsed: true,
  singleLayerNav: false,
  hiddenFilePrefix: "."
});
var config_default = defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base: "/blog-web/",
  outDir: "../dist",
  lang: "zh-cn",
  title: "WangLei",
  description: "WangLei\u7684\u535A\u5BA2\u4E3B\u9898\uFF0C\u57FA\u4E8E vitepress \u5B9E\u73B0",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/coder.svg" }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
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
        link: "https://github.com/wl-007"
      }
    ]
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__vite_injected_original_dirname, "../../"),
        codesandbox: {
          show: true
        }
      });
    }
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./")
      }
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VcXFxcd2ViXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VcXFxcd2ViXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3dvcmtzcGFjZS93ZWIvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcbmltcG9ydCB7IHZpdGVwcmVzc0RlbW9QbHVnaW4gfSBmcm9tIFwidml0ZXByZXNzLWRlbW8tcGx1Z2luXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuLy8gXHU1QkZDXHU1MTY1XHU0RTNCXHU5ODk4XHU3Njg0XHU5MTREXHU3RjZFXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tIFwiLi9ibG9nLXRoZW1lXCI7XG5pbXBvcnQgQXV0b05hdlBsdWdpbiBmcm9tIFwidml0ZXByZXNzLWF1dG8tbmF2LXNpZGViYXJcIjtcbmNvbnN0IHsgbmF2LCBzaWRlYmFyIH0gPSBBdXRvTmF2UGx1Z2luKHtcbiAgaWdub3JlRm9sZGVyczogW1xuICAgIFwibm9kZV9tb2R1bGVzXCIsXG4gICAgXCJhc3NldHNcIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwiLnZpdGVwcmVzc1wiLFxuICAgIFwiY29kZVwiLFxuICAgIFwiLm9ic2lkaWFuXCIsXG4gICAgXCJ1dGlsc1wiLFxuICAgIFwic29wXCIsXG4gIF0sIC8vIFx1OTcwMFx1ODk4MVx1NjM5Mlx1OTY2NFx1NzY4NFx1NEUwMFx1NEU5Qlx1NzZFRVx1NUY1NVxuICBpZ25vcmVGaWxlczogW1wiaW5kZXhcIiwgXCJhYm91dFwiXSwgLy8gXHU5NzAwXHU4OTgxXHU2MzkyXHU5NjY0XHU3Njg0XHU0RTAwXHU0RTlCXHU2NTg3XHU0RUY2XG4gIGRpclByZWZpeDogXCJcdTc2RUVcdTVGNTVcdUZGMUFcIixcbiAgZmlsZVByZWZpeDogXCJcdTY1ODdcdTRFRjZcdUZGMUFcIixcbiAgc2hvd05hdkljb246IGZhbHNlLFxuICBzaG93U2lkZUljb246IHRydWUsXG4gIGNvbGxhcHNlZDogdHJ1ZSxcbiAgc2luZ2xlTGF5ZXJOYXY6IGZhbHNlLFxuICBoaWRkZW5GaWxlUHJlZml4OiBcIi5cIixcbn0pO1xuLy8gXHU1OTgyXHU2NzlDXHU0RjdGXHU3NTI4IEdpdEh1Yi9HaXRlZSBQYWdlcyBcdTdCNDlcdTUxNkNcdTUxNzFcdTVFNzNcdTUzRjBcdTkwRThcdTdGNzJcbi8vIFx1OTAxQVx1NUUzOFx1OTcwMFx1ODk4MVx1NEZFRVx1NjUzOSBiYXNlIFx1OERFRlx1NUY4NFx1RkYwQ1x1OTAxQVx1NUUzOFx1NEUzQVx1MjAxQy9cdTRFRDNcdTVFOTNcdTU0MEQvXHUyMDFEXG4vLyBcdTU5ODJcdTY3OUNcdTk4NzlcdTc2RUVcdTU0MERcdTVERjJcdTdFQ0ZcdTRFM0EgbmFtZS5naXRodWIuaW8gXHU1N0RGXHU1NDBEXHVGRjBDXHU1MjE5XHU0RTBEXHU5NzAwXHU4OTgxXHU0RkVFXHU2NTM5XHVGRjAxXG4vLyBjb25zdCBiYXNlID0gcHJvY2Vzcy5lbnYuR0lUSFVCX0FDVElPTlMgPT09ICd0cnVlJ1xuLy8gICA/ICcvdml0ZXByZXNzLWJsb2ctc3VnYXItdGVtcGxhdGUvJ1xuLy8gICA6ICcvJ1xuXG4vLyBWaXRlcHJlc3MgXHU5RUQ4XHU4QkE0XHU5MTREXHU3RjZFXG4vLyBcdThCRTZcdTg5QzFcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBcdTdFRTdcdTYyN0ZcdTUzNUFcdTVCQTJcdTRFM0JcdTk4OTgoQHN1Z2FyYXQvdGhlbWUpXG4gIGV4dGVuZHM6IGJsb2dUaGVtZSxcbiAgYmFzZTogXCIvYmxvZy13ZWIvXCIsXG4gIG91dERpcjogXCIuLi9kaXN0XCIsXG4gIGxhbmc6IFwiemgtY25cIixcbiAgdGl0bGU6IFwiV2FuZ0xlaVwiLFxuICBkZXNjcmlwdGlvbjogXCJXYW5nTGVpXHU3Njg0XHU1MzVBXHU1QkEyXHU0RTNCXHU5ODk4XHVGRjBDXHU1N0ZBXHU0RThFIHZpdGVwcmVzcyBcdTVCOUVcdTczQjBcIixcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gIC8vIFx1OEJFNlx1ODlDMVx1RkYxQWh0dHBzOi8vdml0ZXByZXNzLmRldi96aC9yZWZlcmVuY2Uvc2l0ZS1jb25maWcjaGVhZFxuICBoZWFkOiBbXG4gICAgLy8gXHU5MTREXHU3RjZFXHU3RjUxXHU3QUQ5XHU3Njg0XHU1NkZFXHU2ODA3XHVGRjA4XHU2NjNFXHU3OTNBXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3Njg0IHRhYiBcdTRFMEFcdUZGMDlcbiAgICAvLyBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiBgJHtiYXNlfWZhdmljb24uaWNvYCB9XSwgLy8gXHU0RkVFXHU2NTM5XHU0RTg2IGJhc2UgXHU4RkQ5XHU5MUNDXHU0RTVGXHU5NzAwXHU4OTgxXHU1NDBDXHU2QjY1XHU0RkVFXHU2NTM5XG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL2NvZGVyLnN2Z1wiIH1dLFxuICBdLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIC8vIFx1NUM1NVx1NzkzQSAyLDMgXHU3RUE3XHU2ODA3XHU5ODk4XHU1NzI4XHU3NkVFXHU1RjU1XHU0RTJEXG4gICAgb3V0bGluZToge1xuICAgICAgbGV2ZWw6IFsyLCAzXSxcbiAgICAgIGxhYmVsOiBcIlx1NzZFRVx1NUY1NVwiLFxuICAgIH0sXG4gICAgLy8gXHU5RUQ4XHU4QkE0XHU2NTg3XHU2ODQ4XHU0RkVFXHU2NTM5XG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogXCJcdTU2REVcdTUyMzBcdTk4NzZcdTkwRThcIixcbiAgICBzaWRlYmFyTWVudUxhYmVsOiBcIlx1NzZGOFx1NTE3M1x1NjU4N1x1N0FFMFwiLFxuICAgIGxhc3RVcGRhdGVkVGV4dDogXCJcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEVcIixcblxuICAgIC8vIFx1OEJCRVx1N0Y2RWxvZ29cbiAgICBsb2dvOiBcIi9jb2Rlci5zdmdcIixcbiAgICBuYXYsXG4gICAgLy8gZWRpdExpbms6IHtcbiAgICAvLyAgIHBhdHRlcm46XG4gICAgLy8gICAgICdodHRwczovL2dpdGh1Yi5jb20vQVRRUS9zdWdhci1ibG9nL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2Jsb2dwcmVzcy86cGF0aCcsXG4gICAgLy8gICB0ZXh0OiAnXHU1M0JCIEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTUxODVcdTVCQjknXG4gICAgLy8gfSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZ2l0aHViXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3dsLTAwN1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBtYXJrZG93bjoge1xuICAgIGNvbmZpZyhtZCkge1xuICAgICAgbWQudXNlKHZpdGVwcmVzc0RlbW9QbHVnaW4sIHtcbiAgICAgICAgZGVtb0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLi8uLi9cIiksXG4gICAgICAgIGNvZGVzYW5kYm94OiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG4gIHZpdGU6IHtcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VcXFxcd2ViXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VcXFxcd2ViXFxcXG15LWJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJsb2ctdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3dvcmtzcGFjZS93ZWIvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvYmxvZy10aGVtZS50c1wiOy8vIFx1NEUzQlx1OTg5OFx1NzJFQ1x1NjcwOVx1OTE0RFx1N0Y2RVxuaW1wb3J0IHsgZ2V0VGhlbWVDb25maWcgfSBmcm9tICdAc3VnYXJhdC90aGVtZS9ub2RlJ1xuXG4vLyBcdTVGMDBcdTU0MkZSU1NcdTY1MkZcdTYzMDFcdUZGMDhSU1NcdTkxNERcdTdGNkVcdUZGMDlcbi8vIGltcG9ydCB0eXBlIHsgVGhlbWUgfSBmcm9tICdAc3VnYXJhdC90aGVtZSdcblxuLy8gY29uc3QgYmFzZVVybCA9ICdodHRwczovL3N1Z2FyYXQudG9wJ1xuLy8gY29uc3QgUlNTOiBUaGVtZS5SU1NPcHRpb25zID0ge1xuLy8gICB0aXRsZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4vLyAgIGJhc2VVcmwsXG4vLyAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxuLy8gICBkZXNjcmlwdGlvbjogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNixcdTYyRTVcdTY3MDlcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0ZcdUZGMDhcdTU5MjdcdTUyNERcdTdBRUZcdTc2RjhcdTUxNzNcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcdUZGMDknLFxuLy8gICBsYW5ndWFnZTogJ3poLWNuJyxcbi8vICAgaW1hZ2U6ICdodHRwczovL2ltZy5jZG4uc3VnYXJhdC50b3AvbWRJbWcvTVRZM05EazVOVEUyTnpBek1BPT02NzQ5OTUxNjcwMzAnLFxuLy8gICBmYXZpY29uOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcC9mYXZpY29uLmljbycsXG4vLyB9XG5cbi8vIFx1NjI0MFx1NjcwOVx1OTE0RFx1N0Y2RVx1OTg3OVx1RkYwQ1x1OEJFNlx1ODlDMVx1NjU4N1x1Njg2MzogaHR0cHM6Ly90aGVtZS5zdWdhcmF0LnRvcC9cbmNvbnN0IGJsb2dUaGVtZSA9IGdldFRoZW1lQ29uZmlnKHtcbiAgLy8gXHU1RjAwXHU1NDJGUlNTXHU2NTJGXHU2MzAxXG4gIC8vIFJTUyxcblxuICAvLyBcdTY0MUNcdTdEMjJcbiAgLy8gXHU5RUQ4XHU4QkE0XHU1RjAwXHU1NDJGcGFnZWZpbmRcdTc5QkJcdTdFQkZcdTc2ODRcdTUxNjhcdTY1ODdcdTY0MUNcdTdEMjJcdTY1MkZcdTYzMDFcdUZGMDhcdTU5ODJcdTRGN0ZcdTc1MjhcdTUxNzZcdTVCODNcdTc2ODRcdTUzRUZcdTRFRTVcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1RkYwOVxuICAvLyBzZWFyY2g6IGZhbHNlLFxuXG4gIC8vIFx1OUVEOFx1OEJBNFx1NUYwMFx1NTQyRiBtYXJrZG93biBcdTU2RkVcdTg4NjhcdTY1MkZcdTYzMDFcdUZGMDhcdTRGMUFcdTU4OUVcdTUyQTBcdTRFMDBcdTVCOUFcdTc2ODRcdTY3ODRcdTVFRkFcdTgwMTdcdTY1RjZcdUZGMDlcbiAgLy8gbWVybWFpZDogZmFsc2VcblxuICAvLyBcdTk4NzVcdTgxMUFcbiAgZm9vdGVyOiB7XG4gICAgLy8gbWVzc2FnZSBcdTVCNTdcdTZCQjVcdTY1MkZcdTYzMDFcdTkxNERcdTdGNkVcdTRFM0FIVE1MXHU1MTg1XHU1QkI5XHVGRjBDXHU5MTREXHU3RjZFXHU1OTFBXHU2NzYxXHU1M0VGXHU0RUU1XHU5MTREXHU3RjZFXHU0RTNBXHU2NTcwXHU3RUM0XG4gICAgLy8gbWVzc2FnZTogJ1x1NEUwQlx1OTc2MiBcdTc2ODRcdTUxODVcdTVCQjlcdTU0OENcdTU2RkVcdTY4MDdcdTkwRkRcdTY2MkZcdTUzRUZcdTRFRTVcdTRGRUVcdTY1MzlcdTc2ODRcdTU2NjJcdUZGMDhcdTVGNTNcdTcxMzZcdTY3MkNcdTY3NjFcdTUxODVcdTVCQjlcdTRFNUZcdTY2MkZcdTUzRUZcdTRFRTVcdTk2OTBcdTg1Q0ZcdTc2ODRcdUZGMDknLFxuICAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCBcdTAwQTkyMDI0LXByZXNlbnQgd2FuZ0xlaScsXG4gICAgdmVyc2lvbjoge1xuICAgICAgbmFtZTpcIkBzdWdhcmF0L3RoZW1lXCJcbiAgICB9XG4gICAgLy8gaWNwUmVjb3JkOiB7XG4gICAgLy8gICBuYW1lOiAnXHU4NzAwSUNQXHU1OTA3MTkwMTE3MjRcdTUzRjcnLFxuICAgIC8vICAgbGluazogJ2h0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vJ1xuICAgIC8vIH0sXG4gICAgLy8gc2VjdXJpdHlSZWNvcmQ6IHtcbiAgICAvLyAgIG5hbWU6ICdcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDd4eHh4eCcsXG4gICAgLy8gICBsaW5rOiAnaHR0cHM6Ly93d3cuYmVpYW4uZ292LmNuL3BvcnRhbC9pbmRleC5kbydcbiAgICAvLyB9LFxuICB9LFxuXG4gIC8vIFx1NEUzQlx1OTg5OFx1ODI3Mlx1NEZFRVx1NjUzOVxuICB0aGVtZUNvbG9yOiAnZWwtYmx1ZScsXG5cbiAgLy8gXHU2NTg3XHU3QUUwXHU5RUQ4XHU4QkE0XHU0RjVDXHU4MDA1XG4gIGF1dGhvcjogJ1dhbmdMZWknLFxuXG4gIC8vIFx1NTNDQlx1OTRGRVxuICBmcmllbmQ6IFtcbiAgICB7XG4gICAgICBuaWNrbmFtZTogJ1x1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXG4gICAgICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxuICAgICAgYXZhdGFyOlxuICAgICAgICAnaHR0cHM6Ly9pbWcuY2RuLnN1Z2FyYXQudG9wL21kSW1nL01UWTNORGs1TlRFMk56QXpNQT09Njc0OTk1MTY3MDMwJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmlja25hbWU6ICdWaXRlcHJlc3MnLFxuICAgICAgZGVzOiAnVml0ZSAmIFZ1ZSBQb3dlcmVkIFN0YXRpYyBTaXRlIEdlbmVyYXRvcicsXG4gICAgICBhdmF0YXI6XG4gICAgICAgICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXG4gICAgICB1cmw6ICdodHRwczovL3ZpdGVwcmVzcy5kZXYvJyxcbiAgICB9LFxuICBdLFxuXG4gIC8vIFx1NTE2Q1x1NTQ0QVxuICAvLyBwb3BvdmVyOiB7XG4gIC8vICAgdGl0bGU6ICdcdTUxNkNcdTU0NEEnLFxuICAvLyAgIGJvZHk6IFtcbiAgLy8gICAgIHsgdHlwZTogJ3RleHQnLCBjb250ZW50OiAnXHVEODNEXHVEQzQ3XHU1MTZDXHU0RjE3XHU1M0Y3XHVEODNEXHVEQzQ3LS0tXHVEODNEXHVEQzQ3IFx1NUZBRVx1NEZFMSBcdUQ4M0RcdURDNDcnIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6ICdpbWFnZScsXG4gIC8vICAgICAgIHNyYzogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFl4TlRBeE9EYzJOVEl4TUE9PTYxNTAxODc2NTIxMH5mbXQud2VicCdcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgLy8gICAgICAgY29udGVudDogJ1x1NkIyMlx1OEZDRVx1NTkyN1x1NUJCNlx1NTJBMFx1N0ZBNCZcdTc5QzFcdTRGRTFcdTRFQTRcdTZENDEnXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICB0eXBlOiAndGV4dCcsXG4gIC8vICAgICAgIGNvbnRlbnQ6ICdcdTY1ODdcdTdBRTBcdTk5OTYvXHU2NTg3XHU1QzNFXHU2NzA5XHU3RkE0XHU0RThDXHU3RUY0XHU3ODAxJyxcbiAgLy8gICAgICAgc3R5bGU6ICdwYWRkaW5nLXRvcDowJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdHlwZTogJ2J1dHRvbicsXG4gIC8vICAgICAgIGNvbnRlbnQ6ICdcdTRGNUNcdTgwMDVcdTUzNUFcdTVCQTInLFxuICAvLyAgICAgICBsaW5rOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcCdcbiAgLy8gICAgIH0sXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAvLyAgICAgICBjb250ZW50OiAnXHU1MkEwXHU3RkE0XHU0RUE0XHU2RDQxJyxcbiAgLy8gICAgICAgcHJvcHM6IHtcbiAgLy8gICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgbGluazogJ2h0dHBzOi8vdGhlbWUuc3VnYXJhdC50b3AvZ3JvdXAuaHRtbCcsXG4gIC8vICAgICB9XG4gIC8vICAgXSxcbiAgLy8gICBkdXJhdGlvbjogMFxuICAvLyB9LFxufSlcblxuZXhwb3J0IHsgYmxvZ1RoZW1lIH1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFMsU0FBUyxvQkFBb0I7QUFDM1UsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxVQUFVOzs7QUNEakIsU0FBUyxzQkFBc0I7QUFpQi9CLElBQU0sWUFBWSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWS9CLFFBQVE7QUFBQTtBQUFBO0FBQUEsSUFHTixXQUFXO0FB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
