---
slug: git-changeId
title: Git ChangeId
authors: [luckyduck]
tags: [git, gerrit, tools]
---

今天提交代码git commit、git push之后发现代码无法推送至远端Gerrit服务器。以下是报错信息：

`Error: missing Change-Id in commmit message footer`

怎么会没有Change-Id，这玩意不是会自动生成的吗？看到接下来的提示：

``` 
Hint: To automatically insert Change-Id, install the hook:
gitdir=$(git rev-parse --git-dir); scp -p -P 29422 xxx@xx.xx.com:hooks/commit-msg ${gitdir}/hooks/
```

执行上面的命令后按照提示 `git commit --amend` ，不编辑直接退出文件。
然后执行 `git log` 发现Change-Id已经在本次提交自动生成了。

这是什么命令，为什么有效？

网上查到命令的解释是：

执行上面的命令，你的本地仓库的 `.git/hooks` 文件夹下的 `commit-msg` 文件将会被 Gerrit 的 `commit-msg` 文件覆盖掉，**而它的作用是今后的提交当中也会自动生成一个 change-id**。

参考链接:[Gerrit的基本使用-如何给本地仓库添加钩子 commit-msg](https://www.cnblogs.com/wenxuehai/p/12357898.html#_label3)