---
title: 将qq音乐歌单以文本格式批量导出
author: zhou251
tags:
  - QQ音乐
categories:
  - 转载
headimg: https://i.loli.net/2021/02/28/9qrMkLtBRh2PQw6.jpg
abbrlink: 26806
date: 2021-03-02 20:55:54
---
恰好有这个需求，恰好我又看到实现方法。
原地址请看这里：[qq音乐歌单 导入 Apple Music](https://post.smzdm.com/p/alpz4vgp/)

<!--more-->

- 效果：
  ![](https://i.loli.net/2021/03/02/demBAJrGiE4aqNf.png)
- 打开这个[网址](https://c.y.qq.com/v8/fcg-bin/fcg_v8_playlist_cp.fcg)
- 打开浏览器开发者工具（Mac一般是command+shift+i，Windows一般是F12）,在Console里面复制以下代码，将中文部分`[歌单id]`全部替换为歌单实际的数字id(数字id查询详见[volantis主题个性化记录](https://zhou251.top/posts/14591/)中`1.2 aplayer固定位置`部分)。
- {% folding green, 代码在此 %}
      ```
      (function () {
        var script = document.createElement("SCRIPT");
        script.src = 'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName("head")[0].appendChild(script);

        var checkReady = function (callback) {
            if (window.jQuery) {
                callback(jQuery);
            } else {
                window.setTimeout(function () { checkReady(callback); }, 100);
            }
        };

        checkReady(function ($) {
            var text="";
            $.ajax({

                url: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_playlist_cp.fcg?id=[歌单id]&cv=60102&ct=19&newsong=1&tpl=wk&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqspaframe.json&needNewCode=0",
                async:false,
                dataType:"json",
                success:function(data){
                    var songlist = data.data.cdlist[0].songlist;
                    for(var i=0;i < songlist.length; i++){
                        var tmp = songlist[i];
                        text += tmp.singer[0].name +" - "+ tmp.name+"<br>";
                    }
                }
            });

            $('body').empty();
            $('body').append("<div>"+text+"</div>");
        });

    })();
      ```
      {% endfolding %}   
  
- 回车执行