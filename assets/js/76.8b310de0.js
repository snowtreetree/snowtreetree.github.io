(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{420:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue3-相关知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3-相关知识点"}},[t._v("#")]),t._v(" Vue3 相关知识点")]),t._v(" "),s("h2",{attrs:{id:"新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新特性"}},[t._v("#")]),t._v(" 新特性")]),t._v(" "),s("h3",{attrs:{id:"性能提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能提升"}},[t._v("#")]),t._v(" 性能提升")]),t._v(" "),s("h3",{attrs:{id:"tree-shaking-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking-support"}},[t._v("#")]),t._v(" Tree shaking support")]),t._v(" "),s("p",[t._v("无用模块剪辑，只打包需要的内容。\n比如"),s("code",[t._v("v-model")]),t._v(", "),s("code",[t._v("<transition>")]),t._v(" 等")]),t._v(" "),s("h3",{attrs:{id:"composition-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[t._v("#")]),t._v(" Composition API")]),t._v(" "),s("p",[t._v("和React Hook类似。")]),t._v(" "),s("h3",{attrs:{id:"fragment-teleport-suspense"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fragment-teleport-suspense"}},[t._v("#")]),t._v(" Fragment, Teleport, Suspense")]),t._v(" "),s("p",[t._v("Fragment, 模板不再只限制一个根节点。\nrender 函数也可以返回数组。\nTeleport 传送门。常用于modal，popup等。\nSuspense 悬念。")]),t._v(" "),s("h3",{attrs:{id:"typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" Typescript")]),t._v(" "),s("p",[t._v("更好的TS支持。")]),t._v(" "),s("h3",{attrs:{id:"custom-render-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-render-api"}},[t._v("#")]),t._v(" Custom Render API")]),t._v(" "),s("h2",{attrs:{id:"composition-api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composition-api-2"}},[t._v("#")]),t._v(" Composition  API")]),t._v(" "),s("ul",[s("li",[t._v("可以通过逻辑关系组织代码")]),t._v(" "),s("li",[t._v("灵活的逻辑组合和复用")]),t._v(" "),s("li",[t._v("可以和现有的"),s("code",[t._v("Options API")]),t._v(" 一起使用")])]),t._v(" "),s("h3",{attrs:{id:"与mixin比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与mixin比较"}},[t._v("#")]),t._v(" 与mixin比较")]),t._v(" "),s("ul",[s("li",[t._v("模板prototype来源清晰，使用多个mixin模板时，很难直接看出prototype来自哪一个mixin。")]),t._v(" "),s("li",[t._v("命名空间冲突，组合式API可以通过解构赋值，mixin可能会存在覆盖的情况。")]),t._v(" "),s("li",[t._v("使用mixin，需要创建无渲染的组件实例，组合式API则不会，减少性能损耗。")])]),t._v(" "),s("h3",{attrs:{id:"和react-hook相比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和react-hook相比"}},[t._v("#")]),t._v(" 和React Hook相比")]),t._v(" "),s("ul",[s("li",[t._v("不用顾虑调用顺序，可以使用在条件语句中。")]),t._v(" "),s("li",[t._v("不会在每次渲染的时候重复执行，降低垃圾回收压力。")]),t._v(" "),s("li",[t._v("不会在内联处理函数导致子组件更新的问题")]),t._v(" "),s("li",[t._v("自动记录依赖。watchEffect。")])]),t._v(" "),s("h2",{attrs:{id:"常用api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用api"}},[t._v("#")]),t._v(" 常用API")]),t._v(" "),s("h3",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" setup")]),t._v(" "),s("p",[t._v("Composition API的入口，会在beforeCreate之前调用。")]),t._v(" "),s("h4",{attrs:{id:"params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" params")]),t._v(" "),s("ul",[s("li",[t._v("props, 响应式，"),s("code",[t._v("不可解构")]),t._v("，会导致失去响应式。")]),t._v(" "),s("li",[t._v("context, 包含了attrs, slots, emit等。")])]),t._v(" "),s("h3",{attrs:{id:"reactive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reactive"}},[t._v("#")]),t._v(" reactive")]),t._v(" "),s("p",[t._v("接收普通对象，返回改对象的响应式代理。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),s("p",[t._v("接收一个参数值，并返回一个响应式可改变的ref对象。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\ncount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),s("h3",{attrs:{id:"reactive-vs-ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reactive-vs-ref"}},[t._v("#")]),t._v(" reactive VS ref")]),t._v(" "),s("p",[t._v("使用reactive的组合函数，为了保证响应式，对应的对象不能够解构。使用toRefs解决此约束。")]),t._v(" "),s("h3",{attrs:{id:"computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),s("p",[t._v("计算属性，传入一个getter函数，返回一个默认不可手动修改的ref对象。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plusOne "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nplusOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),s("h3",{attrs:{id:"readonly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readonly"}},[t._v("#")]),t._v(" readonly")]),t._v(" "),s("p",[t._v("和reactive类似，但是返回的对象只读。")]),t._v(" "),s("h3",{attrs:{id:"watcheffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watcheffect"}},[t._v("#")]),t._v(" watchEffect")]),t._v(" "),s("p",[t._v("传入一个函数，响应式追踪。第一次是在mounted之前的生命周期执行，如果需要访问DOM，可以放到onMounted钩子中执行。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"停止监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止监听"}},[t._v("#")]),t._v(" 停止监听")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),s("h4",{attrs:{id:"相对于watcheffect："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对于watcheffect："}},[t._v("#")]),t._v(" 相对于watchEffect：")]),t._v(" "),s("ul",[s("li",[t._v("懒执行")]),t._v(" "),s("li",[t._v("可自定义监听源")]),t._v(" "),s("li",[t._v("可访问监听状态前后变化的值")])]),t._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("h3",{attrs:{id:"对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),s("ul",[s("li",[t._v("beforeCreate => setup()")]),t._v(" "),s("li",[t._v("created => setup()")]),t._v(" "),s("li",[t._v("beforeMount => onBeforeMount")]),t._v(" "),s("li",[t._v("mounted => onMounted")]),t._v(" "),s("li",[t._v("beforeUpdate => onBeforeUpdate")]),t._v(" "),s("li",[t._v("updated => onUpdated")]),t._v(" "),s("li",[t._v("beforeDestory => onBeforeUnmount")]),t._v(" "),s("li",[t._v("destroyed => onUnMounted")]),t._v(" "),s("li",[t._v("errorCaptured => onErrorCaptured")])]),t._v(" "),s("h3",{attrs:{id:"生命周期事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期事件"}},[t._v("#")]),t._v(" 生命周期事件")]),t._v(" "),s("p",[t._v("beforeCreate: vue实例的挂载元素el和数据对象的data都没初始化。\ncreated: vue 实例的数据对象已经有了，el还没有。\nbeforeMount: 挂载元素el和数据对象data都有了，挂载之前还是虚拟dom节点。\nmounted: Vue实例已经挂载到真实DOM上，可通过dom操作获取DOM节点。\nbeforeUpdate: 响应式数据更新时调用，发生在虚拟DOM打补丁之前，可以在此事件中移除DOM事件监听。\nupdated: 虚拟DOM重新渲染和打补丁之后调用。\nbeforeDestroy: 实例销毁之前调用，通过this还能访问到实例，可以清除定时器，解绑事件等。\ndestroyed: 实例销毁后调用，调用后所有事件监听被移除。子实例也会被销毁。")]),t._v(" "),s("h2",{attrs:{id:"依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[t._v("#")]),t._v(" 依赖注入")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5e9f6b3251882573a855cd52",target:"_blank",rel:"noopener noreferrer"}},[t._v("抄笔记：尤雨溪在Vue3.0 Beta直播里聊到了这些…"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5e9ce011f265da47b8450c11",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3 究竟好在哪里？（和 React Hook 的详细对比）"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://composition-api.vuejs.org/zh/#%E5%8A%A8%E6%9C%BA%E4%B8%8E%E7%9B%AE%E7%9A%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Composition API"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://composition-api.vuejs.org/zh/api.html#setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Composition API List"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://medium.com/@patelvivek2530/teleport-vue-3s-new-feature-a887fe05fd87",target:"_blank",rel:"noopener noreferrer"}},[s("Teleport"),t._v(" Vue 3’s new feature"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vueschool.io/articles/vuejs-tutorials/suspense-new-feature-in-vue-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("suspense"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeImports%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue next template explorer"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);