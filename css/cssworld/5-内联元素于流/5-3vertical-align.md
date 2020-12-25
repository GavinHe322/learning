# 5.3 line-height 的好朋友vertical-align

高度由line-height决定嘛?

不是，因为 vertical-align

## 5.3.1 vertical-align

属性
- 数值百分比类 **20px、2em、20%**
- 上标下标类 **sub，super**
- 文本类 **text-top text-bottom**
- 线类 **baseline、top、middle、bottom**


实用性
- 兼容性好 **10px 这种是不会有任何兼容问题**
- 精准控制

vertical-align 的百分比是相对于 line-height 计算的
- margin、padding 相对宽度
- line-height 相对于 font-size

## 5.3.2 vertical-align作用的前提

只能应用于内联元素以及display值为table-cell的元素

## 5.3.3 vertical-align 和 line-height 关系

间缝的三大元凶 **幽灵空白节点** **line-height** **vertical-align**

解决
- 图片块状化
- 容器line-height足够小
- 容器font-size足够销
- 图片设置其他vertical-align属性，间隙的产生原因之一就是基线对其。


vertical-align: baseline 导致 margin负值失效

## 5.3.4 深入理解 vertical-align 线性类属性

### 1.inline-block 与 baseline

一个 inline-block 元素，如果里面没有内联元素，或者 overflow不是 visible，该元素的基线就是其margin底边缘；否者其基线就是元素里面最后一行内联元素的基线

20px图标文字对齐小技巧
- 图标高度和当前行高都是20px
- 图标标签里面永远有字符 **可以借助::before等**
- 图标CSS不使用 overflow:hidden 保证基线为里面字符的基线，但是要让潜在的字符不可见

### 2.了解vertical-align:top/bottom

定义(vertical-align: top)
- 内联元素 **元素底部和当前行框盒子的顶部对齐**
- table-cell元素 **元素底padding边缘和表格行的顶部对齐**

## 5.3.5 深入理解vertical-align文本类属性值

文本类属性
- vertical-align: text-top **盒子的顶部和父级内容区域的顶部对齐**
- vertical-align: text-bottom **盒子的底部和父级内容区域的底部对齐**

