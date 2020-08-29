(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{419:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-面试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-面试"}},[t._v("#")]),t._v(" React 面试")]),t._v(" "),e("p",[t._v("声明式、组件化，用于构建用户界面的JavaScript库。")]),t._v(" "),e("p",[t._v("声明式：告诉程序要做什么。\n命令式：告诉程序怎么去做。")]),t._v(" "),e("p",[t._v("函数式编程：关心数据的映射。\n命令式编程：关心解决问题的步骤。")]),t._v(" "),e("h2",{attrs:{id:"virtual-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),e("p",[t._v("DOM结构以虚拟的形式保存在内存中，然后通过ReactDOM等类库与真实的DOM进行同步。\n是一个节点树，将元素、属性、和内容作为对象和属性。")]),t._v(" "),e("h2",{attrs:{id:"jsx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx"}},[t._v("#")]),t._v(" JSX")]),t._v(" "),e("p",[t._v("JavaScript的语法扩展。本身还是一个表达式。React.createElement的语法糖。\n为什么使用：渲染逻辑与其他的UI逻辑内在耦合。在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。")]),t._v(" "),e("p",[t._v("内容在渲染前都被解析成了字符串，可有有效的防止跨站脚本攻击。")]),t._v(" "),e("p",[t._v("优势：")]),t._v(" "),e("ul",[e("li",[t._v("直观，声明式。")]),t._v(" "),e("li",[t._v("灵活，动态创建组件/元素。")])]),t._v(" "),e("p",[t._v("缺点：")]),t._v(" "),e("ul",[e("li",[t._v("浏览器支持，需要babel转义")])]),t._v(" "),e("h2",{attrs:{id:"setstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[t._v("#")]),t._v(" setState")]),t._v(" "),e("p",[t._v("更新state内的数据，更多场景下是异步的，参数可以是对象，也可以是函数，函数的参数为preState、props。")]),t._v(" "),e("h2",{attrs:{id:"hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),e("p",[t._v("16.8+, 可以在函数组件中使用state等特性。")]),t._v(" "),e("ul",[e("li",[t._v("只能在函数最外层定义Hook。 不可添加到判断或循环语句中。")]),t._v(" "),e("li",[t._v("只能在函数组件中使用Hook。")])]),t._v(" "),e("h3",{attrs:{id:"usestate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),e("p",[t._v("设置state属性")]),t._v(" "),e("h3",{attrs:{id:"useeffect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),e("p",[t._v("执行副作用操作，相当于"),e("code",[t._v("componenetDicMount")]),t._v("，"),e("code",[t._v("componentDidUpdate")]),t._v("，"),e("code",[t._v("componentWillUnmount")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"usecontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usecontext"}},[t._v("#")]),t._v(" useContext")]),t._v(" "),e("h3",{attrs:{id:"usereduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usereduce"}},[t._v("#")]),t._v(" useReduce")]),t._v(" "),e("h3",{attrs:{id:"usereducer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usereducer"}},[t._v("#")]),t._v(" useReducer")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reducer为处理函数，需返回计算后的state")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reducer 的参数为state和dispath的参数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'action'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"usecallback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usecallback"}},[t._v("#")]),t._v(" useCallback")]),t._v(" "),e("p",[t._v("返回一个memoized的"),e("code",[t._v("函数")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当a,b发生变化的时候，才会去重新计算。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memoizedCallback "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"usememo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usememo"}},[t._v("#")]),t._v(" useMemo")]),t._v(" "),e("p",[t._v("返回memoized的值。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memoizedValue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMemo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeExpensiveValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"useref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useref"}},[t._v("#")]),t._v(" useRef")]),t._v(" "),e("p",[t._v("useRef 返回一个可变的 ref 对象。")]),t._v(" "),e("h3",{attrs:{id:"useimperativehandle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useimperativehandle"}},[t._v("#")]),t._v(" useImperativeHandle")]),t._v(" "),e("p",[t._v("自定义暴露给父组件的实例值。")]),t._v(" "),e("h2",{attrs:{id:"class类组件和函数式组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class类组件和函数式组件"}},[t._v("#")]),t._v(" class类组件和函数式组件")]),t._v(" "),e("p",[t._v("类组件：通过Class类定义组件，可以使用生命周期、state等。\n函数组件：只接受props对象并返回一个React元素，本质上是JavaScript函数。")]),t._v(" "),e("p",[t._v("函数组件不需要实例化，性能比类组件高，但是没有生命周期和state，但是现在Hook可以弥补。")]),t._v(" "),e("h2",{attrs:{id:"避免组件重新渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免组件重新渲染"}},[t._v("#")]),t._v(" 避免组件重新渲染")]),t._v(" "),e("p",[t._v("React.memo\nPureComponent")]),t._v(" "),e("h2",{attrs:{id:"受控和非受控组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#受控和非受控组件"}},[t._v("#")]),t._v(" 受控和非受控组件")]),t._v(" "),e("p",[t._v("受控组件：React控制取值的表单输入（input、textarea、select等）元素叫做受控组件。表单元素的state放到React的状态属性中，并且通过setState更新。")]),t._v(" "),e("p",[t._v("非受控组件：状态更新不通过React，使用"),e("code",[t._v("ref")]),t._v("获取表单数据。")]),t._v(" "),e("h2",{attrs:{id:"高阶组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件"}},[t._v("#")]),t._v(" 高阶组件")]),t._v(" "),e("p",[t._v("复用组件的一种技巧。\n参数是组件，返回新组建的函数。")]),t._v(" "),e("h2",{attrs:{id:"fiber"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiber"}},[t._v("#")]),t._v(" Fiber")]),t._v(" "),e("h3",{attrs:{id:"解决的问题🤔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决的问题🤔"}},[t._v("#")]),t._v(" 解决的问题🤔")]),t._v(" "),e("p",[t._v("当加载或者更新组件树时，需要调用各个组件的生命周期函数，计算和对比Virtual DOM，最后再去更新DOM树，整个过程是同步的，整个周期可能周期较长。用户在操作页面的时候，有时会看到页面卡顿的现象。")]),t._v(" "),e("h3",{attrs:{id:"fiber处理的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fiber处理的方式"}},[t._v("#")]),t._v(" Fiber处理的方式")]),t._v(" "),e("p",[t._v("将耗时长的任务进行分片，每一片执行完成，都会将控制权交给React负责任务协调的模块，看下是否有紧急任务需要去做，没有的话就去集训更新。")]),t._v(" "),e("h3",{attrs:{id:"影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[t._v("一个任务可能还没完成，就被打断执行其他任务，继续执行的时候，之前的任务可能会重头再来。")]),t._v(" "),e("h2",{attrs:{id:"super"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#super"}},[t._v("#")]),t._v(" super")]),t._v(" "),e("p",[t._v("在class组件constructor中，调用super之前，是无法访问this的。")]),t._v(" "),e("h2",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),e("h3",{attrs:{id:"_16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16"}},[t._v("#")]),t._v(" <16")]),t._v(" "),e("h4",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),e("p",[t._v("调用构造函数，this.props绑定，初始化state。")]),t._v(" "),e("h4",{attrs:{id:"componentwillmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillmount"}},[t._v("#")]),t._v(" componentWillMount")]),t._v(" "),e("p",[t._v("渲染之前，只发生一次。")]),t._v(" "),e("h4",{attrs:{id:"componentdidmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount")]),t._v(" "),e("p",[t._v("第一次渲染之后，只在客户端。")]),t._v(" "),e("h4",{attrs:{id:"componentwillreceiveprops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillreceiveprops"}},[t._v("#")]),t._v(" componentWillReceiveProps")]),t._v(" "),e("p",[t._v("prop更新的时候，初始化render的时候不会调用。")]),t._v(" "),e("h4",{attrs:{id:"shouldcomponenetupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponenetupdate"}},[t._v("#")]),t._v(" shouldComponenetUpdate")]),t._v(" "),e("p",[t._v("prop或state更新时调用。")]),t._v(" "),e("h4",{attrs:{id:"componentwillupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillupdate"}},[t._v("#")]),t._v(" componentWillUpdate")]),t._v(" "),e("p",[t._v("更新之前。")]),t._v(" "),e("h4",{attrs:{id:"componentdidupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate")]),t._v(" "),e("p",[t._v("更新之后。")]),t._v(" "),e("h4",{attrs:{id:"componentwillunmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount")]),t._v(" "),e("p",[t._v("组件移出。")]),t._v(" "),e("h4",{attrs:{id:"getderivedstatefromerror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromerror"}},[t._v("#")]),t._v(" getDerivedStateFromError")]),t._v(" "),e("h4",{attrs:{id:"componentdidcatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidcatch"}},[t._v("#")]),t._v(" componentDidCatch")]),t._v(" "),e("h3",{attrs:{id:"_16-3-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-3-生命周期"}},[t._v("#")]),t._v(" 16.3+ 生命周期")]),t._v(" "),e("p",[t._v("新增了一些生命周期，并弱化了componentWillReceiveProps，componentWillMount，componentWillUpdate（均为render之前）。")]),t._v(" "),e("h4",{attrs:{id:"挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),e("h5",{attrs:{id:"constructor-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor-2"}},[t._v("#")]),t._v(" constructor()")]),t._v(" "),e("p",[t._v("调用构造函数，this.props绑定，初始化state。")]),t._v(" "),e("h5",{attrs:{id:"getderivedstatefromprops-nextprops-prevstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops-nextprops-prevstate"}},[t._v("#")]),t._v(" getDerivedStateFromProps(nextProps, prevState)")]),t._v(" "),e("p",[t._v("用来取代之前的ComponentWillReceiveProps。需要返回新对象，更新state人，返回为null则不更新，undefined则会报错，其他也会触发更新。")]),t._v(" "),e("h5",{attrs:{id:"render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render()")]),t._v(" "),e("p",[t._v("必要函数，返回元素/数组/Protals/字符串/数值/null/boolean")]),t._v(" "),e("h5",{attrs:{id:"componentdidmount-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount-2"}},[t._v("#")]),t._v(" componentDidMount()")]),t._v(" "),e("p",[t._v("组件挂载完毕")]),t._v(" "),e("h4",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("h5",{attrs:{id:"getderivedstatefromprops-nextprops-prevstate-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops-nextprops-prevstate-2"}},[t._v("#")]),t._v(" getDerivedStateFromProps(nextProps, prevState)")]),t._v(" "),e("h5",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" shouldComponentUpdate(nextProps,nextState)")]),t._v(" "),e("p",[t._v("是否需要更新")]),t._v(" "),e("h5",{attrs:{id:"render-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render-2"}},[t._v("#")]),t._v(" render")]),t._v(" "),e("h5",{attrs:{id:"getsnapshotbeforeupdate-prevprops-prevstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate-prevprops-prevstate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate(prevProps,prevState)")]),t._v(" "),e("p",[t._v("render 之后执行，执行的时候DOM还未更新。\n返回的参数会作为componentDidUpdate 的第三个参数。")]),t._v(" "),e("h5",{attrs:{id:"componentdidupdate-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate-2"}},[t._v("#")]),t._v(" componentDidUpdate()")]),t._v(" "),e("h2",{attrs:{id:"错误边界-错误处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误边界-错误处理"}},[t._v("#")]),t._v(" 错误边界/错误处理")]),t._v(" "),e("p",[t._v("class 组件中定义 componentDidCatch或static getDerivedStateFromError。")]),t._v(" "),e("h2",{attrs:{id:"条件渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染"}},[t._v("#")]),t._v(" 条件渲染")]),t._v(" "),e("p",[t._v("if/&&/三目运算")]),t._v(" "),e("h2",{attrs:{id:"react-lazy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-lazy"}},[t._v("#")]),t._v(" React.lazy")]),t._v(" "),e("p",[t._v("代码分割。使用到Suspense/lazy API。")]),t._v(" "),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("共享状态，避免层层传递数据。")]),t._v(" "),e("ul",[e("li",[t._v("React.createContext 创建context对象")]),t._v(" "),e("li",[t._v("Context.Provider 向下级组件提供新的状态")]),t._v(" "),e("li",[t._v("Context.consumer 订阅状态")]),t._v(" "),e("li",[t._v("Class.contextType 将context放到class组件的this.context上")])]),t._v(" "),e("h2",{attrs:{id:"portal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#portal"}},[t._v("#")]),t._v(" portal")]),t._v(" "),e("p",[t._v("传送门，将子节点渲染到父节点之外的元素上。")]),t._v(" "),e("h2",{attrs:{id:"ref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),e("p",[t._v("父组件修改或触发子组件状态的更改。")]),t._v(" "),e("ul",[e("li",[t._v("React.createRef 创建ref")]),t._v(" "),e("li",[t._v("React.forwardRef 转发ref")])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5cf0733de51d4510803ce34e",target:"_blank",rel:"noopener noreferrer"}},[t._v("你要的 React 面试知识点，都在这了"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.zhihu.com/question/28292740/answer/40336090",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是函数式编程思维？- 知乎"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/38030418",target:"_blank",rel:"noopener noreferrer"}},[t._v("React v16.3之后的组件生命周期函数"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);