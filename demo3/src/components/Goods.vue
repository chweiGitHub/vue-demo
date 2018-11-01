<template id="goods">
  <div class="list">
    <ul>
        <li class="item-container" v-for="item in list">
          <img class="item-image" v-bind:src="'http://192.168.1.166/images/'+item.image" alt=""/>
          <div class="item-info">
            <div class="item-name">
              {{item.name}}
            </div>
            <div class="item-price">
              {{`￥${item.price}`}}
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
export default{


  data(){
    return {
      list: [],
    }
  },
  mounted(){
    this.loadGoods();
  },
  methods: {
    loadGoods(){
      // 这个参数要么放在请求的url上，要么通过设置params的方式， 在浏览器url地址后边直接输入在后台服务中是拿不到的。
      axios.get('/goods?page=1&pageSize=10&sort=1&priceLevel=all')
      .then(res=> {
        console.log(res.data);
        if(res.data.status == 0){
          console.log(res.data);
          console.log(res.data.result);
            this.list = res.data.result.list;
        } else {
            this.list = [];
        }
      });
    }
  }
}

</script>

<style media="screen">
  .item-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 0.5px solid #ccc;
  }
  .item-image{
    width: 80px;
    height: 90px;
  }
  .item-info{
    margin-left: 10px;
  }
  .item-name{
    font-size: 1.3em;
    color: #000000;
  }
  .item-price{
    font-size: 1.2em;
    color: #ff0000;
  }
</style>
