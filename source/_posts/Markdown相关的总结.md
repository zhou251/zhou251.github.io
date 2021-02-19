---
title: markdown相关的总结
date: 2021-02-17 11:29:55
author: zhou251
tags: 
- markdown
- 写作
categories:
- 教程
---
## 标题

**标准写法：**#+空格+标题，#的数量代表标题的级别。

**语法：**
<!--more-->
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题（最小标题）
```

**效果：**

![1](https://i.loli.net/2021/02/17/YizxLkEPB62cwu9.png)

## 正文

### 斜体

**语法：**

```markdown
*斜体1*
_斜体2_
```

**效果：**

*斜体1*

*斜体2*

### 加粗

**语法：**

```markdown
**粗体1**
__粗体2__
```

**效果：**

**粗体1**

**粗体2**

### 删除线

**语法：**

```markdown
~~删除线~~
```

**效果：**

~~删除线~~

另外当需要**粗体**，*斜体*，~~删除线~~结合只需要将各自语法需要的符号结合写就行，这里举一个范例（三者结合）。

**语法：**

```markdown
***~~粗体斜体删除线1~~***
~~***粗体斜体删除线2***~~
```

**效果：**

***~~粗体斜体删除线1~~***
***~~粗体斜体删除线2~~***

### 高亮

**语法：**

```markdown
`文本高亮`
==文本高亮==
```

**效果：**

`文本高亮`

==文本高亮==(误)

### 上标

**语法：**

```markdown
2<sup>2^<sup>
```

**效果：**

2<sup>2<sup>

### 下标

**语法：**

```markdown
H<sub>2</sub>O
```

**效果：**

H<sub>2</sub>O

## 换行

在 Markdown 语法中，换行与换段是不同的概念。
Typora换行分为软换行和硬换行。

**软换行：**你可以通过 `Shfit + Enter` 完成一次软换行。软换行只在编辑界面可见，当文档被导出时换行**会被省略**。

**效果：**

文本第一行
文本第二行
文本第三行

可以清晰地看到行间距很小。

**硬换行：**你可以通过`空格 + 空格 + Shift + Enter` 完成一次硬换行。硬换行在文档被导出时**将被保留**，且没有换段的段后距。

‼️**通用换行**

写gitbook时，使用上述换行方式（硬换行，软换行），发现渲染html时显示不了换行效果，好像简书上渲染也是不行。

语法：

```markdown
文本<br/><br/>文本
```

效果：

文本

文本

## 换段

你可以通过`Enter`完成一次换段。

**效果：**

文本第一行

文本第二行

文本第三行

注意看段间距跟行间距的区别。

## 分割线

**语法：**

```markdown
---
___
***

```

**效果：**

---

## 引用代码

**单行代码引用**

**格式：**`代码`

**语法：**

```markdown
`print('hello nick')`
```

**效果：**

`print('hello nick')`

**多行代码引用**

**语法：**

```markdown

```
print('hello nick')
print('hello nick')
print('hello nick')
```

```

**效果：**

```c
print('hello nick')
print('hello nick')
print('hello nick')
```

## 插入链接

**直接链接显示**

**语法：**

```markdown
<https://baike.baidu.com/item/markdown/3245829?fr=aladdin>
```

**效果：**

[https://baike.baidu.com/item/markdown/3245829?fr=aladdin](https://baike.baidu.com/item/markdown/3245829?fr=aladdin)

**行内式链接**

**格式：**[文本]（URL“title"）title可以不要。

**语法：**

```markdown
[markdown百度百科](https://baike.baidu.com/item/markdown/3245829?fr=aladdin)
```

**效果：**

[markdown百度百科](https://baike.baidu.com/item/markdown/3245829?fr=aladdin)

**参考式链接**

**格式：**

[文本][1] 

起码空一行！！！

[1]:URL

```markdown
[markdown百度百科][1]

[1]:https://baike.baidu.com/item/markdown/3245829?fr=aladdin
```

**效果：**

[markdown百度百科](https://baike.baidu.com/item/markdown/3245829?fr=aladdin)

## 插入图片

**插入超链接形式**

**语法:**

```markdown
![随意](https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg '二哈')
```

**效果：**

![2](https://i.loli.net/2021/02/17/2upCrVZg8fHtXB4.jpg)

**插入本地图片**

待续。。。我觉得不重要。

## 引用文字

**单层引用**

**语法：**

```markdown
> 内容
```

**效果：**

> 内容

**多层引用**

**语法：**

```markdown
> 内容
>> 内容
>>> 内容
```

**效果：**

> 内容
>> 内容
>>> 内容

## 列表

**单级无序列表**

**语法：**

```markdown
* 示例
- 示例
+ 示例
```

注意：示例前面有空格。

**效果:**

- 示例
- 示例
- 示例

推荐使用  '-'

**多级无序列表**

**语法：**

```markdown
* 示例
	- 示例
		+ 示例
```

注意：示例前面有空格。

**效果：**

- 示例
    - 示例
        - 示例

**单级有序列表**

**语法：**

```markdown
1. 示例
2. 示例
3. 示例
```

注意：示例前面有空格。

**效果**

1. 示例
2. 示例
3. 示例

**多级有序列表**

**语法：**

```markdown
1. 示例
	1. 示例
		1. 示例
```

注意：示例前面有空格。

**效果：**

1. 示例
    1. 示例
        1. 示例

## 表格

**语法:**

```markdown
|姓名|年龄|性别|
|:-|:-:|-:|
|李一|7|男|
|王二|18|男|
```

第一行表头
第二行设置对齐格式，:-左对齐，:-：居中，-：右对齐。

|姓名|年龄|性别|
|:-|:-:|-:|
|李一|7|男|
|王二|18|男|
## 待办清单

**格式:**    *+空格+[空格]+待办事项

**语法：**

```markdown
* [x] 待办清单1
* [ ] 待办清单2
* [ ] 待办清单3
```

**效果：**

- [x]  待办清单1
- [ ]  待办清单2
- [ ]  待办清单3

## 绘图

参考这个：[如何在Markdown中画流程图](https://www.jianshu.com/p/b421cc723da5)

## 数学公式

**行内嵌**

**格式：**$ 数学公式 $

**语法：**

```markdown
内嵌数学公式$\sum_{i=1}^{10}f(i)\,\,\text{thanks}$
```

**效果：**

内嵌数学公式$\sum_{i=1}^{10}f(i)\,\,\text{thanks}$

**独立块状公式**

**格式：**$$ 数学公式 $$

**语法：**

```markdown
$$
\sum_{i=1}^{10}f(i)\,\,\text{thanks}
$$
```

**效果：**

$$
\sum_{i=1}^{10}f(i)\,\,\text{thanks}
$$

更多公式使用参考：[Cmd Markdown 公式指导手册](https://www.cnblogs.com/nickchen121/p/11746655.html)