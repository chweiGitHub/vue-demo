<template id="list">
    <div>
        <div class="list-container">
            {{content}}
        </div>
        <button type="button" name="button" @click="toDetailPage">到详情页</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            content: '列表页面'
        }
    },
    methods: {
        toDetailPage(){ 
            const id = 1001;
            // 编程式
            // this.$router.push(`/list-detail/${id}`);
            this.$router.push({path: `/list-detail/${id}?usr=spark`});
        },
    }
}

</script>
