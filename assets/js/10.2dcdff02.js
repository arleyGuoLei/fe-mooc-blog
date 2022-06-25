(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{328:function(s,t,a){s.exports=a.p+"assets/img/lsof.94e12fce.png"},348:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[s._v("#")]),s._v(" shell")]),s._v(" "),n("ul",[n("li",[s._v("查看某个端口号占用情况")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsof 关于linux文件相关的查找（主要是和socket相关)")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出关于8601端口的相关进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -ni :8601\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭进程 20901为举例的进程PID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20901")]),s._v("\n")])])]),n("p",[n("img",{attrs:{src:a(328),alt:"查看某个端口号占用情况"}})]),s._v(" "),n("ul",[n("li",[s._v("打开IOS模拟器")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" -a Simulator\n")])])]),n("ul",[n("li",[s._v("执行某个命令，并且放到后台执行"),n("code",[s._v("&")])])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("http-server"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),n("ul",[n("li",[s._v("查看后台执行的进程")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" -l\n")])])]),n("ul",[n("li",[s._v("将任务转换到前台执行")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用fg命令将任务从后台执行转换到前台执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fg")]),s._v("\n")])])]),n("ul",[n("li",[s._v("关闭谷歌浏览器的跨域限制")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行后可能出现用户数据丢失(收藏标签、插件等)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" -n /Applications/Google"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" Chrome"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" Cors.app/ --args --disable-web-security --user-data-dir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/guolei11/ChromeCorsUserData/\n")])])]),n("ul",[n("li",[s._v("开发机文件上传下载(rz/sz)：参照"),n("code",[s._v("docs/FE/短篇/开发机文件上传和下载.md")])])]),s._v(" "),n("h2",{attrs:{id:"git"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" git")]),s._v(" "),n("ul",[n("li",[s._v("将当前所有的提交相对线上master创建新的一个提交，\b将所有变更提交代码加入工作区")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset origin/master --soft\n")])])]),n("ul",[n("li",[s._v("使用线上最新master代码新建分支，并切换到对应分支")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/master\n")])])]),n("ul",[n("li",[s._v("改变当前提交的基准至线上master代码")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase origin master\n")])])]),n("ul",[n("li",[s._v("解决冲突")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase origin master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin HEAD:refs/for/master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消rebase")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --abort\n")])])]),n("ul",[n("li",[s._v("当本地分支没和远程master关联时，提交当前代码到远程master")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等同于")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin master\n")])])]),n("ul",[n("li",[s._v("撤销所有的已经add的文件 (相对 git add .)")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),n("ul",[n("li",[s._v("git stash")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存当前代码至stash，可以带备注信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"something info"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pop stash 0")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看stash信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pop {1}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop stash@"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("ul",[n("li",[s._v("配置多个git (github/gitlab/other_git)")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab")]),s._v("\nHost icode\n    User "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n    HostName gitlab.xxx.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/gitlab_rsa\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitee")]),s._v("\nHost icode\n    User "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n    HostName git@gitee.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/github_rsa\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github")]),s._v("\nHost github\n    User "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n    HostName github.com\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/github_rsa\n\nHost *\nControlMaster auto\nControlPath ~/.ssh/master-%r@%h:%p\nControlPersist "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nServerAliveInterval "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n")])])]),n("ul",[n("li",[s._v("添加ssh私钥到ssh缓存区")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("ssh-add ~/.ssh/xxx_rsa\nssh-add ~/.ssh/github_rsa\n")])])]),n("ul",[n("li",[s._v("其他命令 (待解析)")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git merge和git merge --no-ff的区别，默认使用的模式是--ff")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-commit --squash "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HASH"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),n("h2",{attrs:{id:"tool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tool"}},[s._v("#")]),s._v(" tool")]),s._v(" "),n("h3",{attrs:{id:"iterm2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iterm2"}},[s._v("#")]),s._v(" iterm2")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("hot window: "),n("code",[s._v("other-files/hot_win_key.json")])])]),s._v(" "),n("li",[n("p",[s._v("常用插件")])])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n    zsh-autosuggestions\n    autojump\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zsh-syntax-highlighting")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fzf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH")]),s._v("/oh-my-zsh.sh\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n")])])]),n("ul",[n("li",[s._v("用户名开头随机emoji")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("prompt_context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("emojis")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"⚡️"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🔥"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"👑"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"😎"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🐸"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🐵"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🦄"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🌈"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🍻"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🚀"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"💡"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🎉"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🔑"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🚦"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"🌙"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RAND_EMOJI_N")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v(" $RANDOM "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" ${#emojis[@]} "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DEFAULT_USER")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SSH_CLIENT")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    prompt_segment black default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%(!.%{%F{yellow}%}.)'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${emojis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("$RAND_EMOJI_N"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Applications/XAMPP/bin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])])]),n("h3",{attrs:{id:"charles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#charles"}},[s._v("#")]),s._v(" Charles")]),s._v(" "),n("ul",[n("li",[s._v("map-remote path，from的path比to的path需要少一个"),n("code",[s._v("/")]),s._v("，比如from: "),n("code",[s._v("a/b")]),s._v("，则to: "),n("code",[s._v("/a/b")])])]),s._v(" "),n("h2",{attrs:{id:"data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[s._v("#")]),s._v(" data")]),s._v(" "),n("h3",{attrs:{id:"学习资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学习资料"}},[s._v("#")]),s._v(" 学习资料")]),s._v(" "),n("ul",[n("li",[s._v("小册: "),n("code",[s._v("other-files/some-jj-books.zip")]),s._v("，密码133(tip: QQ)")])])])}),[],!1,null,null,null);t.default=e.exports}}]);