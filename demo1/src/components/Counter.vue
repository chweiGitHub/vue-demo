<template>
    <div class="counter">
        <button type="button" name="button" @click="increment">+</button>
        <button type="button" name="button" v-on:click="decrement">-</button>
        <p>
            <span>{{num}}</span>
        </p>
    </div>
</template>


<script>
    export default{
        props: ['num'],
        data() {
            return {
                num: 0,
            }
        },
        methods: {
            increment(){
                // this.num ++;
                this.$emit("incre");
            },
            decrement(){
                // this.num --;
                this.$emit("decre");
            }
        }
    }

</script>
