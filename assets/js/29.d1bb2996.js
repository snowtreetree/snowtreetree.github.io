(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{374:function(t,v,_){"use strict";_.r(v);var a=_(42),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"互联网模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#互联网模型"}},[t._v("#")]),t._v(" 互联网模型")]),t._v(" "),_("h2",{attrs:{id:"osi模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#osi模型"}},[t._v("#")]),t._v(" OSI模型")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("开放式系统互联模型(Open System Interconnection Model，缩写：OSI；简称为OSI模型)。")]),t._v(" "),_("p",[t._v("第七层为最靠近用户的一层。")])]),t._v(" "),_("p",[t._v("以发送请求为例。")]),t._v(" "),_("h4",{attrs:{id:"构建请求行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建请求行"}},[t._v("#")]),t._v(" 构建请求行")]),t._v(" "),_("h4",{attrs:{id:"查找强缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查找强缓存"}},[t._v("#")]),t._v(" 查找强缓存")]),t._v(" "),_("h4",{attrs:{id:"dns解析-基于udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns解析-基于udp"}},[t._v("#")]),t._v(" DNS解析(基于UDP)")]),t._v(" "),_("p",[t._v("查询路径：本地缓存，本地域名服务器，根域名服务器，顶级域名服务器，权威域名服务器"),_("br"),t._v("\n查询方式：迭代查询/递归查询")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/blog/http/DomainName.html#域名解析"}},[t._v("域名解析")])],1),t._v(" "),_("h4",{attrs:{id:"第七层-应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第七层-应用层"}},[t._v("#")]),t._v(" 第七层 应用层")]),t._v(" "),_("p",[t._v("规定数据格式，应用发送HTTP请求。")]),t._v(" "),_("h4",{attrs:{id:"第六层-表达层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第六层-表达层"}},[t._v("#")]),t._v(" 第六层 表达层")]),t._v(" "),_("h4",{attrs:{id:"第五层-会话层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第五层-会话层"}},[t._v("#")]),t._v(" 第五层 会话层")]),t._v(" "),_("p",[t._v("SSL")]),t._v(" "),_("h4",{attrs:{id:"第四层-传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第四层-传输层"}},[t._v("#")]),t._v(" 第四层 传输层")]),t._v(" "),_("p",[t._v("TCP属于这一层。主要用于建立端口与端口之间的联系。")]),t._v(" "),_("p",[t._v("HTTP发送的报文，经过TCP切割成"),_("code",[t._v("段")]),t._v("的小数据块，然后封装到IP分组中。\n每个IP分组都包含了：")]),t._v(" "),_("ul",[_("li",[t._v("IP分组首部：包含了源、目的地的IP地址，长度和其他标记")]),t._v(" "),_("li",[t._v("TCP首部：包含端口号，TCP控制标记等信息")]),t._v(" "),_("li",[t._v("TCP数据块")])]),t._v(" "),_("p",[t._v("TCP是通过四个值来确保数据传输、到达的准确性：")]),t._v(" "),_("p",[_("code",[t._v("源IP、源端口、目的地IP、目的地端口")])]),t._v(" "),_("p",[t._v("建立连接前，会进行三次握手。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("ACK（Acknowledge character）确认字符。\nSYN 同步序列编号（Synchronize Sequence Numbers），是TCP/IP建立连接时使用的握手信号。\nFIN表示关闭连接。")]),t._v(" "),_("p",[t._v("三次握手：确认双方的收、发数据的能力正常。")]),t._v(" "),_("ul",[_("li",[t._v("客户端发送网络包，服务端接收。服务端知道了客户端的发送能力正常。  发送了SYN，端口等信息，进入到SYN_SEND状态。")]),t._v(" "),_("li",[t._v("服务端发送网络包，客户端接收。客户端知道服务端的接收、发送能力正常。 发送了ACK+SYN信息，进入到SYN_RCVD状态。")]),t._v(" "),_("li",[t._v("客户端发送网络包，服务端接收。服务端确认客户端的接收和发送能力正常。  握手完成，双方进入到ESTABLISHED状态。")])]),t._v(" "),_("p",[t._v("四次挥手：任何一方都可以发送")]),t._v(" "),_("ul",[_("li",[t._v("A发出主动关闭的通知（不再发送数据，只能接收）")]),t._v(" "),_("li",[t._v("B关闭接收通道")]),t._v(" "),_("li",[t._v("B发送没数据发送的通知")]),t._v(" "),_("li",[t._v("A收到讯息，关闭")])])]),t._v(" "),_("h4",{attrs:{id:"第三层-网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三层-网络层"}},[t._v("#")]),t._v(" 第三层 网络层")]),t._v(" "),_("p",[t._v("IP协议属于这一层。")]),t._v(" "),_("p",[t._v("链路层以广播的方式发送数据，效率较低，如果两台设备不在同一网络，那接收方是收不到任何讯息的。网络层定义了设备的网络地址，网络地址+MAC地址，能够更好的找到数据的接收方。")]),t._v(" "),_("h4",{attrs:{id:"第二层-数据链路层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二层-数据链路层"}},[t._v("#")]),t._v(" 第二层 数据链路层")]),t._v(" "),_("p",[t._v("确定信号（0和1组成）的分组方式。"),_("br"),t._v("\n一组电信号构成一个数据包（帧），每个数据包分成两个部分，标头和数据，标头对请求进行描述，发送方，接收方，数据类型等，数据就是发送的具体内容。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("标头中的发送方接收方的信息，是通过网卡获取。")]),t._v(" "),_("p",[t._v("入网设备，都有网卡的接口，数据是从一个网卡到另一个网卡，网卡的地址就是数据发送和接收的地址，这个就是MAC地址。")]),t._v(" "),_("p",[t._v("有了MAC地址，然后通过广播的方式，向本网络的设备发送数据，由其他设备判断自己是接收方，效率可想而知。")])]),t._v(" "),_("h4",{attrs:{id:"第一层-物理层（实体层）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一层-物理层（实体层）"}},[t._v("#")]),t._v(" 第一层 物理层（实体层）")]),t._v(" "),_("p",[t._v("硬件相关设施，电压，线缆，网卡等。")])])}),[],!1,null,null,null);v.default=s.exports}}]);