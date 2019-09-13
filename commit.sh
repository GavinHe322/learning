#!/bin/bash
# author: Gavin
# description: 'git commit script'

echo "$0"
echo "$1"
# echo "$1"
echo '-------------------------------'
git add -A
git commit -m "$1"
git push origin

