(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{371:function(t,s,a){"use strict";a.r(s);var r=a(43),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ssl-tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls"}},[t._v("#")]),t._v(" SSL/TLS")]),t._v(" "),a("p",[t._v("HTTPS是HTTP建立在SSL/TLS安全协议上的。通过SSL证书验证服务的身份，并为浏览器和服务器之间的通信进行加密。采用对称加密、非对称加密、身份认证等技术进行混合加密进行传输。属于OSI中的第五层（安全层），默认端口是443。")]),t._v(" "),a("p",[t._v("SSL（Secure Sockets Layer）：安全套接字层，TLS（Transport Layer Security）：传输安全层，前身是SSL。")]),t._v(" "),a("h2",{attrs:{id:"握手流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#握手流程"}},[t._v("#")]),t._v(" 握手流程")]),t._v(" "),a("p",[t._v("1、客户端通过URL访问服务器建立SSL连接，将协议版本号，生成一个随机数（client_random），以及支持的加密方法发送到服务器"),a("br"),t._v("\n2、服务端收到请求，确认加密算法，并生成一个serve_random，以及网站支持的证书（包含公钥等信息）发送到客户端"),a("br"),t._v("\n3、客户端收到证书后进行，得到服务端的信息及公钥，协商安全等级（信息加密的等级）。"),a("br"),t._v("\n4、验证成功后，生成一个新的随机数Premaster_secret，经过公钥加密后，发给服务器\n5、服务器收到Premaster_secret后，私钥解密\n6、后面根据约定好的加密算法，使用client_random、serve_random、Premaster_secret生成对话秘钥，进行整个对话")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("对称加密：加解密的秘钥相同\n非对称加密：公钥加密，私钥解密")])]),t._v(" "),a("h2",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),a("h3",{attrs:{id:"http中存在问题（https解决的问题）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http中存在问题（https解决的问题）"}},[t._v("#")]),t._v(" HTTP中存在问题（HTTPS解决的问题）")]),t._v(" "),a("ul",[a("li",[t._v("请求明文，容易被截取窃听")]),t._v(" "),a("li",[t._v("数据完整性未校验，容易被篡改")]),t._v(" "),a("li",[t._v("没有验证对方身份，存在冒充风险")])]),t._v(" "),a("h3",{attrs:{id:"https的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https的缺点"}},[t._v("#")]),t._v(" HTTPS的缺点")]),t._v(" "),a("ul",[a("li",[t._v("多次握手，耗时")]),t._v(" "),a("li",[t._v("SSL证书需要花钱")]),t._v(" "),a("li",[t._v("涉及的安全算法消耗CPU资源")])]),t._v(" "),a("h2",{attrs:{id:"数字签名和证书（？）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字签名和证书（？）"}},[t._v("#")]),t._v(" 数字签名和证书（？）")]),t._v(" "),a("h3",{attrs:{id:"摘要算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要算法"}},[t._v("#")]),t._v(" 摘要算法")]),t._v(" "),a("p",[t._v("用来保证数据的完整性。通过MD5、SHA-2等算法，对信息进行加密，然后跟着原文发送到服务器，服务器使用相同的算法，对原文进行摘要计算，判断得到的信息是否和传输过来的摘要信息一致，从而判断消息是否被修改过。")]),t._v(" "),a("h3",{attrs:{id:"数字签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字签名"}},[t._v("#")]),t._v(" 数字签名")]),t._v(" "),a("p",[t._v("使用私钥进行加密，公钥进行解密，实现身份的认证。")])])}),[],!1,null,null,null);s.default=e.exports}}]);