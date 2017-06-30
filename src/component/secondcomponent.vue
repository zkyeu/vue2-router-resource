<template>
    <div id="secondcomponent">
        <h1> {{ msg }}</h1>
        <ul>
            <li v-for="(val, key) in articles">
            {{key}}- {{val.title}} -  {{ val.original_title }}
            </li>
        </ul>
    </div>


</template>

<script>
    export default {
        //el : '#secondcomponent',
        data () {
            return {
                msg : "我是第二个组件",
                articles : []
            }
        },
        mounted: function() {
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调
                console.log("success")
                this.articles = response.data.subjects
                // this.articles = response.data["subjects"] 也可以

            }, function(response) {
                // 这里是处理错误的回调
                console.log(response)
            });
        }
    }
</script>
<style>
#secondcomponent li{display: block;float: left;width: 100%;}
</style>