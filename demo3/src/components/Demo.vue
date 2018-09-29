<template id="demo">
  <div class="demo-container">
    <span>{{name}}</span>

    <input type="text" name="" value="" v-model.lazy.trim="nickName" placeholder='please input your nickname'/><br/>
    <input v-model.number="age" type="number">
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

    <select v-model="optionSelect">
      <option v-for="item in options" v-bind:value="item.value">{{item.text}}</option>
    </select>

    <input
      type="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    >
    <div>
      <div v-if="toggle=='yes'">选中</div>
      <div v-else>未选中</div>
    </div>
    <div v-if="agree=='agree'">
      agree
    </div>
    <div v-else>
      disagree
    </div>
    <ul>
      <template v-for="item in arr">
      <li v-if="item> 0">{{`我是大于0的--${item}`}}</li>
      <li v-else>{{`我是小于0的--${item}`}}</li>
      </template>
    </ul>
    <button type="button" name="button" v-on:click="submit">submit</button>

  </div>
</template>


<script>
  export default {
    data(){
      return {
        age: '',
        name: 'spark',
        nickName: '',
        description: '',
        checked: false,
        selectedName: [],
        checkedNames: [],
        agree: true,
        selected: '',
        mulSelected: [],
        options: [
          {text: 'org- 1 ', value: '1'},
          {text: 'org- 2 ', value: '2'},
          {text: 'org- 3 ', value: '3'}
        ],
        optionSelect:'2',
        toggle: 'yes',
        arr: [1, 0, 1, 0, 0],

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
