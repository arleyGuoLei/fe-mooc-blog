#!/usr/bin/env sh

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./docs/.vuepress/dist

echo 'i7xy.cn' > CNAME

git init
git config --local user.email "34805850@qq.com"
git config --local user.name "arleyGuoLei"
git add -A
git commit -m 'deploy'

git push -f git@github.com:arleyGuoLei/fe-mooc-blog.git master:gh-pages

cd -