#!/bin/bash
# author: Gavin
# description: 'git commit script'

echo ""$0""
echo '-------------------------------'
git add -A
git commit -m ""$0""
git push origin

