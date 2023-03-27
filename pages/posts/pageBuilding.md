---
title: 从零开始的建博客生活
date: 2021-09-29 13:03:51
tags: 
  - 日记
  - Hexo
  - HTML
categories: 小日记
typora-root-url: ..
---

心血来潮地肝出了自己的博客主页！没想到就连我这样的前端小白，也可以跟着使用说明一步步完成我的博客主页。我要在最最开头就点名点赞[云游君](https://www.yunyoujun.cn/)大佬的[yun主题](https://yun.yunyoujun.cn/)！！使用指南非常详细，顺便因此收藏了许多资源网站，非常快乐www

<div class="primary">

> 事实证明，兴趣、热枕，足矣。

</div>

<!-- more -->

## 萌芽 2021.09.24

查资料的时候偶然间翻到了学长的博客，做得很有高级杂志的感觉，觉得好酷，再加上老师上课时也提到了做网站的事，我就心血来潮，想做一个自己的网站！

先用github的服务器、Hexo框架搭建了一个空白啥也没有的主页，再改成NexT的主题，一下子看起来就不一样了！

<img src="http://150.158.151.86/images/pageBuilding/next.png" alt="next" style="zoom:130%;" />_执行hexo指令时跳出的超酷NexT主题Logo_

<img src="http://150.158.151.86/images/pageBuilding/next1.png" alt="next1" style="zoom: 67%;" />_测试用的第一个page_

NexT的简约风真的很好看，很喜欢！但是转眼我就看到一条评论——

![next2](http://150.158.151.86/images/pageBuilding/next2.png)

呃——

外加朋友们都说喜欢yun主题，特别是还有说“其他主题都看起来好正式，像广告”（草）。在研究了好久yun主题的文档之后，我毅然决然！选择了它！虽然是大半夜在床上挑选主题的，但是我也意识到了这个主题肯定配置起来很复杂的的情况。可是为了变得好看，我就多学一学多肝一肝吧www

网站在此，点击这个Yuumi直达！（笑死，就是本站)

<center><a href="https://yuumi0221.github.io/ "><img src="http://150.158.151.86/images/pageBuilding/yuumi.png" alt="yuumi" style="transform:scale(0.67);"/></a></center>

看到了好多大佬的杰作和开发过程，真的大受鼓舞（？）我在想能不能添加一个`简洁模式`按键，来实现同一个博客拥有两个主题，这样该多快乐呀！然而搜了半天好像没有人有过这样的想法，我也就先保留了吧w等以后自己写好了！

<div class="warning">

> TODO：
>
> 可交互按键切换博客主题

</div>


## 成型 2021.09.25

更新！！

如上所述，更改了主题——yun主题！我并不是全程跟着配置指南从头到尾一步步来做的，而是先把最重要的配置给做完，再逐步补充其他小功能。这样的话网站一下子就成型了！高兴得我连翻三个跟头！

不得不说，真的是太好玩了！！下床之后~~牙也没刷脸也没洗，~~不吃不喝竟然搞网站搞了几个小时，只能说不愧是我（）

基本功能差不多都完成啦！把需要关联的页面也全部都安排好了，就只差评论功能没有完成了。不过。。。我似乎是有点太上头了，就像玩游戏一样想一口气打通关，做这个网站也是想一口气把它做完，让它彻底变成我自己的网站。只能说是大佬太牛，仅仅做一点点配置就可以达到想要的效果，真的太快乐了！！成就感满满！

没想到这一搞搞到了凌晨三点😵‍💫应该克制克制自己的！！！💤💤💤

## 成熟 2021.09.26

好的，我又来更新了！这回增加了一些小小细节，让咱的文章能更加好看啦www

- 多彩引用标签及其颜色设计

  其实是云游君设计的啦，我只是改了一下颜色（逃）

  > primary
  
  ::: zh-CN

  通过对 `markdownIt` 进行配置，你可以自由设置自定义块区域的文字以及图标及图标的颜色。（这段话可以中英文转换）

  :::

  ::: en

  By configuring `markdownIt`, you can set the text and icon (and its color) for
  custom block.

  :::

  ::: tip

  tip

  :::

  ::: warning

  warning

  :::

  ::: danger

  danger

  :::

  ::: info

  info

  :::

  ::: details Click to expand

  details

  :::
  
  
- [algolia搜索](https://www.algolia.com/)

  可是在火狐浏览器上访问会有不显示背景模糊的bug！！应该是火狐不支持哪个css的属性的原因，就暂时搁置一下吧。


- 免费CDN：jsDelivr+Github 的使用方法：

  比如我要的资源在github里路径为：
  https://github.com/Yuumi0221/Yuumi0221.github.io/blob/masterhttp://150.158.151.86/images/settings/favicon.png

  则对应CDN为：https://cdn.jsdelivr.net/gh/Yuumi0221/Yuumi0221.github.iohttp://150.158.151.86/images/settings/favicon.png

  再加入配置的url里就好啦！

- 评论功能

  不知道为什么waline没有办法适配夜间模式，很难受呜呜，于是我去[discussions](https://github.com/YunYouJun/hexo-theme-yun/discussions/172)请教了一下大佬。没想到。。刚写完这些话，大佬就给我回复了：

<img src="http://150.158.151.86/images/pageBuilding/question.png" alt="question"/>

<img src="http://150.158.151.86/images/pageBuilding/reply.png" alt="reply"/>

原来，大佬早就考虑周到更新完了啊！！于是我紧跟大佬脚步，赶紧把东西给更新了！但是随之而来的问题是，之前我有修改过大佬的配置代码，虽然也就是一些颜色参数，但还是需要一个个重新修改，着实有点麻烦😵‍💫为了防止自己忘记，把修改内容都记录在了notion里。有机会的话也学着做一个代码合并功能吧！

唔姆！更新了最新版主题之后，就只差评论区头像还没有安排啦！一些细节方面的小问题还没有解决的，就继续写在TODO里吧。

<div class="warning">

> TODO：
>
> 火狐浏览器搜索背景模糊不显示问题

</div>


------

***未完待续……***

