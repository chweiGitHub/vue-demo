<template id="detail">
    <div>
        <div>
            {{content}}
        </div>
        <div class="id">
            获取到的参数为： id= {{this.$route.params.id}}
        </div>
        <div class="params">
            {{this.$route.query.usr}}
        </div>

        <!-- 声明式 -->
        <router-link to='/list-detail/1002/sub'>显示子页面</router-link>

        <router-view></router-view>

    </div>

</template>

<script>

export default {
    data(){
        return {
            content: '详情页'
        }
    },
    methods: {
    }
}

</script>
