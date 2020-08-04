(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{388:function(v,_,t){"use strict";t.r(_);var a=t(42),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[v._v("#")]),v._v(" 协议")]),v._v(" "),t("h2",{attrs:{id:"tcp-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip"}},[v._v("#")]),v._v(" TCP/IP")]),v._v(" "),t("p",[v._v("TCP/IP协议实际上是一系列网络通信协议的统称，其中TCP、IP是最核心的两个协议，其他的协议还有UDP、ICMP、ARP等，共同构成了一个复杂但是分工明确的协议栈。"),t("br"),v._v("\n这个协议"),t("a",{attrs:{href:"'./layer.html'"}},[v._v("有四层")]),v._v("，应用层（HTTP）、传输层（TCP/UDP）、网络层（IP）、链路层（MAC）。")]),v._v(" "),t("h3",{attrs:{id:"协议相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协议相关"}},[v._v("#")]),v._v(" 协议相关")]),v._v(" "),t("ol",[t("li",[v._v("IP（Internet Protocol）协议，主要是用来解决寻址和路由的问题，以及如何在两点之间如何传输数据包。")])]),v._v(" "),t("p",[v._v("IP协议使用"),t("strong",[v._v("IP地址")]),v._v("来定位互联网中的每一台设备。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v('现在使用的IP协议版本大多数是IPv4，例如"192.168.0.1"，总共有2^32个，大约42亿个地址，现在又出现了IPv6，总共有2^128个地址。')])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("TCP（Transmission Control Protocol），传输控制协议。位于IP协议之上，基于IP协议提供"),t("strong",[v._v("可靠、字节流")]),v._v("形式的通信，是HTTP协议得以实现的基础。TCP协议两端可以如同操作文件一样访问传输的数据，就像在读取密闭管道里的流动字节。")])]),v._v(" "),t("ul",[t("li",[v._v("可靠是保证数据不丢失。")]),v._v(" "),t("li",[v._v("字节流是保证数据的完整性。")])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("HTTP协议是传输协议，不关心寻址、路由、数据完整性等传输细节，这些工作都是交给网络中的TCP/IP来处理。")])]),v._v(" "),t("h2",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[v._v("#")]),v._v(" DNS")]),v._v(" "),t("p",[v._v("在TCP/IP协议中，使用IP地址来标识设备，数字形式的地址对于计算机来说非常方便，但是对于人而言就不是那么方便。"),t("br"),v._v("\nDNS（Domain Name System）系统就是为了解决这个问题。用有意义的名字来代替IP地址。在DNS中，"),t("strong",[v._v("域名")]),v._v("（Domain Name）又称为"),t("strong",[v._v("主机名")]),v._v("（Host）。"),t("br"),v._v('\n域名使用"."分割成多个单词，级别从左到右逐渐升高，最右边称为顶级域名，比如'),t("em",[v._v("com")]),v._v("，"),t("em",[v._v("cn")]),v._v("，"),t("em",[v._v("deu")]),v._v("，"),t("em",[v._v("gov")]),v._v("等。")]),v._v(" "),t("p",[v._v("想要通过域名访问网站，必须要将域名转换到对应的IP地址，这就是域名解析。")]),v._v(" "),t("h2",{attrs:{id:"uri-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uri-url"}},[v._v("#")]),v._v(" URI/URL")]),v._v(" "),t("p",[v._v("通过域名和IP地址，只是能够确保我们能够找到服务器，但是服务器上还有很多资源，服务器不知道接收到的请求具体想访问那一个资源。")]),v._v(" "),t("p",[v._v("URI（Uniform Resource Identity），统一资源标识符，就是用来标记互联网上的资源。")]),v._v(" "),t("p",[v._v("URL（Uniform Resource Location），统一资源定位符，是URI的常用表现形式。URL通常由三部分组成，协议名称、主机名、路径。")]),v._v(" "),t("ul",[t("li",[v._v("协议名，访问当前资源使用的协议，比如"),t("em",[v._v("HTTP")]),v._v("，"),t("em",[v._v("HTTPS")]),v._v("。")]),v._v(" "),t("li",[v._v("主机名，可以是域名或者IP地址。")]),v._v(" "),t("li",[v._v("路径，资源在主机上的位置。")])]),v._v(" "),t("h2",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[v._v("#")]),v._v(" HTTPS")]),v._v(" "),t("p",[v._v("运行在 "),t("a",{attrs:{href:"'./SSL&TLS.html'"}},[v._v("SSL/TLS")]),v._v(" 上的HTTP。SSL/TLS，负责"),t("code",[v._v("加密通信的安全协议")]),v._v("。")]),v._v(" "),t("p",[v._v("SSL（Secure Socket Layer），网景公司发明，发展到3.0时被标准化，改名为TLS（Transport Layer Security）。")]),v._v(" "),t("h2",{attrs:{id:"代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[v._v("#")]),v._v(" 代理")]),v._v(" "),t("p",[v._v("代理是HTTP协议中，请求/应答中的一个环节，作为中转站。可以转发客户端的请求，也可以转发服务端的响应（既是web服务器，又是web客户端）。代理服务器需要用Via标明代理的身份。")]),v._v(" "),t("p",[v._v('"Via: proxy1,proxy2"，表示请求/响应，先经过了proxy1的代理，然后经过proxy2的代理，到了接收方。')]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[v._v("via: http/1.1 xxx.com, http/1.1 yyy.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 协议/版本号 节点名 节点注释（可选）")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# HTTP协议的时候可以省略，其他（HTTPS、FTP等）不能省略")]),v._v("\n")])])]),t("p",[v._v("通过TRACE请求，可以跟踪代理链传输的请求报文。\nMax-Forward，设置最多的转发次数，为0时，接收者会直接返回TRACE报文。")]),v._v(" "),t("h3",{attrs:{id:"_1、常见代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、常见代理"}},[v._v("#")]),v._v(" 1、常见代理")]),v._v(" "),t("ul",[t("li",[v._v("匿名代理，完全隐匿被代理的服务器，外界看到的只是代理服务器。")]),v._v(" "),t("li",[v._v("透明代理，传输过程中透明开放，外界知道代理，也知道客户端。")]),v._v(" "),t("li",[v._v("正向代理，靠近客户端，代表客户端向服务器发起请求（VPN）")]),v._v(" "),t("li",[v._v("反向代理，靠近服务器，代表服务器想客户端发起请求（NGINX配置跨域）")])]),v._v(" "),t("h3",{attrs:{id:"_2、代理作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、代理作用"}},[v._v("#")]),v._v(" 2、代理作用")]),v._v(" "),t("ul",[t("li",[v._v("负载均衡，把访问均匀的分散到多台机器，实现访问集群化。")]),v._v(" "),t("li",[v._v("内容缓存，CDN相关")]),v._v(" "),t("li",[v._v("安全防护，隐藏IP，使用WAF（？）等地域网络攻击，以及过载")]),v._v(" "),t("li",[v._v("数据处理，拦截数据，进行压缩、加密，或是按照一定策略修改请求和响应。")]),v._v(" "),t("li",[v._v("健康检查，某个后端服务器出现问题的时候，及时踢出集群。")]),v._v(" "),t("li",[v._v("过滤网站，限制内网请求等。")]),v._v(" "),t("li",[v._v("转码器，修改响应数据柱体等。GIF --\x3e JPG，文本压缩。")])]),v._v(" "),t("h3",{attrs:{id:"_3、如何设置代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、如何设置代理"}},[v._v("#")]),v._v(" 3、如何设置代理")]),v._v(" "),t("ul",[t("li",[v._v("修改客户端，浏览器设置代理。")]),v._v(" "),t("li",[v._v("修改网络，路由器或其他中间设备进行代理。")]),v._v(" "),t("li",[v._v("修改DNS，手动配置host。")]),v._v(" "),t("li",[v._v("修改服务器，重定向。")])]),v._v(" "),t("h2",{attrs:{id:"网关（？）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网关（？）"}},[v._v("#")]),v._v(" 网关（？）")]),v._v(" "),t("p",[t("code",[v._v("代理")]),v._v("连接的是两个或多个使用相同协议的应用程序。网关连接的则是两个或多个"),t("code",[v._v("使用不同协议的端点")]),v._v("，"),t("code",[v._v("网关")]),v._v("扮演了协议转换的角色。又称协议转换器。")])])}),[],!1,null,null,null);_.default=s.exports}}]);