(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{386:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"分层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分层"}},[t._v("#")]),t._v(" 分层")]),t._v(" "),e("h2",{attrs:{id:"物理层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),e("h2",{attrs:{id:"tcp-ip-分层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-分层"}},[t._v("#")]),t._v(" TCP/IP 分层")]),t._v(" "),e("p",[t._v("TCP/IP 协议，分为四层，应用层（HTTP）、传输层（TCP/UDP）、网络层（IP）、链路层（MAC）。每层负责的内容各部相同，但是每个层级之前的沟通/交流，要确保符合规范，这样就可以实现，无论在哪个层级内部有调整，只要保证传输到其他层级的数据格式是正确的就可以。")]),t._v(" "),e("h3",{attrs:{id:"链接层（link-layer）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链接层（link-layer）"}},[t._v("#")]),t._v(" 链接层（Link Layer）")]),t._v(" "),e("p",[t._v("负责在以太网、WiFi 这样的底层网络上发送原始数据包，工作在网卡这一层，使用 MAC 地址来标记网络上的设备，有时也叫做 MAC 层。链路层在"),e("code",[t._v("物理层")]),t._v("提供服务的基础上，向网络层提供服务，最基础的服务是将来自网络层的数据可靠地传输到相邻街电的目标及网络层。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("MAC 地址，也称为局域网的地址，可以唯一标识一个网卡，同时也就表示了此网卡对应的设备。")])]),t._v(" "),e("h3",{attrs:{id:"网络层-网际层（internet-layer）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络层-网际层（internet-layer）"}},[t._v("#")]),t._v(" 网络层/网际层（Internet Layer）")]),t._v(" "),e("p",[t._v("IP 协议属于这一层，因为 IP 协议定义了 IP 地址的概念，所以就可以在链接层的基础上，用 IP 地址代替 MAC 地址，把许许多多的"),e("code",[t._v("局域网")]),t._v("、"),e("code",[t._v("广域网")]),t._v("连接成一个巨大的网络，在这个网络里找设备时，只需要把 IP 地址"),e("code",[t._v("转换")]),t._v("成 MAC 地址就可以了。")]),t._v(" "),e("h3",{attrs:{id:"传输层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),e("p",[t._v("保证数据在两个 IP 之间可靠的传输。TCP、UDP 属于这一层。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("TCP，有状态的协议，需要建立与对方的连接后才能发送数据（三次握手），而且保证数据完整、不重复。数据是"),e("code",[t._v("连续的字节流")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("UDP，无状态协议，不用建立连接即可发送数据，但是不保证能够发送成功，发送的数据是小数据包，顺序发，乱序收。")])])]),t._v(" "),e("h3",{attrs:{id:"应用层（application-layer）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用层（application-layer）"}},[t._v("#")]),t._v(" 应用层（Application Layer）")]),t._v(" "),e("p",[t._v("离用户最近的一层。常见的有 HTTP、SSH、FTP、SMTP 等。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("MAC 层的传输单位是帧（frame），IP 层的传输单位是包（packet），TCP 层的传输单位是段（segment），HTTP 的传输单位则是消息或报文（message）。但这些名词并没有什么本质的区分，可以统称为数据包。")])]),t._v(" "),e("h2",{attrs:{id:"osi-网络分层模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#osi-网络分层模型"}},[t._v("#")]),t._v(" OSI 网络分层模型")]),t._v(" "),e("p",[t._v("开放式系统互联通信参考模型（open system interconnection reference Model），总共分为七层。")]),t._v(" "),e("ol",[e("li",[t._v("应用层（application Layer）面向具体的应用 传输数据。")]),t._v(" "),e("li",[t._v("表示层（presentation Layer）把数据装换为合适、可理解的语法和语义。")]),t._v(" "),e("li",[t._v("会话层（session Layer）维护网络中的链接状态，即保持会话和同步。")]),t._v(" "),e("li",[t._v("传输层（transport Layer） 相当于 TCP/IP 中的传输层。")]),t._v(" "),e("li",[t._v("网络层（network Layer）相当于 TCP/IP 中的网络层。")]),t._v(" "),e("li",[t._v("链路层（data link Layer），相当于 TCP/IP 中的链接层")]),t._v(" "),e("li",[t._v("物理层（physical Layer），网络的物理形式，例如光纤、电缆、网卡等。")])]),t._v(" "),e("h2",{attrs:{id:"负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),e("h3",{attrs:{id:"四层负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四层负载均衡"}},[t._v("#")]),t._v(" 四层负载均衡")]),t._v(" "),e("p",[t._v("是指工作在传输层，基于 TCP/IP 协议的特性，实现对后端服务器的负载均衡。")]),t._v(" "),e("h3",{attrs:{id:"七层负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七层负载均衡"}},[t._v("#")]),t._v(" 七层负载均衡")]),t._v(" "),e("p",[t._v("是指工作在应用层上，看到的是 HTTP 协议，解析 HTTP 报文里的 URI，主机名，资源类型等数据，再用适当的策略转发给后端服务器。")])])}),[],!1,null,null,null);a.default=r.exports}}]);