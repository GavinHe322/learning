# 6.3 CSS世界的结界——BFC

## 6.3.1 BFC的定义

```BFC(block formatting context)``` **块级格式化上下文**

**表现原则**

如果一个元素具有```BFC```，内部子元素再怎么翻江倒海、都不会影响外部的元素。

所以不会发生margin重叠，因为margin重叠会影响到外面的元素；

**常见情况**

- html 根元素
- flaot 不为 none
- overflow 的值为 auto、scroll、hidden
- display 值为 table-cell、table-caption、inline-block
- position 值不为 relative、static

只要元素符合任意一个条件，就无语使用 ```clear:both``` 清除浮动的影响了

## 6.3.2 BFC 与流体布局

BFC 的结界特性最重要的用途其实不是去margin重叠或者是清除 float 影响，而是实现更健壮，更智能的自适应布局

**BFC 自适应布局优点**
- 由于封闭而更健壮，容错率更强
- 自适应内容自动填满浮动以外区域，无需关心浮动元素宽度，可以整站大规模应用

能兼顾流体特性和BFC特性来实现无敌自适应的部署，每个属性选一个代表
- float: left
- position: absolute
- overflow: hidden **最佳**
- display: inline-block
- display: table-cell
- display: table-row
- display: table-caption **一无是处**

能胜任的
- overflow: auto/hidden **IE7及以上版本浏览器**
- display: inline-block **适用于IE6/7**
- display: table-cell **IE8及以上版本浏览器**

```css
/* overflow */
.lbf-content { overflow: hidden; }

.lbf-content {
  display: table-cell;
  width: 9999px;
  /* 如果不需要IE7，以下可以省略 */
  *display: inline-block;
  *width: auto
}
```
