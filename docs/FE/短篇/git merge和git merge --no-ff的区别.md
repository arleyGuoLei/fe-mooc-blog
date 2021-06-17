--- 
title: git merge和git merge --no-ff的区别
date: 2021-06-17
sidebar: 'auto'
categories: 
 - 短篇博文
tags: 
 - 笔记
publish: false
---

在很多介绍GItFlow工作流的文章里面，都会推荐在合并分支的时候加上`--no-ff`参数， 而我们在合并的时候，有时git也会提示 使用了 **fast-forward**， 这里我将介绍一下`merge`的三种状态及 `git merge` 和 `git merge --no-ff` 的区别

<!--more-->

Git merge的时候，有几种合并方式可以选择

~~~
--ff
When the merge resolves as a fast-forward, only update the branch pointer, without creating a merge commit. This is the default behavior.

--no-ff
Create a merge commit even when the merge resolves as a fast-forward. This is the default behaviour when merging an annotated (and possibly signed) tag.

--squash
--no-squash
Produce the working tree and index state as if a real merge happened (except for the merge information), but do not actually make a commit, move the HEAD, or record $GIT_DIR/MERGE_HEAD (to cause the next git commit command to create a merge commit). This allows you to create a single commit on top of the current branch whose effect is the same as merging another branch (or more in case of an octopus).

With --no-squash perform the merge and commit the result. This option can be used to override --squash.
~~~

而我们平常什么都不加的时候，则使用默认的 `--ff` ， 即 **fast-forward** 方式

看过官方注释后，我们用一张图来简单描画一下相应的行为

![merge](https://github-1253518569.cos.ap-shanghai.myqcloud.com/2018-09-18_200521.png)

1. fast-forward

   **Git 合并两个分支时，如果顺着一个分支走下去可以到达另一个分支的话，那么 Git 在合并两者时，只会简单地把指针右移，叫做“快进”（fast-forward）不过这种情况如果删除分支，则会丢失merge分支信息。**

2. --squash

   **把一些不必要commit进行压缩，比如说，你的feature在开发的时候写的commit很乱，那么我们合并的时候不希望把这些历史commit带过来，于是使用--squash进行合并，此时文件已经同合并后一样了，但不移动HEAD，不提交。需要进行一次额外的commit来“总结”一下，然后完成最终的合并。**

3. --no-ff

   **关闭fast-forward模式，在提交的时候，会创建一个merge的commit信息，然后合并的和master分支**

merge的不同行为，向后看，其实最终都会将代码合并到master分支，而区别仅仅只是分支上的简洁清晰的问题，然后，向前看，也就是我们使用`reset` 的时候，就会发现，不同的行为就带来了不同的影响

![https://github-1253518569.cos.ap-shanghai.myqcloud.com/2018-09-18_201744.png](https://github-1253518569.cos.ap-shanghai.myqcloud.com/2018-09-18_201744.png)

上图是使用 `merge --no-ff`的时候的效果，此时`git reset HEAD^ --hard` 的时候，整个分支会回退到  **dev2-commit-2**

![ dev3-commit-1](https://github-1253518569.cos.ap-shanghai.myqcloud.com/2018-09-18_201755.png)

上图是使用 **fast-forward** 模式的时候，即 `git merge` ，这时候 `git reset HEAD^ --hard`，整个分支会回退到 **dev1-commit-3**

通常我们把 master 作为主分支，上面存放的都是比较稳定的代码，提交频率也很低，而 develop 是用来开发特性的，上面会存在许多零碎的提交，快进式合并会把 develop 的提交历史混入到 master 中，搅乱 master 的提交历史。所以如果你根本不在意提交历史，也不爱管 master 干不干净，那么 --no-ff 其实没什么用。不过，如果某一次 master 出现了问题，你需要回退到上个版本的时候，比如上例，你就会发现退一个版本到了 commint-3，而不是想要的 commit-2，因为 feature 的历史合并进了 master 里。这也就是很多人都会推荐 --no-ff 的原因了吧。