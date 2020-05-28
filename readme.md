

readme

本站为使用[Jekyll](https://jekyllcn.com/)搭建的静态网站，基于[TeXt 2](https://tianqi.name/jekyll-TeXt-theme/)主题，使用[Bootstrap](https://v3.bootcss.com/components)对部分组件进行重构。

导航页基于[webstack](https://github.com/WebStackPage/WebStackPage.github.io)，整合进TeXt 2主题。

修改记录：
2020-05-28: 使用bootstrap重构导航页侧边栏。
2020-05-27: 升级bootstrap到4.4.1 并重构导航页解决排版问题。去除xenon依赖。
2020-05-18：修改 _scss/common/component/toc.scss, 删除字体大小项，解决侧边导航字体变小的问题。修改toc.js，在侧边导航中加入bootstrap的导航样式（nav navbar-text）。

2020-05-18：bootstrap的固定导航栏会遮蔽页面内容，目前有两种解决办法，一种是使用静态导航“.navbar-static-top”取代“.navbar-fix-top”； 另外一种是在“_layouts/page.html”   中```<div class="page__content">```添加style="margin-top:50px"，将页面整体下移到导航栏外。

2020-05-18: 对底部（_includes/footer.html）进行小部分修改，解决引入bootstrap后footer排版混乱的问题。

2020-05-17：对导航栏（_includes/header.html和 _data/navigation.yml）部分进行重构，支持响应式布局，支持二级菜单。