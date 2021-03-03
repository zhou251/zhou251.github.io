---
title: volantis主题个性化记录
author: zhou251
headimg: 'https://i.loli.net/2021/02/22/6apRMC3hwTX2FsL.jpg'
tags:
  - BLOG
  - HEXO
  - VOLANTIS
  - 个性化
categories:
  - [教程,VOLANTIS]
  - [HEXO,VOLANTIS]
abbrlink: 14591
date: 2021-02-22 17:38:01
---
{% noteblock blue,  %}
在接触了yilia，next和volantis之后，最终选择了volantis。  
选择volantis有以下几点原因：  
- 颜值高
- 易于上手
- [Volantis官方文档](https://volantis.js.org/v4/getting-started/)写的很详细<br/> 
{% endnoteblock %}
  
个性化路上参考了几位大佬的博客，他们分别是：
- [TRHX'S BLOG](https://www.itrhx.com/)
- [AnFrank's Blog](https://enfangzhong.github.io/)
- [XU'S BLOG](https://hasaik.com/)
- [Sanarous's Blog](https://bestzuo.cn/)
- [黑石博客](https://www.heson10.com/)
- [阳光派PLUS](https://www.zyoushuo.cn/)
- [好好学习的郝](https://www.voidking.com/)
- [荷塘月色](https://yansheng836.github.io/)

其中，黑石放出了自己魔改的volantis版本，而XU的评论区干货很多，一定要看。

<!--more-->

{% noteblock info red, 建议 %}
- **务必详细**阅读整个[Volantis官方文档](https://volantis.js.org/v4/getting-started/)。
- 最好在博客站点根目录下新建一个`_config.volantis.yml`文件，将`themes/volantis/_config.yml`中的内容复制过来，之后在新的`_config.volantis.yml`中修改就好。
- 博客更应该**注重内容**，样式只要看着不别扭就行，没必要整的花里胡哨的。
{% endnoteblock %}
- {% span red, 站点配置文件_config.yml位于博客根目录中也就是一开始hexo所处的文件夹。%}  
- {% span red, 主题配置文件_config.yml位于themes/你的主题名字/中。%}  

具体安装，部署之类的我就不说了。网上随便找找都有（小声bb，虽然csdn上有很多质量博文，但是更多的博文简直不能看，全是copy-ninja）  
我也不知道从哪里写，索性就按volantis的模块一个个说吧。
## 1 首页
首页效果图如下：  

![volantis首页](https://i.loli.net/2021/02/25/1LtqMeQK6OFmUB5.png)
### 1.1 live2d位置摆放
`live2d`安装请自行百度[hexo live2d](https://www.baidu.com/s?ie=UTF-8&wd=hexo%2)。  
原来我的`live2d`放在右下，又因为右侧侧边栏跟左侧`aplayer`固定所以调整了一下位置。
代码修改位置，**站点配置文件**`_config.yml`中：
```yml
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  model:
    use: live2d-widget-model-wanko  #选择哪种模型
  display: #放置位置和大小
    position: left #左侧或者右侧
    width: 150   #2d的宽度也就是大小
    height: 1200  #放置高度
  mobile:
    show: false #是否在手机端显示
```
### 1.2 aplayer固定位置
`aplayer`有放下页脚的也有放左侧的。我倾向于放左侧，这样可以直接看到，想听自己开。  
代码修改位置，**主题配置文件**`_config.volantis.yml`中：
```yml
aplayer:
    enable: true #请开启
    js:
      aplayer: https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js
      meting: https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js
    # Required
    server: tencent   # netease, tencent, kugou, xiami, baidu。   平台，分别是：网易云，qq音乐，酷狗，虾米，百度（抱歉这个没听说过）。
    type: playlist    # song, playlist, album, search, artist。   类型：歌，歌单，专辑，搜索，歌手。说实在我只用过歌单形式，所以剩下的也没懂它具体播放形式。
    id: 7872981088    # song id / playlist id / album id / search keyword。  id:分别是歌的id，歌单的id。专辑的id，搜索关键词。以qq音乐歌单id为例， 在客户端中复制分享链接，粘贴到浏览器中，进入歌单，网址中的数字就是歌单id。
    # Optional
    fixed: true      # enable fixed mode。true即为固定左侧。
    theme: '#1BCDFC'  # main color
    autoplay: false   # audio autoplay。自动播放建议关闭。
    order: list       # player play order, values: 'list', 'random'。播放形式，歌单顺序还是随机顺序。
    loop: all         # player loop play, values: 'all', 'one', 'none'。默认即可
    volume: 0.7       # default volume, notice that player will remember user setting, default volume will not work after user set volume themselves。默认即可。
    list_max_height: 460px # list max height。歌单列表拉出来的高度。
    list_folded: false
```
- 歌单id查询步骤如下（以QQ音乐为例）：  

![](https://i.loli.net/2021/02/25/WI3lZCB8hAXicpy.png) 
![](https://i.loli.net/2021/02/25/Ti82LWf7F6HSrn4.png)
{% span red, 请注意，你的歌应该选取免费歌曲！%}  

### 1.3 右侧小侧边栏（取消右侧back2top)  
#### 1.3.1 取消自带的右侧back2top:
代码位置，`\themes\volantis\layout\layout.ejs`中：
```ejs
<a id="s-top" class="fas fa-arrow-up fa-fw" href="javascript:void(0)"></a>
修改为：
<!-- <a id="s-top" class="fas fa-arrow-up fa-fw" href="javascript:void(0)"></a> -->
```
#### 1.3.2 添加右侧小侧边栏:
- **参考博文：**
  1. [cungudafa的博文](https://blog.csdn.net/cungudafa/article/details/106500877)
  2. [hexo之Volantis添加暗黑模式](https://www.zyoushuo.cn/post/e8f5.html)

- 新建一个`left.ejs`。
以下是我使用的代码：
代码位置，`themes/volantis/layout/_partial`文件夹中新建`left.ejs`文件：
{% folding green, left.ejs %}
```
<div id="RightDownBtn">
    <a id="btn" href="javascript:void(0)" target="_self" style="" title="回到顶部">
        <svg style=" width: 1.5em;height: 1.5em;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuanfufanhuidingbu">
                <svg id="icon-xuanfufanhuidingbu" viewBox="0 0 1024 1024">
                    <path d="M0 512c0 282.624 229.376 512 512 512s512-229.376 512-512S794.624 0 512 0 0 229.376 0 512z"
                        fill="#1989FA"></path>
                    <path
                        d="M736.768 263.68H287.232c-12.288 0-23.04 10.752-23.04 23.04s10.752 23.04 23.04 23.04H737.28c12.288 0 23.04-10.752 23.04-23.04s-10.752-23.04-23.552-23.04m-207.872 105.472c-1.536-1.536-4.608-4.608-7.68-4.608-3.072-1.536-6.144-1.536-7.68-1.536-3.072 0-6.144 0-7.68 1.536-3.072 1.536-4.608 3.072-7.68 4.608l-186.368 186.368c-9.216 9.216-9.216 23.04 0 32.768 9.216 9.216 23.04 9.216 32.768 0l145.92-145.92V737.28c0 12.288 10.752 23.04 23.04 23.04s23.04-10.752 23.04-23.04V442.368l145.92 145.92c4.608 4.608 10.752 6.144 16.896 6.144 6.144 0 12.288-1.536 16.896-6.144 9.216-9.216 9.216-23.04 0-32.768l-187.392-186.368z"
                        fill="#FFFFFF"></path>
                </svg>
            </use>
        </svg>
    </a>
    <a href="/guestbook" title="前往留言板" data-pjax-state="load">
        <svg style=" width: 1.5em;height: 1.5em;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-liuyan">
                <svg id="icon-liuyan" viewBox="0 0 1174 1024">
                    <path d="M969.824632 371.467641q-1.209634 17.154811-3.665558 34.163a382.537626 382.537626 0 0 1-371.650919 340.310398h-60.884917l-10.996674 11.619819a237.381532 237.381532 0 0 0 207.690513 128.734394h60.518361l119.717122 124.995526a40.027893 40.027893 0 0 0 68.9858-27.638307v-102.1591a263.040437 263.040437 0 0 0-9.567106-509.989075z" fill="#FE752E" p-id="2910"></path>
                    <path d="M909.122992 397.419791a372.274063 372.274063 0 0 0 4.142081-53.297212c0-189.729279-142.956759-344.122579-318.90354-344.122579H319.114788c-175.946781 0-318.90354 154.3933-318.90354 344.122579a336.095007 336.095007 0 0 0 263.443648 338.990797v145.082783a46.625897 46.625897 0 0 0 80.312375 32.25691l164.950106-172.281223h85.517467a325.354922 325.354922 0 0 0 314.688148-290.752055zM230.518253 237.748087h448.00449a24.04606 24.04606 0 0 1 0 48.055465H230.518253a24.04606 24.04606 0 0 1 0-48.055465z m268.978641 222.902578H230.518253a24.04606 24.04606 0 0 1 0-48.055464h268.978641a24.04606 24.04606 0 0 1 0 48.055464z" fill="#FE752E" p-id="2911"></path>
                </svg>
            </use>
        </svg>
    </a>
    
    <a href="/photos" title="前往相册" data-pjax-state="load">
        <svg style=" width: 1.5em;height: 1.5em;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-photos">
                <svg id="icon-photos" viewBox="0 0 1024 1024">
                    <path d="M200.465608 973.432099H848.818342c79.463845 0 144.479718-65.015873 144.479718-144.479718V180.599647c0-79.463845-65.015873-144.479718-144.479718-144.479718H200.465608c-79.463845 0-144.479718 65.015873-144.479717 144.479718v648.352734c0 79.463845 65.015873 144.479718 144.479717 144.479718z" fill="#55B79D" p-id="5236"></path>
                    <path d="M847.012346 982.462081H200.465608c-84.881834 0-153.5097-68.627866-153.5097-153.5097V180.599647c0-84.881834 68.627866-153.5097 153.5097-153.5097H848.818342c84.881834 0 153.5097 68.627866 153.5097 153.5097v648.352734c-1.805996 84.881834-70.433862 153.5097-155.315696 153.5097zM200.465608 45.149912C126.419753 45.149912 65.015873 106.553792 65.015873 180.599647v648.352734c0 74.045855 61.40388 135.449735 135.449735 135.449735H848.818342c74.045855 0 135.449735-61.40388 135.449736-135.449735V180.599647c0-74.045855-61.40388-135.449735-135.449736-135.449735H200.465608z" fill="#333333" p-id="5237"></path>
                    <path d="M175.181658 944.536155c-1.805996 0-3.611993 0-5.41799-1.805996-3.611993-3.611993-3.611993-9.029982-1.805996-12.641976l242.003527-285.347442 189.62963 153.5097L760.324515 559.858907l231.167548 139.061728c3.611993 1.805996 5.417989 9.029982 3.611993 12.641975-1.805996 3.611993-9.029982 5.417989-12.641975 3.611993l-214.91358-130.031746-160.733686 240.197531L415.379189 670.024691l-232.973545 270.899471c-1.805996 3.611993-3.611993 3.611993-7.223986 3.611993z" fill="#333333" p-id="5238"></path>
                    <path d="M307.0194 507.485009m-63.209876 0a63.209877 63.209877 0 1 0 126.419753 0 63.209877 63.209877 0 1 0-126.419753 0Z" fill="#F1AA23" p-id="5239"></path>
                    <path d="M307.0194 579.724868c-39.731922 0-72.239859-32.507937-72.239859-72.239859s32.507937-72.239859 72.239859-72.239859 72.239859 32.507937 72.239859 72.239859-32.507937 72.239859-72.239859 72.239859z m0-124.613757c-28.895944 0-54.179894 23.477954-54.179894 54.179894s23.477954 54.179894 54.179894 54.179894 54.179894-23.477954 54.179895-54.179894-25.283951-54.179894-54.179895-54.179894z" fill="#333333" p-id="5240"></path>
                    <path d="M539.992945 296.183422m-93.911816 0a93.911817 93.911817 0 1 0 187.823633 0 93.911817 93.911817 0 1 0-187.823633 0Z" fill="#F1AA23" p-id="5241"></path>
                    <path d="M539.992945 399.12522c-55.985891 0-102.941799-46.955908-102.941799-102.941798s46.955908-102.941799 102.941799-102.941799 102.941799 46.955908 102.941799 102.941799-46.955908 102.941799-102.941799 102.941798z m0-187.823633c-46.955908 0-84.881834 37.925926-84.881834 84.881835s37.925926 84.881834 84.881834 84.881834 84.881834-37.925926 84.881835-84.881834-37.925926-84.881834-84.881835-84.881835z" fill="#333333" p-id="5242"></path>
                 </svg>
            </use>
        </svg>
    </a>
    <a onclick="switchNightMode()" title="切换暗黑模式">
        <svg style=" width: 1.5em;height: 1.5em;" class="icon" aria-hidden="true">
            <use id="modeicon" xlink:href="#icon-_moon">
            </use>
        </svg>
    </a>
    <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
        <symbol id="icon-sun" viewBox="0 0 1024 1024">
            <path
                d="M511.99976 511.99976m-511.99976 0a511.99976 511.99976 0 1 0 1023.99952 0 511.99976 511.99976 0 1 0-1023.99952 0Z"
                fill="#91D2F2"></path>
            <path
                d="M144.623932 868.455593C237.679889 964.327548 367.831828 1023.99952 511.99976 1023.99952c269.983873 0 490.99977-209.007902 510.455761-474.031778C956.991551 535.703749 887.559584 527.999753 815.623618 527.999753c-309.535855 0-572.895731 142.055933-670.999686 340.45584z"
                fill="#198058"></path>
            <path
                d="M979.623541 575.99973c-351.319835 0-647.791696 155.655927-741.279653 368.639827A509.359761 509.359761 0 0 0 511.99976 1023.99952c260.839878 0 475.967777-195.111909 507.799762-447.31979a1194.34344 1194.34344 0 0 0-40.175981-0.68z"
                fill="#1E9969"></path>
            <path
                d="M69.711967 769.831639C158.503926 921.815568 323.271848 1023.99952 511.99976 1023.99952a509.455761 509.455761 0 0 0 269.631874-76.783964C657.111692 828.375612 464.271782 751.999648 247.623884 751.999648c-61.575971 0-121.183943 6.271997-177.911917 17.831991z"
                fill="#6AA33A"></path>
            <path
                d="M487.887771 1023.39152c-86.543959-122.151943-236.911889-214.679899-417.591804-252.543881 85.11996 144.919932 239.415888 244.279885 417.591804 252.543881z"
                fill="#95E652"></path>
            <path
                d="M394.159815 167.999921l-45.255979 45.255979L303.647858 167.999921l45.255978-45.255979zM394.159815 503.999764l-45.255979 45.255979L303.655858 503.999764l45.247978-45.247979z"
                fill="#FFF8E6"></path>
            <path
                d="M180.879915 290.719864l45.247979 45.247979-45.255979 45.255978-45.255979-45.255978zM516.903758 290.719864l45.247978 45.247979-45.247978 45.247978-45.247979-45.247978z"
                fill="#FFF8E6"></path>
            <path d="M198.087907 185.207913h63.99997v63.99997h-63.99997zM435.671796 422.791802h63.99997v63.99997h-63.99997z"
                fill="#FFF8E6"></path>
            <path d="M198.087907 422.791802h63.99997v63.99997h-63.99997zM435.671796 185.207913h63.99997v63.99997h-63.99997z"
                fill="#FFF8E6"></path>
            <path
                d="M348.879836 335.999843m-183.999913 0a183.999914 183.999914 0 1 0 367.999827 0 183.999914 183.999914 0 1 0-367.999827 0Z"
                fill="#FFEAB3"></path>
            <path
                d="M348.879836 335.999843m-159.999925 0a159.999925 159.999925 0 1 0 319.99985 0 159.999925 159.999925 0 1 0-319.99985 0Z"
                fill="#FFDC80"></path>
        </symbol>
        <symbol id="icon-_moon" viewBox="0 0 1024 1024">
            <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#323232"></path>
            <path
                d="M512 512m-407.005867 0a407.005867 407.005867 0 1 0 814.011734 0 407.005867 407.005867 0 1 0-814.011734 0Z"
                fill="#494A4A"></path>
            <path
                d="M748.1344 633.9584c0-1.143467 0.085333-2.286933 0.085333-3.413333a69.512533 69.512533 0 0 0-8.823466-33.979734q-1.058133-1.911467-2.2528-3.7376l-0.187734-0.3072a70.485333 70.485333 0 0 0-5.2736-7.099733l-0.238933-0.273067q-1.3312-1.536-2.730667-3.003733l-0.3072-0.324267a70.894933 70.894933 0 0 0-6.417066-5.819733l-0.5632-0.443733q-1.467733-1.160533-3.003734-2.235734l-0.494933-0.341333q-1.706667-1.2288-3.6352-2.3552l-0.256-0.136533q-1.706667-0.989867-3.413333-1.8944l-0.887467-0.4608q-1.604267-0.802133-3.242667-1.536l-0.6144-0.273067q-1.928533-0.836267-3.9424-1.553067l-0.8192-0.273066a54.8864 54.8864 0 0 0-3.242666-1.024l-1.143467-0.324267a85.248 85.248 0 0 0-3.601067-0.887467l-0.546133-0.119466a67.345067 67.345067 0 0 0-4.1984-0.733867l-1.143467-0.136533q-1.706667-0.2048-3.2768-0.341334l-1.245866-0.1024a74.786133 74.786133 0 0 0-4.386134-0.1536 69.8368 69.8368 0 0 0-20.48 3.037867 104.106667 104.106667 0 0 0-12.1344-11.076267 258.696533 258.696533 0 0 0-449.9456-248.763733 183.1424 183.1424 0 0 1 106.939734-34.2528c5.12 0 10.24 0.221867 15.36 0.631467a183.125333 183.125333 0 0 1 50.5344 11.52h0.170666q3.874133 1.501867 7.68 3.157333l0.256 0.1024 7.441067 3.413333 0.273067 0.136534q3.669333 1.826133 7.253333 3.805866l0.221867 0.119467q3.618133 2.013867 7.133866 4.164267a184.610133 184.610133 0 0 1 26.760534 20.036266h0.085333q2.986667 2.696533 5.870933 5.5296l0.324267 0.3072q2.781867 2.7648 5.461333 5.632l0.443734 0.477867q2.6112 2.833067 5.12 5.768533l0.494933 0.580267q2.4576 2.9184 4.795733 5.956267l0.494934 0.648533q2.321067 3.037867 4.522666 6.178133l0.426667 0.6144q2.2016 3.1744 4.283733 6.4512l0.324267 0.529067q2.116267 3.413333 4.078933 6.826667l0.170667 0.3072c1.553067 2.7136 3.0208 5.495467 4.437333 8.2944a56.149333 56.149333 0 0 0-12.578133 2.304 82.824533 82.824533 0 0 0-134.007467 18.039466 42.530133 42.530133 0 0 0-53.009066 41.079467 104.277333 104.277333 0 0 0-42.2912 80.110933 13.653333 13.653333 0 0 0 0 1.4336v0.426667c0 0.136533 0.1024 0.682667 0.187733 1.024s0 0.3072 0.1024 0.4608 0.2048 0.733867 0.324267 1.092267l0.1024 0.3072a15.36 15.36 0 0 0 0.580266 1.416533l0.1024 0.187733a16.520533 16.520533 0 0 0 0.648534 1.211734l0.221866 0.3584c0.221867 0.3584 0.4608 0.733867 0.7168 1.092266l0.221867 0.3072a26.333867 26.333867 0 0 0 2.338133 2.798934l0.119467 0.119466q0.6144 0.631467 1.297067 1.262934l0.2048 0.187733q0.7168 0.648533 1.501866 1.297067 1.706667 1.416533 3.720534 2.781866c0.6656 0.4608 1.348267 0.904533 2.065066 1.348267 26.914133 16.7936 87.995733 28.535467 159.044267 28.535467 19.3536 0 37.956267-0.8704 55.3472-2.474667l-0.494933 0.750933-0.426667 0.6144q-2.2016 3.140267-4.539733 6.178134l-0.477867 0.631466q-2.338133 3.037867-4.795733 5.956267l-0.494934 0.580267q-2.491733 2.935467-5.12 5.7856l-0.443733 0.477866q-2.679467 2.884267-5.461333 5.649067l-0.3072 0.290133q-2.884267 2.833067-5.870934 5.546667a184.8832 184.8832 0 0 1-26.7776 20.036267q-3.515733 2.167467-7.150933 4.181333l-0.187733 0.1024q-3.584 1.979733-7.2704 3.805867l-0.256 0.136533q-3.6864 1.826133-7.458134 3.413333l-0.238933 0.1024q-3.805867 1.706667-7.68 3.157334h-0.136533a183.057067 183.057067 0 0 1-50.551467 11.52c-5.12 0.4096-10.24 0.631467-15.36 0.631466a183.159467 183.159467 0 0 1-106.939733-34.2528 258.5088 258.5088 0 0 0 180.138666 107.093334 109.550933 109.550933 0 0 0-3.259733 26.453333 16.520533 16.520533 0 0 0 0.1024 1.706667v0.529066c0 0.170667 0.136533 0.853333 0.221867 1.262934l0.136533 0.5632 0.392533 1.365333 0.136534 0.4096a13.892267 13.892267 0 0 0 0.733866 1.706667l0.119467 0.238933c0.238933 0.512 0.512 1.006933 0.802133 1.501867l0.273067 0.443733q0.4096 0.682667 0.887467 1.365333l0.273066 0.375467a33.0752 33.0752 0 0 0 2.9184 3.413333l0.1536 0.1536 1.5872 1.553067 0.273067 0.256 1.8432 1.621333q2.116267 1.706667 4.625067 3.413334l2.56 1.706666c33.467733 20.8896 109.431467 35.4816 197.802666 35.4816 119.330133 0 216.046933-26.606933 216.046934-59.409066a131.413333 131.413333 0 0 0-56.285867-102.058667z"
                fill="#323232"></path>
            <path
                d="M573.8496 401.8176v-2.781867a56.200533 56.200533 0 0 0-72.6016-53.725866 82.824533 82.824533 0 0 0-134.007467 18.039466 42.530133 42.530133 0 0 0-53.009066 41.079467 104.277333 104.277333 0 0 0-42.257067 80.0768c0 26.385067 77.7728 47.786667 173.7216 47.786667s173.7216-21.384533 173.7216-47.786667a105.659733 105.659733 0 0 0-45.568-82.688z"
                fill="#CDCCCA"></path>
            <path
                d="M293.768533 506.2656a104.277333 104.277333 0 0 1 42.2912-80.110933 42.530133 42.530133 0 0 1 53.009067-41.079467 82.807467 82.807467 0 0 1 134.007467-18.039467 56.32 56.32 0 0 1 43.758933 4.642134 56.2176 56.2176 0 0 0-65.518933-26.4192 82.824533 82.824533 0 0 0-134.007467 18.039466 42.530133 42.530133 0 0 0-53.009067 41.079467 104.277333 104.277333 0 0 0-42.325333 80.128c0 8.413867 7.936 16.3328 21.845333 23.210667a13.294933 13.294933 0 0 1-0.0512-1.450667z"
                fill="#E8E9EC"></path>
            <path
                d="M453.4784 166.912a258.338133 258.338133 0 0 0-210.944 108.919467 183.995733 183.995733 0 1 1 0 299.451733 258.6624 258.6624 0 1 0 210.944-408.388267z"
                fill="#DDAE2A"></path>
            <path
                d="M364.834133 608.9216q7.594667 0.631467 15.36 0.648533a183.995733 183.995733 0 0 0 0-367.9744q-7.748267 0-15.36 0.631467a183.995733 183.995733 0 0 1 0 366.6944z"
                fill="#EDC849"></path>
            <path
                d="M794.7776 605.969067c0-1.143467 0.085333-2.286933 0.085333-3.413334a69.973333 69.973333 0 0 0-90.299733-66.833066 102.997333 102.997333 0 0 0-166.656 22.4256 52.906667 52.906667 0 0 0-65.928533 51.0976 129.706667 129.706667 0 0 0-52.599467 99.6352c0 32.8192 96.733867 59.409067 216.046933 59.409066s216.046933-26.606933 216.046934-59.409066a131.413333 131.413333 0 0 0-56.695467-102.912z"
                fill="#CDCCCA"></path>
            <path
                d="M446.481067 735.914667a129.706667 129.706667 0 0 1 52.599466-99.6352 52.906667 52.906667 0 0 1 65.928534-51.080534 102.997333 102.997333 0 0 1 166.6048-22.442666 69.973333 69.973333 0 0 1 54.408533 5.7856 69.973333 69.973333 0 0 0-81.476267-32.853334 102.997333 102.997333 0 0 0-166.656 22.4256 52.906667 52.906667 0 0 0-65.928533 51.0976 129.706667 129.706667 0 0 0-52.599467 99.6352c0 10.478933 9.864533 20.309333 27.170134 28.859734a17.408 17.408 0 0 1-0.0512-1.792z"
                fill="#E8E9EC"></path>
        </symbol>
    </svg>
</div>
<script>
    function music_on() {
        var audio1 = document.getElementById('bg_music');
        if (audio1.paused) {
            audio1.play();
        }else{
            audio1.pause();
            audio1.currentTime = 0;//音乐从头播放
        }
    }
    function BackTOP() {
        $("#btn").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 50) {
                    $("#btn").fadeIn(200);
                } else {
                    $("#btn").fadeOut(200);
                }
            });
            $("#btn").click(function () {
                $('body,html').animate({
                        scrollTop: 0
                    },
                    500);
                return false;
            });
        });
        $(function () {
            $("#say").click(function () {
                $('body,html').animate({
                        scrollTop: $('html, body').get(0).scrollHeight
                    },
                    500);
                return false;
            });
        })
    }
    $('#readmode').click(function () {
            $('body').toggleClass('read-mode')
        })
    function SiderMenu() {
        $('#main-container').toggleClass('open');
        $('.iconflat').css('width', '50px').css('height', '50px');
        $('.openNav').css('height', '50px');
        $('#main-container,#mo-nav,.openNav').toggleClass('open')
    }
    function switchNightMode() {
        $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($("body")), setTimeout(
            function () {
                var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") ||
                    '0';
                (DarkMode == '0') ? ($("html").addClass("DarkMode"), document.cookie = "DarkMode=1;path=/", console
                    .log('夜间模式开启'), $('#modeicon').attr("xlink:href", "#icon-sun")) : ($("html").removeClass(
                        "DarkMode"), document.cookie = "DarkMode=0;path=/", console.log('夜间模式关闭'), $('#modeicon')
                    .attr("xlink:href", "#icon-_moon")), setTimeout(function () {
                    $(".Cuteen_DarkSky").fadeOut(1e3, function () {
                        $(this).remove()
                    })
                }, 2e3)
            }), 50
    }
    function checkNightMode() {
        if ($("html").hasClass("n-f")) {
            $("html").removeClass("day");
            $("html").addClass("DarkMode");
            $('#modeicon').attr("xlink:href", "#icon-sun")
            return;
        }
        if ($("html").hasClass("d-f")) {
            $("html").removeClass("DarkMode");
            $("html").addClass("day");
            $('#modeicon').attr("xlink:href", "#icon-_moon")

            return;
        }
        if (document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") === '') {
            if (new Date().getHours() >= 22 || new Date().getHours() < 6) {
                $("html").addClass("DarkMode");
                document.cookie = "DarkMode=1;path=/";
                console.log('夜间模式开启');
                $('#modeicon').attr("xlink:href", "#icon-sun")
            } else {
                $("html").removeClass("DarkMode");
                document.cookie = "DarkMode=0;path=/";
                console.log('夜间模式关闭');
                $('#modeicon').attr("xlink:href", "#icon-_moon")
            }
        } else {
            var DarkMode = document.cookie.replace(/(?:(?:^|.*;\s*)DarkMode\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
            if (DarkMode == '0') {
                $("html").removeClass("DarkMode");
                $('#modeicon').attr("xlink:href", "#icon-_moon")
            } else if (DarkMode == '1') {
                $("html").addClass("DarkMode");
                $('#modeicon').attr("xlink:href", "#icon-sun")
            }
        }
    }
    BackTOP();
    checkNightMode();
</script>
<style>
    #RightDownBtn {
        position: fixed;
        right: 10rem;
        bottom: 23.5rem;
        padding: 0.3125rem 0.625rem;
        background: #fff;
        border-radius: 0.1875rem;
        
        transition: 0.3s ease all;
        z-index: 1;
        align-items: flex-end;
        flex-direction: column;
        display: -moz-flex;
        display: flex;
        float: right;
    }
    #RightDownBtn>a,
    #RightDownBtn>label {
        width: 1.5em;
        height: 1.5em;
        margin: 0.3125rem 0;
        transition: .2s cubic-bezier(.25, .46, .45, .94);
    }
    /* font color */
    .DarkMode #page,
    .DarkMode #colophon,
    .DarkMode #vcomments .vbtn,
    .DarkMode .art-content #archives .al_mon_list .al_mon,
    .DarkMode .art-content #archives .al_mon_list span,
    .DarkMode body,
    .DarkMode .art-content #archives .al_mon_list .al_mon,
    .DarkMode .art-content #archives .al_mon_list span,
    .DarkMode button,
    .DarkMode .art .art-content #archives a,
    .DarkMode textarea,
    .DarkMode strong,
    .DarkMode a,
    .DarkMode p,
	.DarkMode li,
    .DarkMode .label {
        color: rgba(255, 255, 255, .6);
    }
    .DarkMode #page,
    .DarkMode body,
    .DarkMode #colophon,
    .DarkMode #main-container,
    .DarkMode #page .yya,
    .DarkMode #content,
    .DarkMode #contentss,
    .DarkMode #footer {
        background-color: #292a2d;
    }
    .DarkMode strong,
    .DarkMode img {
        filter: brightness(.7);
    }
    /* sun and noon */
    .Cuteen_DarkSky,
    .Cuteen_DarkSky:before {
        content: "";
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 88888888
    }
    .Cuteen_DarkSky {
        background: linear-gradient(#feb8b0, #fef9db)
    }
    .Cuteen_DarkSky:before {
        transition: 2s ease all;
        opacity: 0;
        background: linear-gradient(#4c3f6d, #6c62bb, #93b1ed)
    }
    .DarkMode .Cuteen_DarkSky:before {
        opacity: 1
    }
    .Cuteen_DarkPlanet {
        z-index: 99999999;
        position: fixed;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        -webkit-animation: CuteenPlanetMove 2s cubic-bezier(.7, 0, 0, 1);
        animation: CuteenPlanetMove 2s cubic-bezier(.7, 0, 0, 1);
        transform-origin: center bottom
    }
    @-webkit-keyframes CuteenPlanetMove {
        0% {
            transform: rotate(0)
        }

        to {
            transform: rotate(360deg)
        }
    }
    @keyframes CuteenPlanetMove {
        0% {
            transform: rotate(0)
        }

        to {
            transform: rotate(360deg)
        }
    }
    .Cuteen_DarkPlanet:after {
        position: absolute;
        left: 35%;
        top: 40%;
        width: 9.375rem;
        height: 9.375rem;
        border-radius: 50%;
        content: "";
        background: linear-gradient(#fefefe, #fffbe8)
    }
</style>
<!-- left side bar.end -->
```
{% endfolding %}  
- 在`layout.ejs`中引用。
代码位置，在`themes\volantis\layout\layout.ejs`中引用`left.ejs`:
```ejs
<!--注意在body之前添加代码-->
<%- partial('_partial/left', null, {cache: !config.relative_link}) %>  
```
- 额外的，图标的更换以及添加新的页面跳转，可以看我的博文[右边小侧边栏更换图标](https://zhou251.github.io/posts/58643/).  
- 修改右边小侧边栏的显示位置方法如下。在我们添加的`left.ejs`的代码中，找到以下代码修改  
  ```ejs
    #RightDownBtn {
        position: fixed;
        right: 10rem;
        bottom: 23.5rem;
        padding: 0.3125rem 0.625rem;
        background: #fff;
        border-radius: 0.1875rem;
        transition: 0.3s ease all;
        z-index: 1;
        align-items: flex-end;
        flex-direction: column;
        display: -moz-flex;
        display: flex;
        float: right;
    }
    ```
如上所示，`right:10rem`就是离右边的距离，想显示在左边就把`right`换成`left`。`bottom: 23.5rem`，就是离底部的距离。我之所放在这里，我是因为不想被Tidio的聊天框挡住。
### 1.4 开启Tidio
效果如图：  
![tidio](https://i.loli.net/2021/02/25/KlTWU5jo3ILFkCA.png)
#### 1.4.1 注册tidio
可以去官网[tidio](https://www.tidio.com/)注册。
#### 1.4.2 配置主题文件
如图在设置中复制`Public Key`。  
![key](https://i.loli.net/2021/02/25/hz1BiXa5bGZSdup.png)
将`key`粘贴到`_config.volantis.yml`中的相关代码中的`id`处即可。
  ```yml
  # Tidio聊天功能
  # https://www.tidio.com/
  tidio:
    enable: true
    id: 
  ```
#### 1.4.3 修改tidio设置
另外，在tidio中可以设置相关的喜好。
![设置](https://i.loli.net/2021/02/25/gqNQ6ErG4jHVnOR.png)

### 1.5 标题制作
我的标题制作使用ppt实现的。效果如图：
![](https://i.loli.net/2021/03/02/GpIySgAQKEOMLYW.png)
- 首先下载[王羲之字体](https://www.ypppt.com/article/2018/5370.html)，并安装，如何安装请自行[百度](www.baidu.com)。
- 进入ppt软件中画一个文本框，里面写你的标题，字体设置为王羲之字体。
- 修改样式。
  - 调整字体大小，我的是选择最大的。
  - 给每个字上不同的颜色。
  - 设置文本框背景色和边框无色。
  - 在文本框上右键，选择另存为图片即可。

### 1.6 图标来源
- 图标来源：[阿里巴巴矢量图标库](https://www.iconfont.cn/)。
- 使用方法请看这里[Hexo-使用阿里iconfont图标](https://blog.csdn.net/qq_43740362/article/details/113796473)。
但是首页的图标我并没有使用icon而是选用的img，方法如下。
- 选择想使用的图标，点击下载png格式。
- 以首页图标为例，进入**主题配置文件**`_config.volantis.yml`中定位到以下代码处。
  ```yml
  features:
    - name: 首页
      icon: #iconfont iconHOMEMESSAGE
      img: https://i.loli.net/2021/02/21/ryt2vsUfTRoAPMF.png
      url: /
  ```
  将img的链接输入进去，我这里使用的是[sm.ms图床](https://sm.ms/login)。  
  你们可以自行使用其他图床，这个不重要。  

### 1.7 crash_cheat
效果如图：  
![](https://i.loli.net/2021/02/25/xaR2phbgl4Vn7CE.png)  
![](https://i.loli.net/2021/02/25/i82QsZfzktpDdqO.png)
就是一个装饰用的，实现方法如下：
- 在`themes\volantis\source\js`下新建一个js文件，`crash_cheat.js`。代码如下：  
  ```js
  $(function () {
        var OriginTitle = document.title;
        var titleTime;
        document.addEventListener('visibilitychange', function () {
        // 解决pjax冲突bug
         if (document.title !== '╰（‵□′）╯ 我是！') {
            OriginTitle = document.title
         }
         if (document.hidden) {
            $('[rel="icon"]').attr('href', "https://i.loli.net/2021/02/22/Ej89S5cqwQzhT6V.png");
            $('[rel="shortcut icon"]').attr('href', "https://i.loli.net/2021/02/22/Ej89S5cqwQzhT6V.png");
            document.title = '╰（‵□′）╯ 我是！';
            clearTimeout(titleTime);
         } else {
            $('[rel="icon"]').attr('href', "https://i.loli.net/2021/02/22/aZhi1wStPpoYFm6.png");
            $('[rel="shortcut icon"]').attr('href', "https://i.loli.net/2021/02/22/aZhi1wStPpoYFm6.png");
            document.title = '(╯‵□′)╯︵┻━┻ 火车王！ ';
            titleTime = setTimeout(function () {
                document.title = OriginTitle;
            }, 2000);
          }
        });
     })  
  ```
- 引用js。  
在`\themes\volantis\layout\_partial\scripts`文件夹中的`index.ejs`中的最后一行添加以下代码。
   ```ejs
   <script src="/js/crash_cheat.js"></script>
   ```

- 你可以按照喜好，自定义上述代码中的`title`和`href`部分。  

## 2 内容页  
效果如图：  

![内容页](https://i.loli.net/2021/02/25/wH9RXsyitfoJrDk.png)
### 2.1 导航栏
#### 导航栏模式选择
默认应该是居中模式，但是并不是全屏宽度的。
所以我改了**主题配置文件**`_config.volantis.yml`中的相关设置，请定位到以下代码进行修改。
```yml
navbar:
    height: 64px
    width: max # auto, max
    effect: [shadow] # [shadow, floatable, blur]
```
修改`width`中的设定，设置为`max`最大。

#### 2.1.1导航栏背景渐变色
- 取消毛玻璃特效
  代码位置，**主题配置文件**`_config.volantis.yml`中，请定位到以下代码：
  ```yml
  navbar:
    height: 64px
    width: max # auto, max
    effect: [shadow] # [shadow, floatable, blur]
  ```
  将`effect`中的`blur`去掉，这里我已经去掉了。
- 添加渐变色样式
  代码位置，`/themes/volantis/source/css/_first`文件夹中，修改`navbar.styl`文件。请定位到以下代码：
  ```styl
  .l_header
  $iconW = 36px
  $iconMargin = 4px
  position: fixed
  z-index: 1000
  top: 0
  width: 100%
  height: $navbar-height
  background: var(--color-card)
  background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);
  box-shadow: $boxshadow-card
  ```
- 这里你们是没有`backgroud-image:`请自行添加，后面的颜色代码和渐变位置你们也可以自定义。
  这里有一个[渐变css3样式](http://color.oulu.me/)网站。  

#### 2.1.2导航栏新建栏目
1. 新建一个相册栏目。
  这里只是做个初步的新建，实际页面样式请看后文相关页面的具体配置。
  - 在Git Bash中,新建一个页面
    ```
    hexo n page photos
    ```
  - 显示新建页面
    代码位置，主题配置位置`_config.volantis.yml`中，请定位到以下代码，
    ```yml
     navbar:
      visiable: auto # always, auto
      logo: # choose [img] or [icon + title]  ##导航栏图标相关
      img: #/images/小可达鸭.jpg  
      icon: #/images/可达鸭.png
      title:
     menu:
      - name: 主页
        icon: iconfont iconHOMEMESSAGE
        url: /
    ```
    在`menu`中仿照主页，添加相册栏目，icon添加我使用的[阿里图标库](https://www.iconfont.cn/)的图标，上文有介绍。
    `url`中填你新建栏目`index.md`所在的文件夹，这里新建页面photos，所以填的是`photos/`
    如下所示：
    ```yml
     - name: 相册
       icon: iconfont iconxiangce2
       url: photos/
    ```
    栏目的顺序，即是menu中上下的排序。
2. 新建一个类似`找文章`一样的列表栏目。
  - 首先像上面新建相册一样，新建你需要的页面。
  - 然后将页面放进列表中，利用`rows`语法如下：
    ```yml
    - name: 阅读
      icon: iconfont icondushu
      rows:
        - name: 书单
          icon: iconfont iconbook
          url: booklist/
        - name: 诗与歌
          icon: iconfont iconsgdq
          url: poetry/
        - name: 读书笔记
          icon: iconfont icon44
          url: booknotes/
    ```
    这里以我的阅读栏目为例，下面有三个独立页面。

### 2.2 侧边栏
#### 2.2.1 侧边栏标题背景渐变色
像导航栏一样，代码位置，`themes\volantis\source\css`文件夹中的`style.styl`添加代码(这里引用css应该更好):
```styl
.widget header.pure {
    background: linear-gradient(to right, #eea2a2 0, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
    color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
}
```
`background`即为背景色，具体渐变色可以自己调整。另外，设置了文字`color`的颜色为`#fff`白色，你可以自行调整。  
下面内容白色背景也是可以自定义的，请自行`f12`定位样式修改，不过我改过觉得还是白色好，可以换个柔和一点的白色。  

#### 2.2.2 新建公告板
新建公告板的话，[官方文档-通用文本部件](https://volantis.js.org/v3/theme-settings/widget/)里有详细介绍。
然后在**主题配置文件**`_config.volantis.yml`里,定位到以下代码，开启。
```yml
 sidebar:
  # 主页、分类、归档等独立页面
  for_page: [repos, blogger, tagcloud, category, qrcode, recentpost, webinfo]
```
这里，因为我想把公告放在显眼的位置。于是把它放在了第一个，有别的需求的自行调整位置。  

#### 2.2.3 彩色打印机
这个就是头像下面那个`四季是我一生的诗`的彩色字符。
实现方法如下：
- 代码位置，`\themes\volantis\source\js`文件夹中新建js文件，`typewriter-color.js`。
  {% folding green, typewriter-color.js %}
  ```
  var typewriterColor = function (r) {
    function t() {
        return b[Math.floor(Math.random() * b.length)]
    }

    function e() {
        return String.fromCharCode(94 * Math.random() + 33)
    }

    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = e(), l.style.color = t(), n.appendChild(l)
        }
        return n
    }

    function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }
    /*以下内容自定义修改*/
    var l = "",
        o = ["四季是我一生的诗~", ].map(function (r) {
            return r + ""
        }), a = 2, g = 1, s = 5, d = 75,
        b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
        c = {text: "", prefixP: -s, skillI: 0, skillP: 0, direction: "forward", delay: a, step: g};
    i()
 };
 typewriterColor(document.getElementById('binft'));
  ```
  {% endfolding %} 
  这里签名内容请自行调整。
- 调用js。
  代码位置，themes\volantis\layout\_widget文件夹中，修改blogger.ejs，在`<% if (item.social == true && theme.footer.social) { %>`前插入代码。
  ```ejs
  <!--彩色打字机效果-->
  <div id="binft" align="center"></div>
  <script src="/js/typewriter-color.js"></script>
  ```

#### 2.2.4 社交图标选取
社交图标我使用的是这一套[social图标](https://www.flaticon.com/packs/social-media-73)以及[阿里巴巴矢量图标库](https://www.iconfont.cn/)里面的图标。
下载png格式，在**主题配置文件**`_config.volantis.yml`中定位到社交按钮处。
```yml
social:
        - icon: #fab fa-github
          img: #图标链接填这里，请使用图床生成直链。
          url: #网站直链
```

#### 2.2.5 侧边添加地图样式访客来源
无意间看见的，觉得挺有意思的。
**效果**：![](https://i.loli.net/2021/03/03/U6G8It4p3YQsz7w.png)
**参考文章**：[hexo(butterfly)加入clustrmaps访问者地图](https://blog.csdn.net/cungudafa/article/details/105925710)
原文的主题是`butterfly`,`volantis`的实现方法与其有些不同。
- [注册账号](https://clustrmaps.com/)
- 步骤如下，复制代码即可
  1. ![](https://i.loli.net/2021/03/03/jFpNvR5DW9S8LZJ.png)
  2. ![](https://i.loli.net/2021/03/03/FVzgJy2xRfOCvTA.png)
  3. ![](https://i.loli.net/2021/03/03/nuQy9q3BFjfPXCU.png)
  4. ![](https://i.loli.net/2021/03/03/PGCYsEU1LtVaZg6.png)
- 侧边栏添加一栏放置地图。参考官方的文档[通用页面部件](https://volantis.js.org/v4/theme-settings/)。
  1. 先新建一个`maps`页面。
      ```
      hexo n page maps
      ```
  2. 然后设置`maps.md`
      ```
           ---
           title: 
           author: zhou251
           date: 2021-03-03 11:58:28
           top_meta: false
           bottom_meta: false
           sidebar: []
           pid: maps
           ---
           {% p, 点击⬆️标题 👀详细数据%}
           <script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=240&t=m&d=nPT3klgaM48VqrrmUwHa0jKmRM0-En6O2ErQ0DCeQdg&co=2d78ad&ct=ffffff&cmo=3acc3a&cmn=ff5353'></script>

           <style>
           .l_side>.widget.page>.content {
               padding-top: 10px;
               padding-left: 12px;
               padding-right: 12px;
               padding-bottom: 10px;
           }
            </style>
       ```
       这里是我的样式参数，你们自己改。注意`front-matter`上面有一个`pid`这个后面要用。
   3. 打开**主题配置文件**`_config.volantis.yml`，定位到以下代码。
       ```yml
           sidebar:
           # 主页、分类、归档等独立页面
           for_page: [repos, blogger, tagcloud, category, qrcode, recentpost, maps, webinfo]
           # layout: docs/post 这类文章页面
           for_post: [toc]
           # 侧边栏组件库
           widget_library:
             # ---------------------------------------
             # blogger info widget
             blogger:
               class: blogger
        ```
        **侧边栏组件库**中添加`maps`组件。
        ```yml
         maps:
         class: page
         display: [desktop, mobile]
         header:
           icon: iconfont iconmaps-pin
           title: 访客来源
           url: https://clustrmaps.com/site/1bgj8
         pid: maps
         content: content # excerpt, more, content
         ```
        再去`for_page`处（上述第一处代码）中开启`maps`，即可。
{% noteblock info red, 注意 %}
- 我在四个浏览器上试过，分别是谷歌浏览器，Edge，火狐浏览器，Yandex。Edge会吞地图，我也不知道为什么。
- 科学上网访问时，地图的背景色会盖住地图。
{% endnoteblock %}


## 3 导航栏中分栏目页面样式
这里选取几个典型的，恋爱纪念，相册，碎碎念，留言板，关于我，彩色标签云。
### 3.1 恋爱纪念
请在`博客根目录blog\source`下建一个文件夹，方便点就叫`love`。
之后会有四个文件夹放到这个`love`文件夹下，`url`设置一下就行了。
**参考博文**：[我们的爱情](http://www.bigeone.cn/love/index.html)
#### 3.1.1 恋爱天数
- 演示地址：[LOVEYUE6](http://loveyue6.bigeone.cn/)
- 源代码地址：[第六个](https://github.com/wuxia2001/loveyue)
- 在`love`文件夹下新建一个文件夹，我这里就新建为`lovedate`。将`第六个`的源代码复制进去。
- 在**主题配置文件**`_config.volantis.yml`中，定位到`menu:`位置，添加以下代码。
  ```
  - name: 我们的爱
    icon: iconfont iconlove 
    rows:
        - name: 恋爱ING
          icon: iconfont iconlovecalendar
          url: love/lovedate/
        - name: 想对你说
          icon: iconfont iconlove4
          url: love/lovewords/
        - name: loveshow
          icon: iconfont iconlove5
          url: love/loveppt/
        - name: 我们的故事
          icon: iconfont iconlove2
          url: love/lovestory/
  ```
   {% span red , 注意！我这里是四个页面，我全放这里了。用rows将四个页面放在我们的爱下面。url指向的是我们源代码存放的文件夹中。%} <br/> 
   {% span red , 注意！页面文字信息请自行按照README.txt指示，在html文件中修改。%}  

#### 3.1.2 恋爱表白
- 演示地址：[LOVEYUE1](http://loveyue1.bigeone.cn/)
- 源代码下载地址：[第一个](https://github.com/wuxia2001/loveyue)
- 在`love`文件夹下新建一个文件夹，我这里就新建为`lovewords`。将`第一个`的源代码复制进去。
- 如上**3.1.1 恋爱天数**所示，在**主题配置文件**`_config.volantis.yml`中，定位到`menu:`位置，添加代码。  

#### 3.1.3 恋爱ppt
- 演示地址：[love-ppt](https://arunboy.github.io/love/)
- 源代码下载地址：[love-ppt](https://github.com/arunboy/love)
- 在`love`文件夹下新建一个文件夹，我这里就新建为`loveppt`。将`love-ppt`的源代码复制进去。
- 如上**3.1.1 恋爱天数**所示，在**主题配置文件**`_config.volantis.yml`中，定位到`menu:`位置，添加代码。  

#### 3.1.4 恋爱历程
- 演示地址：[lovestory](http://www.bigeone.cn/story/one/index_pc.html)
- 源代码下载地址：[lovestory](https://github.com/zhou251/zhou251.github.io/tree/master/love/lovestory)
- 在`love`文件夹下新建一个文件夹，我这里就新建为`lovestory`。将`lovestory`的源代码复制进去。
- 如上**3.1.1 恋爱天数**所示，在**主题配置文件**`_config.volantis.yml`中，定位到`menu:`位置，添加代码。    

### 3.2 相册
效果如图：  

![相册示例](https://i.loli.net/2021/02/26/qDYJvbXl7zeiE4V.png)
volantis的`tab`实在是太好用了。
yilia中添加相册比`tab`复杂了很多。
这里[Volantis官方文档](https://volantis.js.org/v3/tag-plugins/container/)写的很详细。
以相册为例，简单讲下。
- 首先我们进入相册的`index.md`中，这个位置应该不用我说吧，在你建的photos文件夹下。
- 然后我们按照`tab`语法写一个`tabs`,`tabs`里面可以放很多`tab`，一个`tab`就是一个box你可以在里面写字传照片。
- 你可指定照片的显示方式,官方有说，看这里[image标签与gallery标签](https://volantis.js.org/v3/tag-plugins/media/)
- 一个页面可以放很多tabs，**注意tabs的id不要重复**。  

### 3.3 碎碎念
这里直接移步大佬的博客即可，[哔哔！换个姿势在静态博客上发短博文（Hexo-Volantis适配）](https://www.heson10.com/volantis/posts/15701.html)  

### 3.4 留言板
`留言板`跟`关于我`的内容全部取自[XU'S BLOG](https://hasaik.com/)。
因为原内容在评论区，因此我这里做一个总结。
- 打开`留言板`的`index.md`直接在里面设置样式。
- 复制样式代码：
 {% folding green, 留言板样式 %}
    ```
     <div style="margin-top:2.5rem;text-align:center">
     <span class="milky">💬留言板</span>
     </div>
     <br/>
     {% p,😘 是我，是我，就是我！%}

     <div class="poem-wrap">
     <div class="poem-border poem-left"></div>
      <div class="poem-border poem-right"></div>
     <h1>说给你听</h1>
     <p id="poem">挑选中...</p>
     <p id="info">
      </div>

     {% p,有什么想说的，有什么想问，就在下方留言吧，收到我会第一时间回复！请尽情灌水吧！😉 %}

     <script>
     $.get("https://v1.hitokoto.cn?c=i&c=j", function (data, status) {
        if (status == 'success') {
            $('#poem').html(data.hitokoto);
            if (data.from_who != null) {
                $('#info').html(data.from_who + " · " + "《 " + data.from + " 》");
            } else {
                $('#info').html(data.from);
            }
        } else {
            $('#poem').html("获取出错啦");
        }
     });
     </script>
     <style>
      .milky {
        font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
       font-size: 25px;
       letter-spacing: 0.1em;
       color: #333333;
       font-weight: 700;
       padding: 10px 20px;
       border-radius: 20px;
       background: linear-gradient(rgb(255, 102, 102) 0px, rgb(255, 102, 51) 100%);
     }
     .poem-wrap {
       position: relative;
       width: 730px;
       max-width: 80%;
       border: 2px solid #797979;
       border-top: 0;
       text-align: center;
     margin: 80px auto;
     }

      .poem-wrap h1 {
        position: relative;
        margin-top: -20px;
        display: inline-block;
        letter-spacing: 4px;
        color: #797979;
      border-bottom: none;
      }

     .poem-wrap p {
       width: 70%;
       margin: auto;
       line-height: 30px;
       color: #797979;
     }

     .poem-wrap p#poem {
      text-align: center;
      font-size: 25px;
     }

     .poem-wrap p#info {
       text-align: center;
       font-size: 15px;
       margin: 15px auto;
     }

     .poem-border {
      position: absolute;
      height: 2px;          
      width: 27%;
      background-color: #797979;
     }

     .poem-right {
      right: 0;
     }

     .poem-left {
      left: 0;
     }

     @media (max-width: 685px) {
     .poem-border {
        width: 18%;
      }
     }

     @media (max-width: 500px) {
     .poem-wrap {
        margin-top: 60px;
        margin-bottom: 20px;
        border-top: 2px solid #797979;
     }

     .poem-wrap h1 {
        margin: 20px 6px;
     }

     .poem-border {
        display: none;
      }
      }
     </style>
    ```
  {% endfolding %}

### 3.5 关于我
- 像上面那样，打开`关于我`的`index.md`直接在里面设置样式。
- 复制样式代码：
   {% folding green, 关于我样式 %}
   ```
    <div style="margin-top:2.5rem;text-align:center">
    <span class="milky">😎 关于我</span>
    </div>
    <br/>
    <style>
  .milky {
     font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
     font-size: 25px;
     letter-spacing: 0.1em;
     color: #333333;
     font-weight: 700;
     padding: 10px 20px;
     border-radius: 20px;
     background: linear-gradient(rgb(255, 102, 102) 0px, rgb(255, 102, 51) 100%);
   }
   </style>

  {# Botui聊天机器人样式 #}
   <link rel="stylesheet" href="/css/botui.min.css" />
   {# <link rel="stylesheet" href="/css/botui-theme-default.css" /> #}

  <div>
    <div id="hello-xuxuy" class="pop-container">
        <p style="text-align: center;">编号89757为您服务</p>
        <p style="text-align: center;">请您按提示点击按钮</p>
        <bot-ui></bot-ui>
    </div>
  </div>

  {# Botui聊天机器人js #}
  <script src="https://cdn.jsdelivr.net/vue/latest/vue.min.js"></script>
  <script src="/js/botui.js"></script>
  <script src="/js/botui-message.js"></script>
   ```
  {% endfolding %}
- 不同的是，因为`关于我`的界面里引用了`css`,`js`文件，因此我们要创建它。
  - ` css`代码位置，`themes\volantis\source\css`中创建`botui.min.css`。(只有一个`css`文件创建，下一个是被注释掉的)
    ```
     /*
     * botui 0.3.9
     * A JS library to build the UI for your bot
     * https://botui.org
     *
     * Copyright 2019, Moin Uddin
     * Released under the MIT license.
     */

     a.botui-message-content-link:focus{outline:thin dotted}a.botui-message-content-link:focus:active,a.botui-message-content-link:focus:hover{outline:0}form.botui-actions-text{margin:0}button.botui-actions-buttons-button,input.botui-actions-text-input{margin:0;font-size:100%;line-height:normal;vertical-align:baseline}button.botui-actions-buttons-button::-moz-focus-inner,input.botui-actions-text-input::-moz-focus-inner{border:0;padding:0}button.botui-actions-buttons-button{cursor:pointer;-webkit-appearance:button}
     .botui-app-container{width:100%;height:100%;line-height:1}@media (min-width:400px){.botui-app-container{width:400px;height:500px;margin:0 auto}}.botui-container    {width:100%;height:100%;overflow-y:auto;overflow-x:hidden}.botui-message{margin:10px 0;min-height:20px}.botui-message:after{display:block;content:"";clear:both}.botui-message-content{width:auto;max-width:75%;display:inline-block}.botui-message-content.human{float:right}.botui-message-content iframe{width:100%}.botui-message-content-image{margin:5px 0;display:block;max-width:200px;max-height:200px}.botui-message-content-link{text-decoration:underline}.profil{position:relative;border-radius:50%}.profil.human{float:right;margin-left:5px}.profil.agent{float:left;margin-right:5px}.profil>img{width:26px;height:26px;border:2px solid #e8e8e8}.profil>img.agent{content:url(http://decodemoji.com/img/logos/blue_moji_hat.svg);border-radius:50%}button.botui-actions-buttons-button{margin-top:10px;margin-bottom:10px}button.botui-actions-buttons-button:not(:last-child){margin-right:10px}@media (min-width:400px){.botui-actions-text-submit{display:none}}
    ```
  - `js`文件有两个分别创建即可，代码位置themes\volantis\source\js，创建`botui.js`和`botui-message.js`。
    [botui.js地址](https://github.com/XuxuGood/XuxuGood.github.io/blob/master/js/botui.js)
    [botui-message.js地址](https://github.com/XuxuGood/XuxuGood.github.io/blob/master/js/botui-message.js)
  - `botui-message.js`里面的个人回复自定义即可。  

### 3.6 彩色标签云
请移步黑石大佬的博客[给博客增加彩色标签云](https://www.heson10.com/posts/5892.html)
可以不合并`标签页面`跟`归档页面`。

## 4 其他美化
### 4.1 分割符美化
  - 效果如图：  
  ![分隔符](https://i.loli.net/2021/02/26/GJ58M4fybdvnXFm.png)
  - **参考博文**：[美化分隔符-hr-样式](https://bestzuo.cn/posts/halo-beauty.html#2%E7%BE%8E%E5%8C%96%E5%88%86%E9%9A%94%E7%AC%A6-hr-%E6%A0%B7%E5%BC%8F)  
  - 代码位置，在`themes\volantis\source\css`文件夹中`style.styl`文件里面加入以下代码：  
    ```styl
    /* 美化 hr 样式 */
    hr {
    position: relative;
    margin: 2rem auto;
    width: calc(100% - 4px);
    border: 2px dashed #a4d8fa;
    background: #fff;
    }
    hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    }
    hr:before {
    position: absolute;
    top: -10px;
    left: 5%;
    z-index: 1;
    color: #49b1f5;
    content: '\f0c4';
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 20px;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    -ms-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    } 
    hr:hover::before{
    left: 95%;
    }
    ```

### 4.2 评论区虚线框
  - 效果如图：
    ![评论区虚线框](https://i.loli.net/2021/02/26/5MGJLjtDiQwFIds.png)
  - 代码位置，`themes\volantis\source\css`文件夹中，在`style.styl`中后面添加代码：
      ```styl
      .tk-comment {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      word-break: break-all;
      padding: 15px 20px 0 20px;
      border-radius: 10px;
      margin-bottom: 15px;
      border: 1px dashed rgba(198,51,0,.3);
      border-top-color: rgba(198,51,0,.3);
      border-top-style: dashed;
      border-top-width: 1px;
      border-right-color: rgba(198,51,0,.3);
      border-right-style: dashed;
      border-right-width: 1px;
      border-bottom-color: rgba(198,51,0,.3);
      border-bottom-style: dashed;
      border-bottom-width: 1px;
      border-left-color: rgba(198,51,0,.3);
      border-left-style: dashed;
      border-left-width: 1px;
      border-image-source: initial;
      border-image-slice: initial;
      border-image-width: initial;
      border-image-outset: initial;
      border-image-repeat: initial;
      transition: all .3s;
      } 
      ```

### 4.3 鼠标样式修改
一开始我是全局改的，后来发现主题配置里面有，所以干脆在主题配置里面改算了。
代码位置**主题配置文件**`_config.volantis.yml`，定位到以下代码。
```yml
cursor:
    enable: true #此处开启
    text: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/text.png
    pointer: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/pointer.png  #https://cdn.jsdelivr.net/gh/zhou251/CDN@1.6/hexo-volantis/img/pointer.cur  
    default: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/left_ptr.png  #https://cdn.jsdelivr.net/gh/zhou251/CDN@1.6/hexo-volantis/img/default.cur #
    not-allowed: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/circle.png
    zoom-out: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/zoom-out.png
    zoom-in: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/zoom-in.png
    grab: https://cdn.jsdelivr.net/gh/inkss/common@master/cursor/openhand.png
```


