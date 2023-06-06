// https://www.npmjs.com/package/material-icons
// https://marella.me/material-icons/demo/
import 'material-icons/iconfont/material-icons.css';
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Solution from '@/components/Solution'
import Menubar from '@/components/Menubar'


// const router = new VueRouter({
  
//   // ...
// })

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution,
    },
    {
      path: '/menubar',
      name: 'menubar',
      component: Menubar,
    }
  ]
})
