(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{382:function(a,t,e){"use strict";e.r(t);var v=e(42),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),e("h2",{attrs:{id:"缓存类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存类型"}},[a._v("#")]),a._v(" 缓存类型")]),a._v(" "),e("p",[a._v("浏览器中的缓存分为两种情况，一种是需要发送 HTTP 请求，一种是不需要发送请求（缓存一般是针对 GET 请求）。")]),a._v(" "),e("p",[a._v("缓存又分为"),e("code",[a._v("私有缓存")]),a._v("、"),e("code",[a._v("公有缓存")]),a._v("（cache-control）。")]),a._v(" "),e("h2",{attrs:{id:"私有缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#私有缓存"}},[a._v("#")]),a._v(" 私有缓存")]),a._v(" "),e("h3",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),e("p",[a._v("不需要发送请求。对应字段 Expires(HTTP/1.0)，Cache-Control(HTTP/1.1)。")]),a._v(" "),e("h4",{attrs:{id:"expires（过期时间）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires（过期时间）"}},[a._v("#")]),a._v(" Expires（过期时间）")]),a._v(" "),e("p",[a._v("返回的响应头中，内容是时间节点，告诉浏览器在 xxx 时间点之前的请求，可以直接从缓存里面获取，但是服务器和客户端的时间可能不一致，导致缓存失效或者未及时更新的问题。")]),a._v(" "),e("h4",{attrs:{id:"cache-control（优先级高于-expires）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control（优先级高于-expires）"}},[a._v("#")]),a._v(" Cache-Control（优先级高于 Expires）")]),a._v(" "),e("ul",[e("li",[a._v("max-age： 过期时长，单位为秒")]),a._v(" "),e("li",[a._v("no-cache： "),e("code",[a._v("跳过当前强缓存，进入协商缓存")])]),a._v(" "),e("li",[a._v("no-store： 不缓存")]),a._v(" "),e("li",[a._v("s-maxage： 针对代理服务器的缓存时间")]),a._v(" "),e("li",[a._v("must-revalidate 缓存不过期可以继续使用，过期了则去服务器验证")]),a._v(" "),e("li",[a._v("private：私有缓存，单独用户，对应浏览器，拒绝中间人缓存，比如 CDN 和代理")]),a._v(" "),e("li",[a._v("public: 共享缓存，多个用户缓存")])]),a._v(" "),e("h3",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),e("p",[a._v("强制缓存失效后，服务器根据请求头中的 Etag 和 Last-Modified，告诉客户端是否启动缓存。")]),a._v(" "),e("h4",{attrs:{id:"last-modified-响应-if-modified-since（请求）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-响应-if-modified-since（请求）"}},[a._v("#")]),a._v(" Last-Modified(响应)/If-Modified-Since（请求）")]),a._v(" "),e("p",[a._v("最后修改时间。")]),a._v(" "),e("ul",[e("li",[a._v("已删除资源返回 404，本地缓存也将会被删除")]),a._v(" "),e("li",[a._v("如果请求头的时间小于修改时间，返回新的资源")]),a._v(" "),e("li",[a._v("否则返回 304，浏览器使用缓存")])]),a._v(" "),e("h4",{attrs:{id:"etag（响应）-if-none-match（请求）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag（响应）-if-none-match（请求）"}},[a._v("#")]),a._v(" Etag（响应）/If-None-Match（请求）")]),a._v(" "),e("p",[a._v("根据内容生成，文件唯一标识。当文件更改的内容不影响用户看到的信息，或是其他一些无关紧要的信息，比如增加了空格、注释等，Modified 信息会发生变化。")]),a._v(" "),e("ul",[e("li",[a._v("两者不一样，返回新的资源")]),a._v(" "),e("li",[a._v("否则采用缓存")])]),a._v(" "),e("h2",{attrs:{id:"缓存位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[a._v("#")]),a._v(" 缓存位置")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Service Worker(PWA 实现机制)")])]),a._v(" "),e("li",[e("p",[a._v("Memory Cache\n内存缓存。效率最快，但是存活时间较短，渲染进程结束后，内存缓存就不存在了。")])]),a._v(" "),e("li",[e("p",[a._v("Disk Cache\n存储在磁盘中的缓存，比内存缓存慢，但是存储容量和时间较长")]),a._v(" "),e("ul",[e("li",[a._v("较大文件的 JS、CSS 文件会放到磁盘，反之放到内存缓存")]),a._v(" "),e("li",[a._v("内容使用率较高的时候，文件进到磁盘")])])]),a._v(" "),e("li",[e("p",[a._v("Push Cache")]),a._v(" "),e("ul",[e("li",[a._v("推送缓存。应用较少，属于 HTTP2 相关的内容")])])])]),a._v(" "),e("h2",{attrs:{id:"缓存代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存代理"}},[a._v("#")]),a._v(" 缓存代理")]),a._v(" "),e("p",[a._v("HTTP 的服务器缓存功能主要由代理服务器来实现。")])])}),[],!1,null,null,null);t.default=_.exports}}]);