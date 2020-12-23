# 4.2 温和的padding属性

## 4.2.1 padding 于元素的尺寸

不影响其他元素的层叠现象

假如移动端 点击 a 链接跳转，但是点击区域太小，可使用 inline 特性

```css
article a {
  padding: .25em 0;
}
```

## 4.2.2 padding的百分比

padding百分比值无论是水平方向还是垂直方向均是相对于宽度计算的！

```css
div {
  /* 1 : 5 */
  /* 假设宽 500 */
  /* padding-top: 50 */
  /* padding-bottom: 50 */
  /* padding-left: 250 */
  /* padding-right: 250 */
  padding: 10% 50%;
}
```

如果是内联元素呢?
- 同样相对于宽度计算
- 默认的高度和宽度细节有差异
- padding 会断行

断行: 文字较多

## 4.2.3 标签元素内置的padding

## 4.2.4 padding于图形绘制

绘制三条杠

```css
.icon-menu {
  display: inline-block;
  width: 140px;
  height: 10px;
  padding: 35px 0;
  border-top: 10px solid;
  border-bottom: 10px solid;
  background-color: currentColor;
  background-clip: content-box;
}
```
