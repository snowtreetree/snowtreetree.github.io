(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{216:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"xss-和-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-和-csrf"}},[t._v("#")]),t._v(" XSS 和 CSRF")]),t._v(" "),a("h2",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("p",[t._v("Cross-Site Scripting，跨站脚本攻击，一种代码注入攻击。常见的就是在论坛发帖中，发布一段 JavaScript 代码，如果代码内容有请求外部服务器或者在其他用户的浏览器上执行，从而获取用的敏感信息，Cookie，sessionID 等信息，就称为 XSS。")]),t._v(" "),a("h3",{attrs:{id:"常见注入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见注入方式"}},[t._v("#")]),t._v(" 常见注入方式")]),t._v(" "),a("ul",[a("li",[t._v("在 HTML 中内嵌的文本中，恶意内容以 script 标签注入")]),t._v(" "),a("li",[t._v('在 style 中，包含类似 url("javascript:xxx")的可执行代码')]),t._v(" "),a("li",[t._v("在标签的 href、src 属性中，加入 javascript: 等可执行代码")]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("h3",{attrs:{id:"xss-攻击分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击分类"}},[t._v("#")]),t._v(" XSS 攻击分类")]),t._v(" "),a("h4",{attrs:{id:"存储型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),a("p",[t._v("恶意代码在数据里面")]),t._v(" "),a("ul",[a("li",[t._v("攻击者将代码提交到目标网站数据库")]),t._v(" "),a("li",[t._v("用户打开目标网站，网站服务端将恶意代码从数据库中取出，传输到用户浏览器")]),t._v(" "),a("li",[t._v("用户浏览器解析执行，恶意代码也会执行")]),t._v(" "),a("li",[t._v("恶意代码将用户数据发送到攻击者网站，或者冒充用户的行为，执行某些操作")])]),t._v(" "),a("h4",{attrs:{id:"反射型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),a("p",[t._v("恶意代码在 URL 里面，比如有些 redirect_to 跳转参数。或者 redirect_to=javascript:alert('XSS')")]),t._v(" "),a("ul",[a("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码或行为")]),t._v(" "),a("li",[t._v("用户打开恶意代码，浏览器解析执行")]),t._v(" "),a("li",[t._v("恶意代码将用户数据发送到攻击者网站，或者冒充用户的行为，执行某些操作")])]),t._v(" "),a("h4",{attrs:{id:"dom-型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-型"}},[t._v("#")]),t._v(" DOM 型")]),t._v(" "),a("ul",[a("li",[t._v("攻击者构造出特殊的 URL，其中包含恶意代码。")]),t._v(" "),a("li",[t._v("用户打开带有恶意代码的 URL。")]),t._v(" "),a("li",[t._v("用户浏览器接收到响应后解析执行，前端 JavaScript - 取出 URL 中的恶意代码并执行。")]),t._v(" "),a("li",[t._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充- 用户的行为，调用目标网站接口执行攻击者指定的操作。")])]),t._v(" "),a("p",[t._v("DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞")]),t._v(" "),a("h3",{attrs:{id:"预防-xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防-xss"}},[t._v("#")]),t._v(" 预防 XSS")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("纯前端渲染")]),t._v(" "),a("ul",[a("li",[t._v("浏览器选加载一个静态 HTML，HTML 中不包含业务数据")]),t._v(" "),a("li",[t._v("执行 HTML 中的 JavaScript")]),t._v(" "),a("li",[t._v("通过 Ajax 加载业务数据，调用 DOM API 进行更新页面")])])]),t._v(" "),a("li",[a("p",[t._v("HTML 转义")])]),t._v(" "),a("li",[a("p",[t._v("预防 DOM 型攻击")]),t._v(" "),a("ul",[a("li",[t._v("减少使用 v-html/dangerouslySetInnerHTML、innerHTML、outerHTML、document.write 功能")])])]),t._v(" "),a("li",[a("p",[t._v("CSP")]),t._v(" "),a("ul",[a("li",[t._v("禁止加载外域代码")]),t._v(" "),a("li",[t._v("禁止外域提交，避免数据泄露")]),t._v(" "),a("li",[t._v("禁止内联脚本执行")]),t._v(" "),a("li",[t._v("禁止未授权脚本执行")])])]),t._v(" "),a("li",[a("p",[t._v("Http-only Cookie ，禁止通过 JavaScript 代码获取 Cookie 信息")])])]),t._v(" "),a("h2",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("p",[t._v("Cross-site request forgery，跨站伪造请求。是一种冒充用户发送请求的。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("常见类型 - GET 类型")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://bank.example/withdraw?amount=10000&for=hacker"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("POST 类型，自动提交一个表单")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://bank.example/withdraw"')]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hidden"')]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account"')]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoming"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hidden"')]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amount"')]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10000"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hidden"')]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"for"')]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hacker"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("其他网站，增加可点击连接，跳转到目标网站")])])]),t._v(" "),a("h3",{attrs:{id:"预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[t._v("#")]),t._v(" 预防")]),t._v(" "),a("ul",[a("li",[t._v("验证码")]),t._v(" "),a("li",[t._v("同源检测，Origin Header，Refer Header")]),t._v(" "),a("li",[t._v("Token，服务器随机生成，每次提交时带上token信息")]),t._v(" "),a("li",[t._v("Samesite\n"),a("ul",[a("li",[t._v("Strict，a.com中发起对b.com的请求，不会带上cookie信息")]),t._v(" "),a("li",[t._v("Lax，当在a.com页面中改变了页面地址或者新开了页面到b.com，可以带上cookie信息")])])])]),t._v(" "),a("h2",{attrs:{id:"两者区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者区别"}},[t._v("#")]),t._v(" 两者区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("CSRF：用户需要先登录，取获取 Cookie。XSS：不需要登录")])]),t._v(" "),a("li",[a("p",[t._v("CSRF 利用网站 A 的漏洞去请求 A 网站的 API。XSS：注入代码到 A 网站，执行 JavaScript 代码，篡改内容")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);