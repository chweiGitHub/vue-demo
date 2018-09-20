import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SubPage from '@/views/SubPage'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello/:name',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
          {
              path: 'sub-page',
              name: 'SubPage',
              component: SubPage,
          }

      ]
  },
  {
      path: '/cart',
      name: 'cart',
      component: Cart, 
  }
  ]
})
