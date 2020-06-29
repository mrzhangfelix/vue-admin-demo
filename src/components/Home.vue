<template>
  <div>
    <el-container class="home-container">
      <el-header class="home-header">
        <span class="home_title">后台管理平台</span>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-container>
        <el-aside width="180px" class="home-aside">
          <div style="width: 180px;text-align: left;">
            <el-menu style="width: 180px;" unique-opened>
                <el-menu-item index="1" @click="goUserList">
                  <i class="el-icon-menu"></i>
                  <span slot="title">用户列表</span>
                </el-menu-item>
              <el-menu-item index="2" @click="goRoomList">
                  <i class="el-icon-menu"></i>
                  <span slot="title">房间列表</span>
                </el-menu-item>
              <el-menu-item index="3" @click="goSwiperList">
                  <i class="el-icon-menu"></i>
                  <span slot="title">swiper列表</span>
                </el-menu-item>

            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
          </el-breadcrumb>
          <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!this.$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{
      goUserList(){
        this.$router.push({path: '/userlist'});
      },
      goRoomList(){
        this.$router.push({path: '/roomlist'});
      },
      goSwiperList(){
        this.$router.push({path: '/swiperlist'});
      }
    }
  }
</script>

<style>
  .home-container {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }

  .home-header {
    /*background-color: #545c64;*/
    /*color: #fff;*/
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: content-box;
    padding: 0px;
  }

  .home-aside {
    /*background-color: #545c64;*/
  }

  .el-submenu__title{
    color: #fff;
  }

  .home-main {
    background-color: #000;
    color: #fff;
    text-align: center;
    margin: 0px;
    padding: 0px;;
  }

  .home_title {
    color: #000;
    font-size: 22px;
    display: inline;
    margin-left: 8px;
  }

  .home_userinfo {
    color: #000;
    cursor: pointer;
  }

  .home_userinfoContainer {
    display: inline;
    margin-right: 20px;
  }

  .el-submenu .el-menu-item {
    width: 180px;
    min-width: 175px;
  }
</style>
