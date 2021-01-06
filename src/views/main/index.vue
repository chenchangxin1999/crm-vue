<template>
  <div class="main-box">
    <el-container>
      <el-aside width="200px">
        <div class="title-wrapper">
          <img src="../../assets/cat.jpg" alt="">
          <span>管理系统</span>
          <!--default-active是默认高亮的内容 取值那个 那个默认选择-->
        </div>
        <el-scrollbar class="scrollerbar">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
          >
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title">系统首页</span>
            </el-menu-item>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品相关</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-setting"></i>
                <span slot="title">品牌管理</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-setting"></i>
                <span slot="title">分类管理</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-setting"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>

            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">运营商管理</span>
            </el-menu-item>

          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div class="main-body">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" src="./index.less"></style>