(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{366:function(e,t,a){"use strict";a.r(t);var n=a(14),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-面试专题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-面试专题"}},[e._v("#")]),e._v(" Vue 面试专题")]),e._v(" "),t("h2",{attrs:{id:"简述-mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简述-mvvm"}},[e._v("#")]),e._v(" 简述 MVVM")]),e._v(" "),t("h4",{attrs:{id:"什么是-mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvvm"}},[e._v("#")]),e._v(" 什么是 MVVM？")]),e._v(" "),t("p",[e._v("视图模型双向绑定，是 Model-View-ViewModel 的缩写，也就是把 MVC 中的 Controller 演变成\nViewModel。Model 层代表数据模型，View 代表 UI 组件，ViewModel 是 View 和 Model 层的桥梁，数\n据会绑定到 viewModel 层并自动将数据渲染到页面中，视图变化的时候会通知 viewModel 层更新数\n据。以前是操作 DOM 结构更新视图，现在是数据驱动视图。")]),e._v(" "),t("p",[t("strong",[e._v("MVVM 的优点：")])]),e._v(" "),t("p",[e._v("1.低耦合。视图（View）可以独立于 Model 变化和修改，一个 Model 可以绑定到不同的 View 上，当\nView 变化的时候 Model 可以不变化，当 Model 变化的时候 View 也可以不变； 2.可重用性。你可以把一些视图逻辑放在一个 Model 里面，让很多 View 重用这段视图逻辑。 3.独立开发。开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注于页面设\n计。 4.可测试。")]),e._v(" "),t("h2",{attrs:{id:"vue-底层实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-底层实现原理"}},[e._v("#")]),e._v(" Vue 底层实现原理")]),e._v(" "),t("p",[e._v("vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的\nsetter 和 getter，在数据变动时发布消息给订阅者，触发相应的监听回调\nVue 是一个典型的 MVVM 框架，模型（Model）只是普通的 javascript 对象，修改它则试图（View）会\n自动更新。这种设计让状态管理变得非常简单而直观")]),e._v(" "),t("p",[t("strong",[e._v("Observer（数据监听器）")]),e._v(" : Observer 的核心是通过 Object.defineProprtty()来监听数据的变动，这个\n函数内部可以定义 setter 和 getter，每当数据发生变化，就会触发 setter。这时候 Observer 就要通知订\n阅者，订阅者就是 Watcher")]),e._v(" "),t("p",[t("strong",[e._v("Watcher（订阅者）")]),e._v(" : Watcher 订阅者作为 Observer 和 Compile 之间通信的桥梁，主要做的事情是：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. 在自身实例化时往属性订阅器(dep)里面添加自己\n2. 自身必须有一个update()方法\n3. 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调\n")])])]),t("p",[t("strong",[e._v("Compile（指令解析器）")]),e._v(" : Compile 主要做的事情是解析模板指令，将模板中变量替换成数据，然后初\n始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加鉴定数据的订阅者，一旦数据有变\n动，收到通知，更新试图")]),e._v(" "),t("p",[e._v("传送门："),t("a",{attrs:{href:"https://juejin.cn/post/6994959998283907102#heading-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("☞ 20 分钟吃透 Diff 算法核心原理"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"谈谈对-vue-生命周期的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对-vue-生命周期的理解"}},[e._v("#")]),e._v(" 谈谈对 vue 生命周期的理解？")]),e._v(" "),t("p",[e._v("每个 Vue 实例在创建时都会经过一系列的初始化过程，vue 的生命周期钩子，就是说在达到某一阶段或\n条件时去触发的函数，目的就是为了完成一些动作或者事件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("create阶段：vue实例被创建\\\nbeforeCreate: 最初调用触发，创建前，此时data和methods中的数据都还没有初始化，data和\nevents都不能用\\\ncreated： 创建完毕，data中有值，未挂载，data和events已经初始化好，data已经具有响应\n式；在这里可以发送请求\nmount阶段： vue实例被挂载到真实DOM节点\\\nbeforeMount：在模版编译之后，渲染之前触发，可以发起服务端请求，去数据，ssr中不可用，\n基本用不上这个hook\\\nmounted: 在渲染之后触发，此时可以操作DOM，并能访问组件中的DOM以及$ref,SSR中不可用\nupdate阶段：当vue实例里面的data数据变化时，触发组件的重新渲染\\\nbeforeUpdate :更新前，在数据变化后，模版改变前触发，切勿使用它监听数据变化\\\nupdated：更新后，在数据改变后，模版改变后触发，常用于重渲染案后的打点，性能检测或触\n发vue组件中非vue组件的更新\ndestroy阶段：vue实例被销毁\\\nbeforeDestroy：实例被销毁前，组件卸载前触发，此时可以手动销毁一些方法，可以在此时清\n理事件、计时器或者取消订阅操作\\\ndestroyed:卸载完毕后触发，销毁后，可以做最后的打点或事件触发操作\n")])])]),t("h3",{attrs:{id:"组件生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期"}},[e._v("#")]),e._v(" 组件生命周期")]),e._v(" "),t("p",[e._v("生命周期（父子组件） 父组件 beforeCreate --\x3e 父组件 created --\x3e 父组件 beforeMount --\x3e 子组件\nbeforeCreate --\x3e 子组件 created --\x3e 子组件 beforeMount --\x3e 子组件 mounted --\x3e 父组件 mounted --\x3e\n父组件 beforeUpdate --\x3e子组件 beforeDestroy--\x3e 子组件 destroyed --\x3e 父组件 updated")]),e._v(" "),t("p",[t("strong",[e._v("加载渲染过程")]),e._v(" 父 beforeCreate->父 created->父 beforeMount->子 beforeCreate->子 created->子\nbeforeMount->子 mounted->父 mounted")]),e._v(" "),t("p",[t("strong",[e._v("挂载阶段")]),e._v(" 父 created->子 created->子 mounted->父 mounted")]),e._v(" "),t("p",[t("strong",[e._v("父组件更新阶段")]),e._v(" 父 beforeUpdate->父 updated")]),e._v(" "),t("p",[t("strong",[e._v("子组件更新阶段")]),e._v(" 父 beforeUpdate->子 beforeUpdate->子 updated->父 updated")]),e._v(" "),t("p",[t("strong",[e._v("销毁阶段")]),e._v(" 父 beforeDestroy->子 beforeDestroy->子 destroyed->父 destroyed")]),e._v(" "),t("h2",{attrs:{id:"computed-与-watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#computed-与-watch"}},[e._v("#")]),e._v(" computed 与 watch")]),e._v(" "),t("p",[e._v("通俗来讲，既能用 computed 实现又可以用 watch 监听来实现的功能，推荐用 computed， 重点在于\ncomputed 的缓存功能 computed 计算属性是用来声明式的描述一个值依赖了其它的值，当所依赖的值\n或者变量 改变时，计算属性也会跟着改变； watch 监听的是已经在 data 中定义的变量，当该变量变化\n时，会触发 watch 中的方法。")]),e._v(" "),t("p",[t("strong",[e._v("watch 属性监听")]),e._v(" 是一个对象，键是需要观察的属性，值是对应回调函数，主要用来监听某些特定数据\n的变化，从而进行某些具体的业务逻辑操作,监听属性的变化，需要在数据变化时执行异步或开销较大的\n操作时使用")]),e._v(" "),t("p",[t("strong",[e._v("computed 计算属性")]),e._v(" 属性的结果会被缓存，当 computed 中的函数所依赖的属性没有发生改变的时\n候，那么调用当前函数的时候结果会从缓存中读取。除非依赖的响应式属性变化时才会重新计算，主要\n当做属性来使用 computed 中的函数必须用 return 返回最终的结果 computed 更高效，优先使用。\ndata 不改变，computed 不更新。")]),e._v(" "),t("p",[t("strong",[e._v("使用场景")]),e._v(" computed：当一个属性受多个属性影响的时候使用，例：购物车商品结算功能 watch：当\n一条数据影响多条数据的时候使用，例：搜索数据")]),e._v(" "),t("h3",{attrs:{id:"组件中的-data-为什么是一个函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件中的-data-为什么是一个函数"}},[e._v("#")]),e._v(" 组件中的 data 为什么是一个函数？")]),e._v(" "),t("h4",{attrs:{id:"_1-一个组件被复用多次的话-也就会创建多个实例。本质上-这些实例用的都是同一个构造函数。-2-如"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-一个组件被复用多次的话-也就会创建多个实例。本质上-这些实例用的都是同一个构造函数。-2-如"}},[e._v("#")]),e._v(" 1.一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。 2.如")]),e._v(" "),t("p",[e._v("果 data 是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间 data\n不冲突，data 必须是一个函数。")]),e._v(" "),t("h3",{attrs:{id:"为什么-v-for-和-v-if-不建议用在一起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么-v-for-和-v-if-不建议用在一起"}},[e._v("#")]),e._v(" 为什么 v-for 和 v-if 不建议用在一起")]),e._v(" "),t("p",[e._v("1.当 v-for 和 v-if 处于同一个节点时，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个\nv-for 循环中。如果要遍历的数组很大，而真正要展示的数据很少时，这将造成很大的性能浪费 2.这种场景建议使用 computed，先对数据进行过滤")]),e._v(" "),t("p",[e._v("注意：3.x 版本中 v-if 总是优先于 v-for 生效。由于语法上存在歧义，建议避免在同一元素上同时使\n用两者。比起在模板层面管理相关逻辑，更好的办法是通过创建计算属性筛选出列表，并以此创建可见\n元素。")]),e._v(" "),t("p",[e._v("解惑传送门 ☞ "),t("a",{attrs:{href:"https://cn.vuejs.org/#%E6%A6%82%E8%A7%88",target:"_blank",rel:"noopener noreferrer"}},[e._v("# v-if 与 v-for 的优先级对比非兼容"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"react-vue-项目中-key-的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-vue-项目中-key-的作用"}},[e._v("#")]),e._v(" React/Vue 项目中 key 的作用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度，更高效的更新虚拟DOM;\nvue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中，会根据新\n节点的key去对比旧节点数组中的key，从而找到相应旧节点。如果没找到就认为是一个新增节\n点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另\n一种是遍历查找。相比而言。map映射的速度更快。\n为了在数据变化时强制更新组件，以避免“就地复用”带来的副作用。\n当 Vue.js 用 v-for 更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被\n改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它\n在特定索引下显示已被渲染过的每个元素。重复的key会造成渲染错误。\n")])])]),t("h2",{attrs:{id:"数组扁平化转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组扁平化转换"}},[e._v("#")]),e._v(" 数组扁平化转换")]),e._v(" "),t("h4",{attrs:{id:"在说到模版编译的时候-有可能会提到数组的转换-一般就用递归处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在说到模版编译的时候-有可能会提到数组的转换-一般就用递归处理"}},[e._v("#")]),e._v(" 在说到模版编译的时候，有可能会提到数组的转换，一般就用递归处理")]),e._v(" "),t("h4",{attrs:{id:"将-1-2-3-4-5-转换成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-1-2-3-4-5-转换成"}},[e._v("#")]),e._v(" 将 [1,2,3,[4,5]] 转换成")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{\nchildren:[\n{\nvalue:\n},\n{\nvalue:\n},\n{\nvalue:\n},\n{\nchildren:[\n{\nvalue:\n},\n{\nvalue:\n}\n]\n},\n]\n}\n// 测试数组\nvar arr =[ 1 , 2 ， 3 ，[ 4 , 5 ]];\n// 转换函数\n")])])]),t("h2",{attrs:{id:"vue-组件的通信方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件的通信方式"}},[e._v("#")]),e._v(" vue 组件的通信方式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("props/$emit 父子组件通信\n父->子props，子->父 $on、$emit 获取父子组件实例 parent、children Ref获取实例的方式\n调用组件的属性或者方法 父->子孙 Provide、inject 官方不推荐使用，但是写组件库时很常用\n$emit/$on 自定义事件 兄弟组件通信\nEvent Bus 实现跨组件通信 Vue.prototype.$bus = new Vue() 自定义事件\nvuex 跨级组件通信\nVuex、$attrs、$listeners Provide、inject\n")])])]),t("h2",{attrs:{id:"emit-后面的两个参数是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#emit-后面的两个参数是什么"}},[e._v("#")]),e._v(" $emit 后面的两个参数是什么")]),e._v(" "),t("p",[e._v("1 、父组件可以使用 props 把数据传给子组件。\n2 、子组件可以使用 $emit,让父组件监听到自定义事件 。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vm.$emit( event, arg );//触发当前实例上的事件，要传递的参数\nvm.$on( event, fn );//监听event事件后运行 fn；\n")])])]),t("p",[e._v("子组件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function convert(arr){\n//准备一个接收结果数组\nvar result = [];\n// 遍历传入的 arr 的每一项\nfor(let i= 0 ;i<arr.length;i++){\n//如果遍历到的数字是number，直接放进入\nif(typeof arr[i] == 'number'){\nresult.push({\nvalue:arr[i]\n});\n} else if(Array.isArray(arr[i])){\n//如果遍历到这个项目是数组，那么就递归\nresult.push({\nchildren: convert(arr[i])\n});\n}\n}\nreturn result;\n}\nvar o = convert(arr);\nconsole.log(o);\n<template>\n<div class=\"train-city\">\n<h3>父组件传给子组件的toCity:{{sendData}}</h3>\n<br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>\n</div>\n</template>\n<script>\nexport default {\nname:'trainCity',\nprops:['sendData'], // 用来接收父组件传给子组件的数据\nmethods:{\n")])])]),t("h4",{attrs:{id:"父组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父组件"}},[e._v("#")]),e._v(" 父组件")]),e._v(" "),t("h2",{attrs:{id:"nexttick-的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-的实现"}},[e._v("#")]),e._v(" nextTick 的实现")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. nextTick是Vue提供的一个全局API,是在下次DOM更新循环结束之后执行延迟回调，在修改数\n据之后使用$nextTick，则可以在回调中获取更新后的DOM；\n2. Vue在更新DOM时是异步执行的。只要侦听到数据变化，Vue将开启 1 个队列，并缓冲在同一事件\n循环中发生的所有数据变更。如果同一个watcher被多次触发，只会被推入到队列中-次。这种在\n缓冲时去除重复数据对于避免不必要的计算和DOM操作是非常重要的。nextTick方法会在队列中\n加入一个回调函数，确保该函数在前面的dom操作完成后才调用；\n3. 比如，我在干什么的时候就会使用nextTick，传一个回调函数进去，在里面执行dom操作即可；\n4. 我也有简单了解nextTick实现，它会在callbacks里面加入我们传入的函数，然后用\ntimerFunc异步方式调用它们，首选的异步方式会是Promise。这让我明白了为什么可以在\nnextTick中看到dom操作结果。\n")])])]),t("h2",{attrs:{id:"nexttick-的实现原理是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-的实现原理是什么"}},[e._v("#")]),e._v(" nextTick 的实现原理是什么？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select(val) {\nlet data = {\ncityName: val\n};\nthis.$emit('showCityName',data);//select事件触发后，自动触发showCityName事件\n}\n}\n}\n<\/script>\n<template>\n<div>\n<div>父组件的toCity{{toCity}}</div>\n<train-city @showCityName=\"updateCity\" :sendData=\"toCity\"></train-city>\n</div>\n<template>\n<script>\nexport default {\nname:'index',\ncomponents: {},\ndata () {\nreturn {\ntoCity:\"北京\"\n}\n},\nmethods:{\nupdateCity(data){//触发子组件城市选择-选择城市的事件\nthis.toCity = data.cityName;//改变了父组件的值\nconsole.log('toCity:'+this.toCity)\n}\n}\n}\n<\/script>\n")])])]),t("p",[e._v("在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用 nextTick 来获取更新后的\nDOM。 nextTick 主要使用了宏任务和微任务。 根据执行环境分别尝试采用 Promise、\nMutationObserver、setImmediate，如果以上都不行则采用 setTimeout 定义了一个异步方法，多次调\n用 nextTick 会将方法存入队列中，通过这个异步方法清空当前队列。")]),e._v(" "),t("h2",{attrs:{id:"使用过插槽么-用的是具名插槽还是匿名插槽或作用域插槽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用过插槽么-用的是具名插槽还是匿名插槽或作用域插槽"}},[e._v("#")]),e._v(" 使用过插槽么？用的是具名插槽还是匿名插槽或作用域插槽")]),e._v(" "),t("p",[e._v("vue 中的插槽是一个非常好用的东西 slot 说白了就是一个占位的 在 vue 当中插槽包含三种一种是默认插槽\n（匿名）一种是具名插槽还有一种就是作用域插槽 匿名插槽就是没有名字的只要默认的都填到这里具名\n插槽指的是具有名字的")]),e._v(" "),t("h2",{attrs:{id:"keep-alive-的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-的实现"}},[e._v("#")]),e._v(" keep-alive 的实现")]),e._v(" "),t("p",[e._v("keep-alive 是 Vue.js 的一个内置组件。它能够不活动的组件实例保存在内存中，而不是直接将其销毁，\n它是一个抽象组件，不会被渲染到真实 DOM 中，也不会出现在父组件链中。")]),e._v(" "),t("p",[e._v("作用：实现组件缓存，保持这些组件的状态，以避免反复渲染导致的性能问题。 需要缓存组件 频繁切\n换，不需要重复渲染")]),e._v(" "),t("p",[e._v("场景：tabs 标签页 后台导航，vue 性能优化")]),e._v(" "),t("p",[e._v("原理：Vue.js 内部将 DOM 节点抽象成了一个个的 VNode 节点，keep-alive 组件的缓存也是基于\nVNode 节点的而不是直接存储 DOM 结构。它将满足条件（pruneCache 与 pruneCache）的组件在\ncache 对象中缓存起来，在需要重新渲染的时候再将 vnode 节点从 cache 对象中取出并渲染。")]),e._v(" "),t("h2",{attrs:{id:"keep-alive-的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-的属性"}},[e._v("#")]),e._v(" keep-alive 的属性")]),e._v(" "),t("p",[e._v("它提供了 include 与 exclude 两个属性，允许组件有条件地进行缓存。")]),e._v(" "),t("p",[e._v("include 定义缓存白名单，keep-alive 会缓存命中的组件；exclude 定义缓存黑名单，被命中的组件将不\n会被缓存；max 定义缓存组件上限，超出上限使用 LRU 的策略置换缓存数据。")]),e._v(" "),t("p",[e._v("在动态组件中的应用")]),e._v(" "),t("p",[e._v("在 vue-router 中的应用")]),e._v(" "),t("p",[e._v("vue 中完整示例")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<keep-alive :include="whiteList" :exclude="blackList" :max="amount">\n<component :is="currentComponent"></component>\n</keep-alive>\n<keep-alive :include="whiteList" :exclude="blackList" :max="amount">\n<router-view></router-view>\n</keep-alive>\n<keep-alive>\n<coma v-if="test"></coma>\n<comb v-else="test"></comb>\n</keep-alive>\n<button @click="test=handleClick">请点击</button>\nexport default {\ndata () {\nreturn {\ntest: true\n')])])]),t("h4",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#keep-alive",target:"_blank",rel:"noopener noreferrer"}},[e._v("keep-alive 官网"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/9523bb439950",target:"_blank",rel:"noopener noreferrer"}},[e._v("keep-alive 实现原理"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_38189842/article/details/103999989",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue keep-alive 的实现原理"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"mixin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixin"}},[e._v("#")]),e._v(" mixin")]),e._v(" "),t("p",[e._v("mixin 项目变得复杂的时候，多个组件间有重复的逻辑就会用到 mixin\n多个组件有相同的逻辑，抽离出来\nmixin 并不是完美的解决方案，会有一些问题\nvue3 提出的 Composition API 旨在解决这些问题【追求完美是要消耗一定的成本的，如开发成本】\n场景：PC 端新闻列表和详情页一样的右侧栏目，可以使用 mixin 进行混合\n劣势：1.变量来源不明确，不利于阅读 2.多 mixin 可能会造成命名冲突 3.mixin 和组件可能出现多对多的\n关系，使得项目复杂度变高")]),e._v(" "),t("h2",{attrs:{id:"vue-如何实现模拟-v-model-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-如何实现模拟-v-model-指令"}},[e._v("#")]),e._v(" vue 如何实现模拟 v-model 指令")]),e._v(" "),t("p",[e._v("可以使用 vue 自定义指令 Vue.directive() 模拟")]),e._v(" "),t("p",[e._v("具体参考："),t("a",{attrs:{href:"https://blog.csdn.net/qq_39157944/article/details/106262546",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 自定义指令模拟 v-model 指令"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"如何实现-v-model-说下思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何实现-v-model-说下思路"}},[e._v("#")]),e._v(" 如何实现 v-model,说下思路")]),e._v(" "),t("h2",{attrs:{id:"vue-router-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-相关"}},[e._v("#")]),e._v(" Vue Router 相关")]),e._v(" "),t("h2",{attrs:{id:"vuex-的理解及使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的理解及使用场景"}},[e._v("#")]),e._v(" Vuex 的理解及使用场景")]),e._v(" "),t("p",[e._v("Vuex 是一个专为 Vue 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. Vuex 的状态存储是响应式的；当 Vue 组件从 store 中读取状态的时候，\n")])])]),t("p",[e._v("若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新 2. 改变 store 中的状态的唯一途\n径就是显式地提交 (commit) mutation， 这样使得我们可以方便地跟踪每一个状态的变化 Vuex 主要包\n括以下几个核心模块：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1. State：定义了应用的状态数据\n2. Getter：在 store 中定义“getter”（可以认为是 store 的计算属性），\n}\n},\nmethods: {\nhandleClick () {\nthis.test = !this.test;\n}\n}\n}\n")])])]),t("p",[e._v("就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来， 且只有当它的依赖值发生了改变才会\n被重新计算 3. Mutation：是唯一更改 store 中状态的方法，且必须是同步函数 4. Action：用于提交\nmutation，而不是直接变更状态，可以包含任意异步操作 5. Module：允许将单一的 Store 拆分为多个\nstore 且同时保存在单一的状态树中\n"),t("a",{attrs:{href:"https://imgse.com/i/p9NG3Fg",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s1.ax1x.com/2023/05/05/p9NG3Fg.png",alt:"p9NG3Fg.png"}}),t("OutboundLink")],1),e._v(" "),t("Vssue",{attrs:{options:{locale:"zh"}}})],1)])}),[],!1,null,null,null);t.default=r.exports}}]);