<template>
    <div class="counter">
        <p>这个是cart页面</p>

        <span>{{$route.query.goodsId}}</span>
    </div>
</template>


<script>
    export default{
        name:'SubPage',
        props: ['num'],
        data() {
            return {
                num: 0,
            }
        },
    }

</script>
