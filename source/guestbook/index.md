---
layout: page
title: 
top_meta: false
bottom_meta: false
sidebar: []
---

<div style="margin-top:2.5rem;text-align:center">
<span class="milky">💬留言板</span>
</div>

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