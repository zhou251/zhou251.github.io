---
title: volantis添加aplayer
author: zhou251
headimg: https://i.loli.net/2021/02/28/zAFoh5SleU1VbHv.jpg
tags:
  - BLOG
  - HEXO
  - VOLANTIS
  - 个性化
categories:
  - [教程,VOLANTIS]
  - [HEXO,VOLANTIS]
abbrlink: 14478
date: 2021-02-28 22:07:24
---
我本来是用内置的`aplayer`的，但是不知道为什么我的`aplayer`老是放完一首就停了。  
而且控制界面比较单调，索性关了内置的，再加一个`aplayer`。

<!--more-->

- **参考文章**：[hexo-tag-aplayer插件](https://github.com/MoePlayer/hexo-tag-aplayer)
- 安装：
  ```
  npm install --save hexo-tag-aplayer
  ```
- 配置`MeingJS support`,在**博客站点配置文件**`_config.yml`中配置：
  ```
  aplayer:
  meting: true
  ```ejs
- 添加代码，在`\themes\volantis\layout`文件夹中，修改`layout.ejs`在`body`前面加上如下代码即可：
  ```
  <div id="aplayer-ieLZIPAR" class="aplayer aplayer-tag-marker meting-tag-marker" data-id="7872981088" data-server="tencent" data-type="playlist" data-mode="circulation" data-autoplay="false" data-mutex="true" data-listmaxheight="340px" data-preload="auto" data-theme="#ad7a86" data-fixed="true"></div>
  ```
- 上述代码具体个性化（即选取哪个平台，播放形式，aplayer样式）配置,请参考[hexo-tag-aplayer插件](https://github.com/MoePlayer/hexo-tag-aplayer)中的`meting options`修改。