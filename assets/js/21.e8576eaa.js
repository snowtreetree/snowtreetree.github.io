(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{367:function(a,s,t){"use strict";t.r(s);var e=t(43),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[a._v("#")]),a._v(" 容器")]),a._v(" "),t("h2",{attrs:{id:"容器使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器使用"}},[a._v("#")]),a._v(" 容器使用")]),a._v(" "),t("h4",{attrs:{id:"拉取基础镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取基础镜像"}},[a._v("#")]),a._v(" 拉取基础镜像")]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("docker pull ubuntu")]),a._v("载入ubbuntu。"),t("code",[a._v("docker images")]),a._v("可以查看到本地所有的镜像。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("REPOSITORY                TAG                 IMAGE ID            CREATED             SIZE\nnode                      "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.4")]),a._v("                 386940f92d24        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" years ago         673MB\nubuntu                    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("15.10")]),a._v("               9b9cb95443b5        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" years ago         137MB\n")])])]),t("h4",{attrs:{id:"创建容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[a._v("#")]),a._v(" 创建容器")]),a._v(" "),t("p",[a._v("可以直接直接使用Ubuntu镜像直接启动一个容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -it --name customName ubuntu /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --name customName 可以不设置采用默认，customName为自定义容器名称")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -i 交互操作")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -t 终端")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 退出终端，直接执行exit即可")]),a._v("\n")])])]),t("h4",{attrs:{id:"启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[a._v("#")]),a._v(" 启动容器")]),a._v(" "),t("p",[a._v("查看所有容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker ps 查看已启动的容器")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("CONTAINER ID        IMAGE               COMMAND                   CREATED             STATUS                        PORTS                    NAMES\n770204f3b42f        ubuntu              "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),a._v(" minutes ago      Up "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" minutes                                          upbeat_tesla\nc2333b6f98a6        ubuntu              "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("39")]),a._v(" minutes ago      Up "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("39")]),a._v(" minutes                                          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n924edcea4120        hello-world         "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/hello"')]),a._v("                  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" months ago       Exited "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" months ago                               magical_boyd\n")])])]),t("p",[a._v("通知容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker stop 770204f3b42f\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对应镜像ID即可")]),a._v("\n")])])]),t("p",[a._v("启动已停止的容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker start 770204f3b42f\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对应镜像ID即可")]),a._v("\n")])])]),t("p",[a._v("重启容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker restart 770204f3b42f\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对应镜像ID即可")]),a._v("\n")])])]),t("p",[a._v("后台运行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -itd --name back-test ubuntu /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -d 不进入容器，要进入需使用")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用docker exec 进入")]),a._v("\n")])])]),t("p",[a._v("进入容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it 770204f3b42f /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对应镜像ID即可")]),a._v("\n")])])]),t("h2",{attrs:{id:"导出和导入容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出和导入容器"}},[a._v("#")]),a._v(" 导出和导入容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 导出容器")]),a._v("\n$ docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" 770204f3b42f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" test.tar\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 导入容器")]),a._v("\n$ car test.tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" - test/test:v1\n")])])]),t("h2",{attrs:{id:"删除容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" 删除容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f 770204f3b42f\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);