<template>
    <div id="three">
        <h1> {{ msg }}</h1>
        <div v-for="x in tags.tags">
            {{ x.name }}

        </div>
        <div>
            <img :src="tags.image">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg : "我是路由点击的第三个页面",
                tags : null
            }
        },
        mounted : function () {
            this.$http.jsonp('https://api.douban.com/v2/book/1220562', {}, {
                header : {},
                emulateJSON: true
            })
                .then(function (res) {
                    console.log("成功")
                    this.tags = res.data
                },function (res) {
                    console.log('error')
                })
        }
    }
</script>