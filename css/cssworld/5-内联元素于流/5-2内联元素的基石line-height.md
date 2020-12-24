# 5.2 内联元素的基石line-height

## 5.2.1 内两元素的高度之本——line-height

思考: 默认 div 高度0，但是有内容后，高度就有了，高度由何而来?

其实并非font-size(文字)，但本质是 line-height 属性决定的，尽管某些场景与 font-size 大小有关。

行距 = line-height - font-size

## 5.2.2 为什么line-height可以让内联元素 垂直居中

line-height误区

- height 和 line-height 必须同时设置
- 行高对多行也能进行垂直居中(只是近似)

## 5.2.3 深入line-height的各类属性值

属性值

- 数值 **和当前font-size相乘** eg: ```font-size: 14px; line-height = 1.5 * 14px = 21px;```
- 百分比值 **和当前font-size相乘** eg: ```font-size: 14px; line-height = 150% * 14px = 21px;```
- 长度值 **带单位的值** eg: ```line-height: 14px;```

场景

- 图文内容展示的网页或网站 **适用于 数值(1.6~1.8)**
- 布局结构精致的网站 **长度值跟数值都可以**

## 5.2.4 内联元素line-height的大值特性
