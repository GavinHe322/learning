#!/bin/bash
# author: Gavin
# description: 'git commit script'
echo $0;
echo $1;

git add -A
git commit -m ""$0""
git push origin $1
