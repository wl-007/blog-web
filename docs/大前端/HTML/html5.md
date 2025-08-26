# HTML5指南
## 什么是HTML5
HTML5是最新的超文本标记语言标准，它不仅包含HTML，还整合了CSS和JavaScript的许多新特性，为现代网页开发提供了强大的功能支持。

## 准备工作

- Chrome 浏览器
- vsCode 编辑器（webStorm、cursor、Trae 等工具也可以）

## 初探HTML

- 示例
```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```
::: info
这里有：

`<!doctype html>`——文档类型。这是必不可少的开头。混沌初分，HTML 尚在襁褓（大约是 1991/92 年）之时，这个元素用来关联 HTML 编写规范，以供自动查错等功能所用。而在当今，它作用有限，可以说仅用于保证文档正常读取。现在知道这些就足够了。

`<html></html>` 元素。该元素包含整个页面的所有内容，有时候也称作根元素。它还包含 lang 属性，设置页面的主要语种。

`<head></head>` 元素。该元素作为想在 HTML 页面中包含但不想向用户显示的内容的容器。包括想在搜索结果中显示的关键字和页面描述、用于设置页面样式的 CSS、字符集声明等等。

`<meta charset="utf-8">`——该元素指明你的文档使用 UTF-8 字符编码，UTF-8 包括世界绝大多数书写语言的字符。它基本上可以处理任何文本内容。以它为编码还可以避免以后出现某些问题，没有理由再选用其他编码。

`<meta name="viewport" content="width=device-width">`——视口元素可以确保页面以视口宽度进行渲染，避免移动端浏览器以比视口更宽的宽度渲染内容，导致内容缩小。

`<title></title>` 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。

`<body></body>` 元素。该元素包含期望让用户在访问页面时看到的全部内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。
:::

## 初探CSS

**CSS**: 层叠样式表（Cascading Style Sheets，缩写为 CSS）是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式。CSS 描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。

- 示例

使用`style`标签定义类名为 "my-font" 的样式，在body中使用class来引用类名 "my-font" `<div class="my-font"></div>`

```html {7-13,16}
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.my-font {
			font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
			font-weight: bold;
			color: brown;
		}
	</style>
</head>
<body>
	<div class="my-font">
		一些文本
	</div>
</body>
</html>

```