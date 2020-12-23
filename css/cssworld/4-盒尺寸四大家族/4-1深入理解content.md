# 4.1 深入理解content

## 4.1.1 content 与替换元素

### 1.什么是替换元素

顾名思义: 内容能被替换

特性
- 内容的外观不受页面的CSS的影响
- 有自己的尺寸
- 在很多CSS属性上有自己的一套表现规则

### 2.替换元素的默认display值

| 元素 | Chrome | Firefox | IE |
| -- | -- | -- | -- |
| img | inline | inline | inline |
| iframe | inline | inline | inline |
| video | inline | inline | inline |
| select | inline-block | inline-block | inline-block |
| input | inline-block | **inline** | inline-block |
| range\|file input | inline-block | inline-block | inline-block |
| hidden\<input> | none | none | none |
| button | inline-block | inline-block | inline-block |
| textarea | inline-block | **inline** | inline-block |

### 3.替换元素的尺寸计算规则 (猝 不想看)

分类
- 固定尺寸 **指的是替换内容原本的尺寸**
- HTML尺寸 **只能通过HTML原生属性改变** eg: ```img 的height/width、input 的 size 属性等..```
- CSS尺寸 **可以通过CSS的width/height设置的尺寸**

内部 -> 中间 -> 表层

### 4.替换元素和非替换元素的距离有多远

很近 就是 src 或 content 那一点

### 5.content于替换元素关系剖析

content 属性生成的内容是替换元素

特性
- content生成的文本无法选中
- 不能左右 empty伪类
- content 动态生成值无法获取

## 4.1.2 content 内容生成技术

IE8浏览器仅支持但冒号的伪元素

### 1.content辅助元素生成

### 2.content字符内容生成

```css
div:before {
  display: block;
  content : '...\n..\n.';
  white-space: pre-wrap;
}
```

### 3.content图片生成

```css
div:before {
  content: url(1.jpg);
}
```

### 4.了解content会开启闭合符号生成(鸡肋)

### 5.content attr属性值内容生成

```css
img:after {
  /* 生成alt信息 */
  /* content: attr(alt); */
  content: attr(data-title);
}
```

### 6.深入理解content计数器

属性
- counter-reset **计数器重置**
- counter-increment **计数器递增**
- counter()/counters() **计算值**

```css
.counter {
  counter-reset: wangxiaoer 2;
  counter-increment: wangxiaoer wangxiaoer;
  font-size: 32px;
}

.counter:before {
  /*
   * 结果: 4
   * counter(name, style)
   * style 计数展示类型: 罗马数字、数字、英文字母等
   */
  content: counter(wangxiaoer);
}
```

### 7.content内容生成的混合特性

content内容生成语法是可以混合在一起使用的

```css
a:after {
  content: "(" attr(href) ")";
}

q:before {
  content: open-quote url(1.png);
}

.counter:before {
  content: counters(wangxiaoer, '-') '.';
}
```
