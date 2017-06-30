import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;
//
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
import theThird from './component/thirdcpt.vue';
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode : 'history',
    base : __dirname,
    routes : [
        {
            path : '/first',
            component : firstcomponent
        },
        {
            path : '/second',
            component : secondcomponent
        },
        {
            path : '/third',
            component : theThird
        },
        // {
        //     path : '*',
        //     redirect : '/index'
        // }
    ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
/*
*独立构件 VS 运行时构建
*
*后者是前者的30% 默认是后者构建
*
*
*/
// /

// new Vue({
//     el: '#app',
//     router : router,
//     //render: h => h(App) //下面方法是正常写法
//     render: function (h) {
//         return h(App)
//     }
// })//.$mount('#app')
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
