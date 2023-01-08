---
slug: docusaurus-blog
title: Docusaurus Blog
authors: [luckyduck]
tags: [docusaurus]
---

Docusaurus [博客功能](https://docusaurus.io/docs/blog) 由 [博客插件](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) 提供支持。

只需将Markdown文件（或文件夹）添加到 `blog` 目录。

博客作者列表可以添加到 `authors.yml` 。

博客文章标题下方的日期是从文件名中提取的，例如：

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

则该页博客会被认为是在 `2019-05-30` 这个时间写的。

博客文章文件夹可以方便地共同定位博客文章图像：

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

博客也支持标签！

**如果你不想要博客一栏**: 删除 `blog` 目录, 并在你的Docusaurus配置文件使用 `blog: false`。
