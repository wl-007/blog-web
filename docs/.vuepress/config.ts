import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

const BASE='/blog-web/'; // 与Github 仓库名以及package.json name 同名

const blogs=[
	{
		title: 'CSS',
		children: [
			{
				title: 'CSS基础',
				path: '/css/css基础.md',
			},
			{
				title: 'CSS进阶',
				path: '/css/css进阶.md',
			},
		]
	}
]

export default defineConfig4CustomTheme({
	
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'web',
			description: 'web文档',
		},
	},
	base: BASE,
	themeConfig: {
		nav: [

			...blogs.map(blog=>{
				return {
					text: blog.title,
					items: blog.children.map(child=>{
						return {
							text: child.title,
							link: child.path
						}
					})
				}
			})
		],
		sidebar: blogs.map(blog=>{
			return {
				title: blog.title,
				children: blog.children.map(child=>{
					return {
						title: child.title,
						path: child.path
					}
				})
			}
		}),
		searchMaxSuggestions: 10,
		repo: 'wl-007/'+BASE,
	},
	dest: 'dist',
	plugins: <UserPlugins>[
		[
			'one-click-copy',
			{
				copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
				copyMessage: '复制成功',
				duration: 1000,
				showInMobile: false,
			},
		],

		[
			'vuepress-plugin-zooming',
			{
				selector: '.theme-vdoing-content img:not(.no-zoom)',
				options: {
					bgColor: 'rgba(0,0,0,0.6)',
				},
			},
		],
	],
	extraWatchFiles: ['.vuepress/config.ts'],
});
