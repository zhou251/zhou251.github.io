---
layout: page
seo_title: 关于我
bottom_meta: false
sidebar: []
sitemap: false
valine:
  placeholder: 有什么想对我说的呢？
---
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
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
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
