#!/bin/bash
# author: Gavin
# description: 'git commit script'

git add -A
git commit -m "$1"
git push origin

