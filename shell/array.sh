#!/bin/bash
# author: Gavin

# chmod +x ./xxx.sh

my_array=(A B "C" D)

array_name[0]=0
array_name[1]=1
array_name[2]=2

echo "第1个元素: ${my_array[0]}"
echo "第2个元素: ${my_array[1]}"
echo "第3个元素: ${my_array[2]}"
echo "第4个元素: ${my_array[3]}"

echo "数组的元素: ${my_array[*]}"
echo "数组的元素: ${my_array[@]}"

echo "数组的元素: ${array_name[*]}"
echo "数组的元素: ${array_name[@]}"