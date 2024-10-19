import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '',
    base: '/blog-web/',
    publicPath: '/blog-web/',
    logo: '',
    nav: {
      // mode可选值有：override、append、prepend
      // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
      // - append: 将 value 中的导航追加到约定路由后面
      // - prepend: 将 value 中的导航添加到约定路由前面
      mode: 'append',
      value: [{ title: 'Github', link: 'https://github.com/wl-007/blog-web' }],
    },
  },
  resolve: {
    codeBlockMode: 'passive',
  },
});
