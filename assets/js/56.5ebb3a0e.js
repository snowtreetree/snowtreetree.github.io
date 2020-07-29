(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{399:function(t,n,s){"use strict";s.r(n);var a=s(42),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" NGINX")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("高性能反向代理服务器。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("正向代理：客户端的，客户端到服务器之间做了一层代理，服务器并不知道自己受到的请求是代理的还是真实的访问。（比如SSR）")])]),t._v(" "),s("li",[s("p",[t._v("反向代理：服务端的，客户端的请求发送到服务器之后，服务器将请求转发到其他服务器或其他操作。")])])])]),t._v(" "),s("h2",{attrs:{id:"常见配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见配置"}},[t._v("#")]),t._v(" 常见配置")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nginx.conf中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件处理模块")]),t._v("\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// worker_connections 工作进程的最大连接数")]),t._v("\n    worker_connections "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  http可以嵌套多个server服务，配置代理，缓存，请求/报错日志等")]),t._v("\nhttp \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启gzip")]),t._v("\n    gzip on;\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启压缩的最低HTTP版本")]),t._v("\n    gzip_http_version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(";\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 压缩级别 1-9")]),t._v("\n    gzip_comp_level "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(";\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 压缩文件")]),t._v("\n    gzip_types text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml;\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虚拟主机的相关参数")]),t._v("\n    server\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听端口，SSL为443")]),t._v("\n        listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 日志")]),t._v("\n        access_log /home/logs/nginx/buzhifangxue.access.log;\n        error_log /home/logs/nginx/buzhifangxue.error.log;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 域名信息")]),t._v("\n        server_name buzhifangxue.com;\n        root html;\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置请求路由")]),t._v("\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置HTML文件")]),t._v("\n          root /www/buzhi;\n          index index.html;\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   响应头信息")]),t._v("\n          add_header Cache-Control no-cache;\n          try_files $uri $uri/ /index.html;\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n        location ~* /api/\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置接口的转发")]),t._v("\n            proxy_set_header X-Forwarded-For $remote_addr;\n            proxy_pass http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bapi-dev.ankerjiedian.com;")]),t._v("\n            add_header Access-Control-Allow-Credentials "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(";\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    server\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似于上述配置")]),t._v("\n        ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置目录")]),t._v("\n    include /etc/nginx/sites-available"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*;\n}\n")])])])]),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查配置")]),t._v("\nnginx -t \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重启")]),t._v("\nnginx -s reload\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭")]),t._v("\nnginx -s stop\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);