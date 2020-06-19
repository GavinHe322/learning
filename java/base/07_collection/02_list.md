# 使用List

一种有序列表

List<E>主要方法
- void add(E e)
- void add(int index, E e)
- int remove(int index)
- int remove(Object e)
- E get(int index)
- int size()

## 小结
- List 是按索引顺序访问长度可变的有序表，优先使用ArrayList，而不是LinkedList
- 可以直接使用 for each 遍历 List
- List 可以跟 Array 互相转换