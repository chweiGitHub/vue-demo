import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListDemo from '@/views/ListDemo'
import ListDetail from '@/views/ListDetail'
import ListDetailSub from '@/views/ListDetailSub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/list-demo',
        name: 'ListDemo',
        component: ListDemo
    },
    {
        path: '/list-detail/:id',
        name: 'ListDetail',
        component: ListDetail,
        children: [
            {
                path: 'sub',
                name: 'ListDetailSub',
                component: ListDetailSub,
            }
        ],
    }
  ]
})
