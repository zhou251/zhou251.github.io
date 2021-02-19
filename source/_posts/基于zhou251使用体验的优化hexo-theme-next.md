---
title: 基于zhou251使用体验的hexo-theme-next优化
author: zhou251
tags:
  - hexo
categories:
  - 教程
abbrlink: 54111
date: 2021-02-17 16:49:55
---
# 使用不蒜子统计访问人数
> 网上有很多教程，什么不蒜子网址更新之类的。  
> 不过我在\themes\next\layout_third-party\analytics中修改busuanzi-counter.swig并没有什么卵用。  
> 所以换了个方法。
<!--more-->
<br/>**首先**在next文件夹下修改主题配置文件`_config.yml`。
```yaml
搜索footer，将#footer: source/_data/footer.swig的注释符号取消。
```
<br/>**接着**在博客目录文件夹`myblog\source\_data`下（也就是放博文的`_post`同级目录中,没有`_data`文件夹就在`source`文件夹下新建一个）修改`footer.swig`(同样，没有就在_data下新建一个,复制如下代码即可)

```swig
{% if theme.busuanzi_count.enable %}
<div class="busuanzi-count">
  <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

  {% if theme.busuanzi_count.total_visitors %}
    <span class="post-meta-item-icon">
      <i class="fa fa-{{ theme.busuanzi_count.total_visitors_icon }}"></i>
    </span>
    <span class="site-uv" title="{{ __('footer.total_visitors') }}">
      已有<span class="busuanzi-value" id="busuanzi_value_site_uv"></span>人访问
    </span>
  {% endif %}

  {% if theme.busuanzi_count.total_visitors and theme.busuanzi_count.total_views %}
    <span class="post-meta-divider">|</span>
  {% endif %}

  {% if theme.busuanzi_count.total_views %}
    <span class="post-meta-item-icon">
      <i class="fa fa-{{ theme.busuanzi_count.total_views_icon }}"></i>
    </span>
    <span class="site-pv" title="{{ __('footer.total_views') }}">
      总访问<span class="busuanzi-value" id="busuanzi_value_site_pv"></span>次
    </span>
  {% endif %}
  
</div>
{% endif %}
```
<br/>**最后**在next文件夹下修改主题配置文件`_config.yml`
```yaml
busuanzi_count:
  enable: true
  total_visitors: true
  total_visitors_icon: fa fa-user
  total_views: true
  total_views_icon: fa fa-eye
  post_views: true
  post_views_icon: fa fa-eye

  ##搜索busuanzi并开启(true)。
  ```
