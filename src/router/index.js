import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import SwiperList from '@/components/SwiperList'
import RoomList from '@/components/RoomList'
import BillList from '@/components/BillList'
import ClockList from '@/components/ClockList'
import LogList from '@/components/LogList'
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
        },{
          path: '/billlist',
          name: '交易列表',
          component: BillList
        },{
          path: '/clocklist',
          name: '打卡列表',
          component: ClockList
        },{
          path: '/loglist',
          name: '日志列表',
          component: LogList
        }
      ]
    },{
      path: '/',
      name: '登陆',
      component: Login
    }
  ]
})
