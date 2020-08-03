(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{420:function(t,a,e){"use strict";e.r(a);var r=e(42),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-v3-to-v4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-v3-to-v4"}},[t._v("#")]),t._v(" Webpack V3 To V4")]),t._v(" "),e("h2",{attrs:{id:"升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级"}},[t._v("#")]),t._v(" 升级")]),t._v(" "),e("h3",{attrs:{id:"entry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[t._v("#")]),t._v(" entry")]),t._v(" "),e("h3",{attrs:{id:"webpack-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-cli"}},[t._v("#")]),t._v(" webpack cli")]),t._v(" "),e("p",[t._v("使用Webpack cli指令，需单独安装。")]),t._v(" "),e("h3",{attrs:{id:"mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[t._v("#")]),t._v(" mode")]),t._v(" "),e("h4",{attrs:{id:"production"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#production"}},[t._v("#")]),t._v(" production")]),t._v(" "),e("ul",[e("li",[t._v("默认提供尽可能多的优化，比如代码压缩/作用域提升等。")]),t._v(" "),e("li",[t._v("不支持watching")]),t._v(" "),e("li",[t._v("process.env.NODE_ENV 不需要再定义，默认是production")])]),t._v(" "),e("h4",{attrs:{id:"development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" development")]),t._v(" "),e("ul",[e("li",[t._v("优化了增量构建速度和开发体验。")]),t._v(" "),e("li",[t._v("process.env.NODE_ENV 不需要再定义，默认是development")])]),t._v(" "),e("h3",{attrs:{id:"import-动态导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-动态导入"}},[t._v("#")]),t._v(" import 动态导入")]),t._v(" "),e("h3",{attrs:{id:"常用依赖升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用依赖升级"}},[t._v("#")]),t._v(" 常用依赖升级")]),t._v(" "),e("ul",[e("li",[t._v("html-webpack-plugin")]),t._v(" "),e("li",[t._v("extract-text-webpack-plugin => mini-css-extract-plugin")])]),t._v(" "),e("h3",{attrs:{id:"optimization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optimization"}},[t._v("#")]),t._v(" optimization")]),t._v(" "),e("h4",{attrs:{id:"公共代码提取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公共代码提取"}},[t._v("#")]),t._v(" 公共代码提取")]),t._v(" "),e("p",[t._v("CommonsChunkPlugin 替换成optimization.splitChunks")]),t._v(" "),e("p",[t._v("自动分割条件")]),t._v(" "),e("ul",[e("li",[t._v("新代码块可以被共享引用，或者是node_modoules下的依赖包")]),t._v(" "),e("li",[t._v("新代码块大于30kb")]),t._v(" "),e("li",[t._v("按需加载的代码块，并行请求最大数小于等于6")]),t._v(" "),e("li",[t._v("初始加载的代码块，并行请求数小于等于4")])]),t._v(" "),e("h4",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("ul",[e("li",[t._v("minimize 默认使用 terser-webpack-plugin 压缩代码，可自定义。")]),t._v(" "),e("li",[t._v("splitChunks")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用文档"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"增加内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加内容"}},[t._v("#")]),t._v(" 增加内容")]),t._v(" "),e("h3",{attrs:{id:"依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),e("ul",[e("li",[t._v("speed-measure-webpack-plugin")])]),t._v(" "),e("p",[t._v("测定插件和loader花费时间。")]),t._v(" "),e("ul",[e("li",[t._v("hard-source-webpack-plugin")])]),t._v(" "),e("p",[t._v("为模块提供中间缓存，首次构建可能时间会有增加，后续配置、依赖相关没有更改，会直接采用缓存。")]),t._v(" "),e("p",[t._v("常用设置：maxAge、cacheDirectory、configHash、environmentHash。")])])}),[],!1,null,null,null);a.default=s.exports}}]);