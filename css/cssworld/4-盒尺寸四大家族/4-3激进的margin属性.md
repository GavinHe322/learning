# 4.3 激进的margin属性

## 4.3.1 margin于元素尺寸以及相关布局

### 1.元素尺寸的相关概念

概念
- 元素尺寸 **margin以内** eg: ```jQuery.width()```
- 元素内部尺寸 **border以内** eg: ```jQuery.innerWidth()```
- 元素外部尺寸 **包括margin** eg: ```jQuery.outerWidth(true)```

### 2.margin与元素的内部尺寸

## 4.3.2 margin的百分比

跟padding属性一样，margin的百分比无论是水平方向还是垂直方向都是相对于宽度计算的

## 4.3.3 margin合并

### 1.什么是margin合并

- 块级元素 **不包括浮动和定位元素**
- 只发生在垂直方向

### 2.margin合并的3种场景

- 兄弟元素
- 父级和第一个/最后一个元素 **读者本人认为 这是视觉上的**
- 空块级元素的margin合并

### 3.margin合并的计算规则

- 正正取大 ```20px 50px = 50px```
- 正负值相加 ```-20px 50px = 30px```
- 负负最负 ```-20px -50px = -50px```

### 4.margin合并的意义

有意设计如此

HTML标签默认内置的CSS属性值完全就是为了更好地进行图文信息展示而设计的

避免不小心遗落或生成的空标签影响排版和布局

```html
<p>第一行</p>
<p></p>
<p></p>
<p>第二行</p>

<!-- 等效于 -->
<p>第一行</p>
<p>第二行</p>
```

## 4.3.4 深入理解CSS中的margin: auto

```css
/* margin-left 实现右对齐 */
.fater {
  width: 300px;
}

.son {
  width: 200px;
  margin-left: auto;
}
```

## 4.3.5 margin无效情形分析

- inline
- tr td 元素
- margin合并
- 绝对定位元素非定位方向的 margin 值无效 ```img { top:10%; left: 30%; margin-right:30px; }``` margin-right只是摆设
- 定高容器的子元素的margin-bottom或宽定死的子元素的margin-right的定位**失效**
- 鞭长莫及导致的margin无效
- 内联特性导致的margin无效
