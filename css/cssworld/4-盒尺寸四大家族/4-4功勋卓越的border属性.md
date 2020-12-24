# 4.4 功勋卓越的border属性

## 4.4.1 为什么border-width不支持百分比值

语义
比如 iMac 和 iPhone，两者的边框大小差距跟屏幕设备比较而言可以忽略不计。所谓边框，是不会因为设备大就按比例变大的。因此不支持百分比。

## 4.4.2 了解border-style类型

## 4.4.4 border 于透明边框技巧

### 1.巧用 transparent

### 2.优雅增加的增加点击区域大小

### 3.三角形绘制

## 4.4.5 border于图形构建

## 4.4.6 border等高布局

```css
.box {
  border-left: 150px solid #333;
  background-color: #f0f3f9;
}

.box > nav {
  width: 150px;
  margin-left: 150px;
  float: left;
}

.box > section {
  overflow: hidden;
}
```
