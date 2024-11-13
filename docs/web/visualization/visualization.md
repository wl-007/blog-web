---
title:  可视化
order: 1
group:
  title: visualization
---



# 大屏适配

## rem + font-size

动态设置HTML根字体大小 和 body 字体大小（lib_flexible.js） 

将设计稿的宽（1920）平均分成 24 等份， 每一份为 80px。

- HTML字体大小就设置为 80 px，即1rem = 80px， 24rem = 1920px 
- body字体大小设置为 16px。 
- 安装 cssrem 插件， root font size 设置为 80px。这个是px单位转rem的参考值 ✓ px 转 rem方式：手动、less/scss函数、cssrem插件、webpack插件、Vite插件 
- 接着就可以按照 1920px * 1080px 的设计稿愉快开发，此时的页面已经是响应式，并且宽高比不变。

```js
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      // body 字体大小默认为 16px
      document.body.style.fontSize = 16 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 这里默认平均分成 10 等分(适用移动端)
  // set 1rem = viewWidth / 24 ；（使用pc端）
  function setRemUnit() {
    var rem = docEl.clientWidth / 24;  // 1920 / 24 = 80 
    docEl.style.fontSize = rem + "px"; // 设置 html字体的大小 80px
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);

```

## vw

直接使用vw单位。 

- 屏幕的宽默认为 100vw，那么100vw = 1920px， 1vw = 19.2px 。
- 安装 cssrem 插件， body的宽高（1920px * 1080px）直接把px单位转vw单位 ✓ px 转 vw 方式：手动、less/scss函数、cssrem插件、webpack插件、Vite插件 
- 接着就可以按照 1920px * 1080px 的设计稿愉快开发，此时的页面已经是响应式，并宽高比不变。



## scale

使用CSS3中的scale函数来缩放网页，这里我们将使用两种方案来实现： 

- 方案一：直接根据宽度的比率进行缩放。（宽度比率=网页当前宽 / 设计稿宽）
- 方案二：动态计算网页宽高比，决定是是否按照宽度的比率进行缩放。

```js
<script>

    // 设计稿:  1920 * 1080
    // 目标适配:  1920 * 1080   3840 * 2160 ( 2 * 2 ) ;  7680 * 2160( 4 * 2)

    // 1.设计稿的尺寸
    let targetX = 1920
    let targetY = 1080
    let targetRatio = 16 / 9 // 宽高比率

    // 2.拿到当前设备(浏览器)的宽度
    let currentX = document.documentElement.clientWidth || document.body.clientWidth
    let currentY = document.documentElement.clientHeight || document.body.clientHeight
    //  1920 * 1080  -> 3840 * 2160

    // 3.计算缩放比例
    let scaleRatio = currentX / targetX; // 参照宽度进行缩放 ( 默认情况 )
    let currentRatio = currentX / currentY // 宽高比率

    // 超宽屏
    if(currentRatio > targetRatio) {
      scaleRatio = currentY / targetY // 参照高度进行缩放
      document.body.style = `width:${targetX}px; height:${targetY}px;transform: scale(${scaleRatio}) translateX(-50%); left: 50%`
    } else {
      // 4.开始缩放网页
      document.body.style = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio})`
    }
      
  </script>
```



### scale相比vw和rem的优势

- 优势一：相比于vw 和 rem，使用起来更加简单，不需要对单位进行转换。 
- 优势二：因为不需要对单位进行转换，在使用第三方库时，不需要考虑单位转换问题。 
- 优势三：由于浏览器的字体默认最小是不能小于12px，导致rem或vw无法设置小于12px的字体，缩放没有这个问题。



### 大屏开发 注意事项

1. 字体大小设置问题（非scale方案需要考虑）

   - 如果使用rem或vw单位时，在JS中添加样式时，单位需要手动设置rem或vw。 

   - 第三方库的字体等默认的都是px单位，比如：element、echarts，因此通常需要层叠第三方库的样式。 

   - 当大屏比例更大时，有些字体还需要相应的调整字号。 
2. 图片模糊问题 

   - 切图时切1倍图、2倍图，大屏用大图，小屏用小图。 

   - 建议都使用SVG矢量图，保证放大缩小不会失真。 
3. Echarts 渲染引擎的选择 

   - 使用SVG渲染引擎，SVG图扩展性更好 
4. 动画卡顿优化 
   - 创建新的渲染层、启用GPU加速、善用CSS3形变动画 
   - 少用渐变和高斯模糊、当不需要动画时，及时关闭动画

