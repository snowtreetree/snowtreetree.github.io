(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{372:function(t,v,_){"use strict";_.r(v);var a=_(42),l=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"重绘和回流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流"}},[t._v("#")]),t._v(" 重绘和回流")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("浏览器渲染过程")]),t._v(" "),_("ul",[_("li",[t._v("处理HTML标记，构建DOM树")]),t._v(" "),_("li",[t._v("处理CSS标记，构建CSSOM树")]),t._v(" "),_("li",[t._v("将DOM和CSSDOM合并成渲染树")]),t._v(" "),_("li",[t._v("根据渲染树完成布局，并计算每个节点的集合信息")]),t._v(" "),_("li",[t._v("将节点绘制到屏幕上")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png?hl=zh-cn",alt:"过程"}})]),t._v(" "),_("h2",{attrs:{id:"重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[t._v("#")]),t._v(" 重绘")]),t._v(" "),_("p",[t._v("页面元素样式改变，并不影响在文本中的位置，浏览器将样式赋予元素，并重新绘制，这个过程称为重绘，例如visibility，color，bgcolor,outline 等。")]),t._v(" "),_("h2",{attrs:{id:"回流（reflow）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流（reflow）"}},[t._v("#")]),t._v(" 回流（reflow）")]),t._v(" "),_("p",[t._v("前面我们通过构造渲染树，我们将可见DOM节点以及它对应的样式结合起来，可是我们还需要计算它们在设备视口(viewport)内的确切位置和大小，这个计算的阶段就是回流。")]),t._v(" "),_("ul",[_("li",[t._v("页面初次渲染")]),t._v(" "),_("li",[t._v("改变font-size，font-family")]),t._v(" "),_("li",[t._v("改变元素内外边距")]),t._v(" "),_("li",[t._v("通过JS改变CSS样式")]),t._v(" "),_("li",[t._v("通过JS获取DOM元素的位置相关属性")]),t._v(" "),_("li",[t._v("改变窗口、文本大小")]),t._v(" "),_("li",[t._v("激活伪类")])]),t._v(" "),_("h2",{attrs:{id:"优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),_("ul",[_("li",[t._v("减少重绘和回流，或者使用重绘代替回流")]),t._v(" "),_("li",[t._v("批量修改（先脱离文档流，然后操作，再恢复）")]),t._v(" "),_("li",[t._v("css3硬件加速（transform、opacity、filters这些动画不会引起回流重绘）")]),t._v(" "),_("li",[t._v("避免使用table")]),t._v(" "),_("li",[t._v("避免使用CSS表达式")]),t._v(" "),_("li",[t._v("频繁操作样式，可以将样式一次性赋值")]),t._v(" "),_("li",[t._v("DOM缓存")])]),t._v(" "),_("h2",{attrs:{id:"应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),_("ul",[_("li",[t._v("拖拽实现，通常可以使用postition: absolute实现，可以使用transform: translate进行优化。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);