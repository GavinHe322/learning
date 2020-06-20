# 使用Set

Map 用于存储 key-value的映射，key是不能重复，并且还要正确覆写 equals() 方法 和 hasCode() 方法

如果我们只需要存储不重复的 key，而不需要存储隐射的 value，那么就可以使用 Set


Set 用于存储不重复的元素集合，主要方法
- boolean add(E e)
- boolean remove(Object e)
- boolean contains(Object e)



```Set```接口并不保证有序，而 ```SortedSet``` 接口则保证元素时有序的
- HashSet 是无序的，因为它实现了 ```Set``` 接口，并没有实现 ```SortedSet``` 接口
- ```TreeSet``` 是有序的，因为它实现了 ```SortedSet``` 接口


## 小结
```Set``` 用于存储不重复的元素集合
- 放入 ```HashSet``` 的元素与作为 ```HashMap``` 的 ```key``` 要求相同
- 放入 ```TreeSet``` 的元素与作为 ```TreeMap``` 的```Key```要求相同；

利用 ```Set``` 可以去除重复元素
遍历 ```SourtedSet``` 按照元素的排序顺序遍历，也可以自定义排序算法
