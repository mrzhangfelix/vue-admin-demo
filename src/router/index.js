import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '主页',
      component: Home,
      children: [
        {
          path: '/userlist',
          name: '用户列表',
          component: UserList
        }
      ]
    },{
      path: '/',
      name: '登陆',
      component: Login
    },{
      path: '/userlist',
      name: '用户列表',
      component: UserList
    }
  ]
})
