(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{381:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-body"}},[t._v("#")]),t._v(" HTTP - body")]),t._v(" "),s("h2",{attrs:{id:"数据类型与编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型与编码"}},[t._v("#")]),t._v(" 数据类型与编码")]),t._v(" "),s("p",[t._v("TCP/IP 协议中，传输的数据基本上是 header+body 的形式传输。但是 TCP 或者 UDP 并不关心传输的数据是什么，只负责数据发送到接收方。")]),t._v(" "),s("p",[t._v("HTTP 协议则不同，他还要告诉上层应用是什么数据，比如浏览器中发起请求，浏览器要知道数据的格式才能去处理。")]),t._v(" "),s("p",[t._v("在 HTTP 协议中，使用 MIME type 来标记 body 中的数据类型。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("MIME（Multipurpose Internet Mail Extensions）,"),s("code",[t._v("多用途互联网邮件拓展")]),t._v("，刚开始是用在邮件中的。")])]),t._v(" "),s("h2",{attrs:{id:"http-中常遇到的类别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-中常遇到的类别"}},[t._v("#")]),t._v(" HTTP 中常遇到的类别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("text，文本格式的可读数据。text/html，text/css，text、plain 纯文本。。。")])]),t._v(" "),s("li",[s("p",[t._v("image，图像文件。image/gif，image/jpeg。。。")])]),t._v(" "),s("li",[s("p",[t._v("audio/video，音频。audio/mpeg，video/mp4。。。")])]),t._v(" "),s("li",[s("p",[t._v("application，数据格式不固定。application/json，application/JavaScript，application/pdf 等。")])])]),t._v(" "),s("p",[t._v("除了 MIME，文件在传输的时候，还会对文件进行压缩，Encoding type 用来描述编码格式。")]),t._v(" "),s("ul",[s("li",[t._v("gzip，GNU zip 压缩格式。")]),t._v(" "),s("li",[t._v("deflate，zlib 压缩格式。")]),t._v(" "),s("li",[t._v("br，专门为 HTTP 优化的新压缩算法（Brotli）")])]),t._v(" "),s("h2",{attrs:{id:"数据类型使用的头字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型使用的头字段"}},[t._v("#")]),t._v(" 数据类型使用的头字段")]),t._v(" "),s("p",[t._v("在客户端中，使用 Accept 头告诉服务器自己能够处理的数据类型和压缩方式。Accept，Accept-Encoding。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("png\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" br\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\n")])])]),s("h2",{attrs:{id:"语言类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语言类型"}},[t._v("#")]),t._v(" 语言类型")]),t._v(" "),s("p",[t._v("每个国家或者地区，使用的语言不同，为了让浏览器能够正常处理不同的语言，HTTP 采用了和数据类型类似的方案，引入了语言类型和字符集。")]),t._v(" "),s("ul",[s("li",[t._v("语言类型就是人们使用的自然语言，比如 en-US，zh-CN")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ja"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// q标识权重优先级，最大为1，最小为0.01，默认为1，设为0表示拒绝。可设置到Accept、Accept-Language、Accept-Encoding中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  zh-CN,zh 权重为 1，en 为 0.9，ja 为 0.8，任意 Accept-Language 为 0.7。")]),t._v("\n")])])]),s("ul",[s("li",[t._v("字符集，是一些符号类别的内容，每个地区使用的也有些差别，出现过 ASCII、GBK 等，后来出现了 Unicode 和 UTF-8，把所有的语言都归纳到一种方案里。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gbk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);