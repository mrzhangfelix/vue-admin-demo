import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import SwiperList from '@/components/SwiperList'
import RoomList from '@/components/RoomList'
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
        },{
          path: '/swiperList',
          name: '轮播图列表',
          component: SwiperList
        },{
          path: '/roomlist',
          name: '房间列表',
          component: RoomList
        }
      ]
    },{
      path: '/',
      name: '登陆',
      component: Login
    }
  ]
})
