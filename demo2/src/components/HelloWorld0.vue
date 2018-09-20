<template>
  <div class="hello">
    <div class="title">
      axios
    </div>
      <a class='btn btn-primary' href="javascript:;" @click="getRequest">get</a>
      <a class='btn btn-info' href="javascript:;" v-on:click="postRequest">post</a>
      <a class='btn btn-success' href="javascript:;" v-on:click="httpRequest">http</a>
      <p>{{getContent}}</p>
      <p>{{postContent}}</p>
      <p>{{httpContent}}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld0',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      getContent: '',
      postContent: '',
      httpContent: '',
    }
  },
  mounted(){
    // 定义一个全局的拦截
    axios.interceptors.request.use(config => {
      console.log('request init.');
      console.log(config);
      return config;
    });
    axios.interceptors.response.use(response => {
      console.log('response init.');
      console.log(response);
      return response
    })
  },
  http:{
      // root: 'http://localhost:8080/#/',
  },
  methods: {
      getRequest(){
        // get(url, optons)
        axios.get('index.html', {
          params: {
            name: 'spark',
            age: 27,
            address: '上海浦东',
          },
          headers: {
            token: 'token-value'
          }
        })
        .then(res=> {
          console.log('get success');
          this.getContent = res.data;
        })
        .catch(error=> {
          console.log('get failed ');
          console.log(error);
          this.getContent  = error;
        });
      },
      postRequest(){
        // post(url, params, options)
        axios.post('index.html', {
          name: 'spark',
          address: 'shanghai'
        }, {
          headers: {
            token : 'ADF-0099DADFALDJ-00001'
          }
        }).then(res=> {
          console.log('post success');
          this.postContent  = res.data;
        }).catch(error=> {
          console.log('post failed');
          console.log(error);
        });
      },
      httpRequest(){
        // get请求 参数通过 params 来设置， post 请求参数通过data 来设置！
        axios({
          url: 'index.html',
          method: 'get',
          data: {
            name: 'spark',
            date: '2018-09-14'
          },
          params: {
            name: 'getspark',
            date: '2018-09-10'
          },
          headers: {
            token: 'DFJALDJLAJ-000000008'
          }
        }).then(res=> {
          console.log('http success');
          this.httpContent  = res.data;
        }).catch(error => {
          console.log('http failed');
          console.log(error);
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
