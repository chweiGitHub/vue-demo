<template>
  <div class="hello">
    <button type="button" name="button" @click="toDemoPage">to-demo-page</button>
    <button type="button" name="button" @click="toGoodsListPage">to-goods-list-page</button>
    <button type="button" name="button" @click="toUploadFilePage">to-upload-file-page</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toDemoPage() {
      this.$router.push('/demo');
    },
    toGoodsListPage() {
      this.$router.push('/goods');
    },
    toUploadFilePage() {
      this.$router.push('/upload');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
