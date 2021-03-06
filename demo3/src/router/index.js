import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/Goods'
import Demo from '@/components/Demo'
import UploadFile from '@/components/UploadFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/upload',
      name: 'UploadFile',
      component: UploadFile
    }
  ]
})
