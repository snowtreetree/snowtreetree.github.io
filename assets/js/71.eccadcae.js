(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{415:function(t,e,a){"use strict";a.r(e);var r=a(42),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("h2",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("h3",{attrs:{id:"单页面应用（spa）-多页面应用（mpa）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单页面应用（spa）-多页面应用（mpa）"}},[t._v("#")]),t._v(" 单页面应用（SPA）& 多页面应用（MPA）")]),t._v(" "),a("h4",{attrs:{id:"是什么🤔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是什么🤔"}},[t._v("#")]),t._v(" 是什么🤔")]),t._v(" "),a("p",[t._v("Single-Page-Application。只有一个主页面的应用，HTML文件只需要加载一次，用户执行操作或在应用的各区域间导航时，无需重新加载页面。")]),t._v(" "),a("p",[t._v("Multiple page application。应用中有多个页面，页面跳转会刷新页面。")]),t._v(" "),a("h5",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("无需加载整个页面，用户体验好，页面切换快。")]),t._v(" "),a("li",[t._v("服务器压力减小")]),t._v(" "),a("li",[t._v("前后端分离，前端更关注交互，后端更关注数据")])]),t._v(" "),a("h5",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("不利于SEO(Search Engine Optimization)")]),t._v(" "),a("li",[t._v("首屏加载时间较长。 webpack vendor，gzip压缩，路由、图片懒加载，使用雪碧图，增加首屏loading。")])]),t._v(" "),a("h3",{attrs:{id:"单向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流"}},[t._v("#")]),t._v(" 单向数据流")]),t._v(" "),a("p",[t._v("父级prop的更新会向下流动到子组件，反过来不行。")]),t._v(" "),a("h4",{attrs:{id:"通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通信方式"}},[t._v("#")]),t._v(" 通信方式")]),t._v(" "),a("ul",[a("li",[t._v("$emit、props")]),t._v(" "),a("li",[t._v("$ref、$parent/$children")]),t._v(" "),a("li",[t._v("provide、inject")]),t._v(" "),a("li",[t._v("Eventbus：Vue 原型方法on/once/off/emit")]),t._v(" "),a("li",[t._v("attrs/listeners 适用于隔代组件通信")]),t._v(" "),a("li",[t._v("scopedSlots 子组件传值到父组件 "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("作用域插槽"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"v-bind-vs-v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind-vs-v-model"}},[t._v("#")]),t._v(" v-bind Vs v-model")]),t._v(" "),a("h5",{attrs:{id:"v-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-bind"}},[t._v("#")]),t._v(" v-bind")]),t._v(" "),a("p",[t._v("更多的是绑定数据和属性以及表达式。")]),t._v(" "),a("h5",{attrs:{id:"v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),a("p",[t._v("主要使用在表单及自定义组件中。")]),t._v(" "),a("p",[t._v("本质上是语法糖。绑定v-model的表单元素，会忽略元素的value、checked、selected初始值，而是以Vue实例的数据作为数据来源。\nv-model内部为不同的表单元素使用不同的property，并抛出不同的事件。")]),t._v(" "),a("ul",[a("li",[t._v("text和textarea使用value和input事件。")]),t._v(" "),a("li",[t._v("checkbox和radio使用checked的change事件。")]),t._v(" "),a("li",[t._v("select使用value和change事件。")])]),t._v(" "),a("h4",{attrs:{id:"v-show-vs-v-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show-vs-v-if"}},[t._v("#")]),t._v(" v-show Vs v-if")]),t._v(" "),a("p",[t._v("v-show 是CSS状态的切换，v-if是完整的销毁和重新创建。频繁切换的使用v-show。")]),t._v(" "),a("h4",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),a("p",[t._v("Vue.js 应用程序开发的状态管理模式。使用单一的状态树，一个对象包含全部的应用层级状态。")]),t._v(" "),a("p",[t._v("特点：")]),t._v(" "),a("ul",[a("li",[t._v("状态存储是响应式的。")]),t._v(" "),a("li",[t._v("不能直接改变store里面的装填，需要提交mutation。")])]),t._v(" "),a("p",[t._v("模块：")]),t._v(" "),a("ul",[a("li",[t._v("state，定义应用状态的数据结构。可通过mapState或store.state直接访问")]),t._v(" "),a("li",[t._v("getter，state的派生状态，和计算属性类似，会将返回值根据它的依赖缓存起来， 可通过mapGetters 、store.getters访问。")]),t._v(" "),a("li",[t._v("Mutatuon，更改store状态的唯一方式。mapMutations。")]),t._v(" "),a("li",[t._v("Action， 提交mutation，执行异步操作。")]),t._v(" "),a("li",[t._v("Module，将store分割成模块，每个模块都有自己的state，mutation，action等。namespaced: true，注册成为带命名空间的木块。它的getter、action、mutation等，都会自动根据模块注册的路径调整命名空间。")])]),t._v(" "),a("h4",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" Vue Router")]),t._v(" "),a("h5",{attrs:{id:"模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[t._v("#")]),t._v(" 模式")]),t._v(" "),a("ul",[a("li",[t._v("hash，使用URL hash值来做路由。监听"),a("code",[t._v("hashchange")]),t._v("事件。路由中带有#。")]),t._v(" "),a("li",[t._v("history，依赖H5 History API和服务器配置。history pushState，replaceState方法。")]),t._v(" "),a("li",[t._v("abstract，支持所有JavaScript运行环境。")])]),t._v(" "),a("h4",{attrs:{id:"proxy-vs-obejct-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-vs-obejct-defineproperty"}},[t._v("#")]),t._v(" Proxy Vs Obejct.defineProperty")]),t._v(" "),a("h5",{attrs:{id:"proxy-优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-优势"}},[t._v("#")]),t._v(" Proxy 优势")]),t._v(" "),a("ul",[a("li",[t._v("可直接监听对象而非属性")]),t._v(" "),a("li",[t._v("可以直接监听数组变化")]),t._v(" "),a("li",[t._v("拦截方法丰富")]),t._v(" "),a("li",[t._v("Proxy返回的是个新对象，可以只操作新对象达到目的，Object.defineProperty只能遍历对象属性进行修改。")])]),t._v(" "),a("h5",{attrs:{id:"proxy-劣势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-劣势"}},[t._v("#")]),t._v(" Proxy 劣势")]),t._v(" "),a("ul",[a("li",[t._v("不支持IE9")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/architecture/modern-web-apps-azure/choose-between-traditional-web-and-single-page-apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("在传统 Web 应用和单页应用 (SPA) 之间选择"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d59f2a451882549be53b170#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("30 道 Vue 面试题"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d548b83f265da03ab42471d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 项目性能优化 — 实践指南"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d421bcf6fb9a06af23853f1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 核心之数据双向绑定"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://medium.com/@keshidong.dev/%E5%85%B3%E4%BA%8Espa%E7%9A%84seo%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88-2639a63361ad",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于SPA的SEO解决方案"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);