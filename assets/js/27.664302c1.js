(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{373:function(t,a,v){"use strict";v.r(a);var _=v(43),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),v("h2",{attrs:{id:"是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#是什么？"}},[t._v("#")]),t._v(" 是什么？")]),t._v(" "),v("p",[t._v("超文本传输协议，Hyper Text Transfer Protocol。从服务器传输超文本标记语言（HTML）到本地浏览器的协议。在服务器和客户端之前传输文本、音频、图片等内容的约定和规范。")]),t._v(" "),v("ul",[v("li",[t._v("超文本 超越普通文本。文本、图片、音频、视频等内容。")]),t._v(" "),v("li",[t._v("传输 将内容/数据从一方传到另一方。说明HTTP是双向的协议，双方数据的传输过程，可能经过多个中间人（其中就包含了安全认证，数据压缩，编码转换）。不能用于广播、寻址。")]),t._v(" "),v("li",[t._v("协议 双方/多方之间的一个约定，在HTTP中，规定了计算机之间的通信规范，以及各种控制和错误处理方式。")])]),t._v(" "),v("h2",{attrs:{id:"原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),v("p",[t._v("HTTP需要与其他协议协作（不是单独存在的），一个基于 TCP/IP 通信协议来传递数据的协议，可传输数据包括HTML文件、图片、音频等，属于应用层，一般用不B/S架构。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("应用层还有其他协议："),v("br"),t._v("\nFTP：文件传输协议，用来在客户机和FTP服务器之间的传输数据（用来在两台计算机之间传输文件）"),v("br"),t._v("\nDNS域名系统：域名到IP之间的解析服务"),v("br"),t._v("\nSMTP：邮件发送协议"),v("br"),t._v("\nPOP3：邮件接收协议"),v("br"),t._v("\nDHCP：动态主机配置协议")])]),t._v(" "),v("h2",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("请求 - 应答")]),t._v(" 支持客户端/服务端模式，也是一种请求/响应模式的协议。")]),t._v(" "),v("li",[v("code",[t._v("简单快速")]),t._v(" 发送请求时，只需传输请求方法和路径就可以，常见方法GET、POST、OPTIONS、HEAD")]),t._v(" "),v("li",[v("code",[t._v("灵活可拓展")]),t._v(" 允许传输多种类型的数据，例如文本、图片、音频等，传输类型通过Content-Type标记")]),t._v(" "),v("li",[v("code",[t._v("无状态")]),t._v(" 每次请求不保存之前发送请求的状态，每次都是独立的")]),t._v(" "),v("li",[v("code",[t._v("可靠传输")]),t._v(" 依赖于TCP/IP 协议，确保传输数据的完整性。")]),t._v(" "),v("li",[v("code",[t._v("持久连接")]),t._v(" 需要配置Connection: keep-alive(HTTP/1.1默认开启)。建立一次TCP请求，可多次请求/响应。出现原因，每进行一次HTTP请求，都会进行一次TCP连接，连接和开销较大，耗时。")])]),t._v(" "),v("h2",{attrs:{id:"优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),v("ul",[v("li",[t._v("简单、灵活、易拓展")]),t._v(" "),v("li",[t._v("应用广泛、环境成熟")]),t._v(" "),v("li",[t._v("无状态，服务器不用记录状态信息，减轻服务器压力。")])]),t._v(" "),v("h2",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),v("ul",[v("li",[t._v("明文传输。使用文本，非二进制数据")]),t._v(" "),v("li",[t._v("无法验证报文完整性。内容可能被篡改")]),t._v(" "),v("li",[t._v("不验证通信方的身份，可能会被伪造")]),t._v(" "),v("li",[t._v("无状态")]),t._v(" "),v("li",[t._v("队头阻塞")])]),t._v(" "),v("h2",{attrs:{id:"请求方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),v("ul",[v("li",[t._v("GET：获取资源，幂等操作")]),t._v(" "),v("li",[t._v("HEAD：获取报文首部，类似于GET，但是不返回报文主体，幂等操作")]),t._v(" "),v("li",[t._v("POST：更新/创建资源，非幂等操作")]),t._v(" "),v("li",[t._v("PUT：更新/创建资源，幂等操作")]),t._v(" "),v("li",[t._v("PATCH： 内容局部更新，幂等操作")]),t._v(" "),v("li",[t._v("DELETE：删除资源/数据，幂等操作")]),t._v(" "),v("li",[t._v("OPTIONS：插叙服务器支持的方法，是否跨域，幂等操作")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("幂等，多次操作，返回的结果是一致的。\nPUT")])]),t._v(" "),v("h3",{attrs:{id:"get、post区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get、post区别"}},[t._v("#")]),t._v(" GET、POST区别")]),t._v(" "),v("ul",[v("li",[t._v("GET会被浏览器缓存下来，POST不会")]),t._v(" "),v("li",[t._v("GET只能进行URL编码，只能接收ASCII字符，POST没限制")]),t._v(" "),v("li",[t._v("GET参数方法哦URL上，POST放到请求里")]),t._v(" "),v("li",[t._v("幂等性")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("URL和URI的区别\nURI：Uniform Resource Identifier 统一资源标识符"),v("br"),t._v("\nURL：Uniform Resource Location 统一资源定位符\nURI 是用来标示 一个具体的资源的，我们可以通过 URI 知道一个资源是什么。")]),t._v(" "),v("p",[t._v("URL 则是用来定位具体的资源的，标示了一个具体的资源位置。互联网上的每个文件都有一个唯一的URL。")]),t._v(" "),v("p",[t._v("URN 统一资源名，是URI的另一种形式。特定内容的唯一名称，与资源位置无关。仍处于研发阶段。")])]),t._v(" "),v("h2",{attrs:{id:"报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文"}},[t._v("#")]),t._v(" 报文")]),t._v(" "),v("h3",{attrs:{id:"请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[t._v("#")]),t._v(" 请求")]),t._v(" "),v("ul",[v("li",[t._v("请求行"),v("br"),t._v("\n请求行包括，请求方法、URL、协议/版本")]),t._v(" "),v("li",[t._v("请求头\n"),v("ul",[v("li",[t._v("connective:")]),t._v(" "),v("li",[t._v("Origin:")]),t._v(" "),v("li",[t._v("User-Agent:")]),t._v(" "),v("li",[t._v("Accept-Encoding:\n...")])])]),t._v(" "),v("li",[t._v("请求正文")])]),t._v(" "),v("h3",{attrs:{id:"响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),v("ul",[v("li",[t._v("响应行"),v("br"),t._v("\n响应行包括，协议/版本，响应状态")]),t._v(" "),v("li",[t._v("响应头\n"),v("ul",[v("li",[t._v("Date:")]),t._v(" "),v("li",[t._v("Set-Cookie:")]),t._v(" "),v("li",[t._v("Cache-Control:")]),t._v(" "),v("li",[t._v("Expires:")]),t._v(" "),v("li",[t._v("Etag:")]),t._v(" "),v("li",[t._v("Last-Modified:")])])]),t._v(" "),v("li",[t._v("响应正文")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("\nSet"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("b"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Max"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Age"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Expires"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Domain"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("path"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("HttpOnly"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("SameSite"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Strict\n")])])]),v("p",[t._v("Expires（绝对时间点），Max-Age（单位是秒）用来设置cookie的过期时间，Max-Age优先级更高。")]),t._v(" "),v("p",[v("code",[t._v("Domain")]),t._v("和"),v("code",[t._v("Path")]),t._v("指定了 Cookie 所属的域名和路径")]),t._v(" "),v("p",[v("code",[t._v("HttpOnly")]),t._v(" 设置了不同通过document.cookie操作cookie信息。")]),t._v(" "),v("p",[v("code",[t._v("SameSite")]),t._v("可以防范"),v("code",[t._v("跨站请求伪造")]),t._v("（XSRF）攻击，设置成"),v("code",[t._v("SameSite=Strict")]),t._v("可以严格限定 Cookie 不能随着跳转链接跨站发送，而"),v("code",[t._v("SameSite=Lax")]),t._v("则略宽松一点，允许 GET/HEAD 等安全方法，但禁止 POST 跨站发送")])]),t._v(" "),v("h3",{attrs:{id:"状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),v("h4",{attrs:{id:"_1xx，请求已收到，需进一步处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx，请求已收到，需进一步处理"}},[t._v("#")]),t._v(" 1xx，请求已收到，需进一步处理")]),t._v(" "),v("h4",{attrs:{id:"_2xx，成功状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx，成功状态"}},[t._v("#")]),t._v(" 2xx，成功状态")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- 200 OK，成功返回，带有响应体\n- 204 No Content，成功返回，不带实体\n")])])]),v("h4",{attrs:{id:"_3xx，重定向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx，重定向"}},[t._v("#")]),t._v(" 3xx，重定向")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- 301，永久重定向，浏览器缓存，下次访问，直接跳转到定向地址\n- 302，临时重定向，不缓存\n- 303，临时重定向，但是表示应该用GET\n- 304，缓存相关\n")])])]),v("h4",{attrs:{id:"_4xx，请求错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx，请求错误"}},[t._v("#")]),t._v(" 4xx，请求错误")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- 400，请求报文语法错误\n- 401，需要有通过HTTP认证的认证信息或者表示用户认证失败\n- 403，请求被拒绝\n- 404，请求资源未找到\n")])])]),v("h4",{attrs:{id:"_5xx，服务端错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx，服务端错误"}},[t._v("#")]),t._v(" 5xx，服务端错误")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- 500，服务器内部错误\n- 501，客户端请求，服务器不支持\n- 502，服务器正常，代理服务器无法获取合法响应\n- 503 ，服务器超负荷，或停机维护\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);