<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{msg}}</h1>
        <!--<theFirst></theFirst>-->
        <!--<theSecond></theSecond>-->
        <!--<theThird></theThird>-->
        <ul>
            <li>
                <router-link to="/first">第一页</router-link>
                <router-link to="/second">第二页</router-link>
                <router-link to="/third">第三页</router-link>
            </li>
        </ul>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import theFirst from './component/firstcomponent.vue';
    import theSecond from './component/secondcomponent.vue';
    import theThird from './component/thirdcpt.vue';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'hello，下面是路由组件调用开始了'
            }
        },
        components: {
            theFirst,
            theSecond,
            theThird
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
