<template id="demo">
  <div class="demo-container">
    <span>{{name}}</span>

    <input type="text" name="" value="" v-model="nickName" placeholder='please input your nickname'/><br/>
    <textarea name="name" rows="3"  v-model="description"></textarea>

    <div>
      your name: <span>{{nickName}}</span>
      description: <p>{{description}}</p>
    </div>

    <input type="checkbox" name="" value="" v-model="checked"/><span>{{checked}}</span>
    <div class="checkgroup">
      <input type="checkbox" name="" value="苏东坡" v-model="selectedName"/><label for="a">苏东坡</label>
      <input type="checkbox" name="" value="李贺" v-model="selectedName"/><label for="b">李贺</label>
      <input type="checkbox" name="" value="辛弃疾" v-model="selectedName"/><label for="c">辛弃疾</label>
    </div>
    <div>
      {{selectedName}}
    </div>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div >
      <input type="radio" name="" id="agree" value="agree" v-model="agree">同意</input>
      <input type="radio" name="" id="disagree" value="disagree" v-model="agree">不同意</input>
    </div>

    <select v-model="selected">
      <option disabled>请选择</option>
      <option>上海</option>
      <option>北京</option>
      <option>广州</option>
    </select>
    <select v-model="mulSelected" multiple>
      <option disabled>请选择</option>
      <option>上海</option>
      <option>北京</option>
      <option>广州</option>
    </select>

    <button type="button" name="button" v-on:click="submit">submit</button>

  </div>
</template>


<script>
  export default {
    data(){
      return {
        name: 'spark',
        nickName: '',
        description: '',
        checked: false,
        selectedName: [],
        checkedNames: [],
        agree: true,
        selected: '',
        mulSelected: [],

      };
    },
    methods: {
      submit(){
        console.log('nickname: '+ this.nickName);
        console.log('description: ' + this.description);
      }
    }
  }
</script>

<style media="screen">

</style>
