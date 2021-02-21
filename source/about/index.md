---
layout: page
seo_title: 关于我
bottom_meta: false
sidebar: []
sitemap: false
valine:
  placeholder: 有什么想对我说的呢？
---
{# Botui聊天机器人样式 #}
<link rel="stylesheet" href="/css/botui.min.css" />
{# <link rel="stylesheet" href="/css/botui-theme-default.css" /> #}

<div>
    <div id="hello-xuxuy" class="pop-container">
        <p style="text-align: center;">真（ま）白（しろ）</p>
        <p style="text-align: center;">对话中...</p>
        <bot-ui></bot-ui>
    </div>
</div>

{# Botui聊天机器人js #}
<script src="https://cdn.jsdelivr.net/vue/latest/vue.min.js"></script>
<script src="/js/botui.js"></script>
<script src="/js/botui-message.js"></script>