---
layout: article
titles:
  # @start locale config
  en      : &EN       About
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  关于
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  zh-Hant : &ZH_HANT  關於
  zh-TW   : *ZH_HANT
  zh-HK   : *ZH_HANT
  # @end locale config
key: page-about
---



本站为使用[Jekyll](https://jekyllcn.com/)搭建的静态网站，基于[TeXt 2](https://tianqi.name/jekyll-TeXt-theme/)主题，使用[Bootstrap](https://v3.bootcss.com/components)对部分组件进行重构。

导航页基于[webstack](https://github.com/WebStackPage/WebStackPage.github.io)，整合进TeXt 2主题。

修改记录：

2020-15-18：整合[webstack](https://github.com/WebStackPage/WebStackPage.github.io)导航页，使之与站主题兼容。现有问题：导航无法进入二级菜单

2020-15-18：修改 _scss/common/component/toc.scss, 删除字体大小项，解决侧边导航字体变小的问题。修改toc.js，在侧边导航中加入bootstrap的导航样式（nav navbar-text）。

2020-15-18：bootstrap的固定导航栏会遮蔽页面内容，目前有两种解决办法，一种是使用静态导航“.navbar-static-top”取代“.navbar-fix-top”； 另外一种是在“_layouts/page.html”   中```<div class="page__content">```添加style="margin-top:50px"，将页面整体下移到导航栏外。

2020-15-18: 对底部（_includes/footer.html）进行小部分修改，解决引入bootstrap后footer排版混乱的问题。

2020-05-17：对导航栏（_includes/header.html和 _data/navigation.yml）进行重构，支持响应式布局，支持二级菜单。

