 ## for 循环

 ```java
 int sum = 0;
 for (int i = 1; i <= 100; i++) {
   sum = sum + i;
 }
 System.out.println(sum);
 ```


 array

```java
int[] ns = {1, 2, 3, 4, 5, 6, 7, 8, 9};
int sum = 0;
for (int i = 0; i < ns.length; i++) {
  sum = sum + ns[i];
}
System.out.println(sum);
```


## for each 循环

```java
int[] ns = {1, 2, 3, 4, 5, 6, 7, 8, 9};
for (int n : ns) {
  System.out.println(n);
}
```
