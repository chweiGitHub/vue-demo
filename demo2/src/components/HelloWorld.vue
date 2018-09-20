<template>
  <div class="hello">
      <a class='btn btn-primary' href="javascript:;" @click="getRequest">get</a>
      <a class='btn btn-info' href="javascript:;" v-on:click="postRequest">post</a>
      <a class='btn btn-success' href="javascript:;" v-on:click="jsonpRequest">jsonp</a>
      <a class='btn btn-success' href="javascript:;" v-on:click="httpRequest">http</a>
      <p>{{getContent}}</p>
      <p>{{postContent}}</p>
      <p>{{jsonpContent}}</p>
      <p>{{httpContent}}</p>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      getContent: '',
      postContent: '',
      jsonpContent: '',
      httpContent: '',
    }
  },
  mounted(){
      // 定义一个全局的拦截器
     Vue.http.interceptors.push((request, next)=> {
         console.log('request init...009');
         next(response=> {
             return response;
         });
     });
  },
  http:{
      // root: 'http://localhost:8080/#/',
  },
  methods: {
      getRequest(){
          this.$http.get(
              'package.json',
              {
                  params: {
                      name: 'spark',
                      age: 27,
                  },
                  headers: {
                      token: 'AFDKKK-00KAJF-0001'
                  }
              }
          ).then(res=> {
              this.getContent = res.data;
          }, error=> {
              this.getContent=error;
          });
      },
      postRequest(){
          this.$http.post('../../package.json', {
              name:'spark',
              age: 27,
          }, {
              headers:{
                token: 'AFDKKK-00KAJF-0002'
              }
          }).then(res=> {
              this.postContent  = res.data;
          }, error=> {
              this.postContent  = error;
          });
      },
      jsonpRequest(){
          this.$http.jsonp('http://www.imooc.com/course/AjaxCourseMembers?ids=796')
          .then(res=> {
              console.log('success');
              this.jsonpContent  = res.data;
          }, error=> {
              console.log('failed');
              this.jsonpContent  = error;
          });
      },
      httpRequest(){
          this.$http({
              url: 'index.html',
              method: 'GET',
              params: {
                  name: 'spark'
              },
              headers: {
                  token: 'FAJDLFALFJL08-D8F89AD8FAJ-004'
              },
              timeout: 30,
              before: function(){
                  console.log('before');
              }
          }).then(res=> {
              this.httpContent= res.data;
          });
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
