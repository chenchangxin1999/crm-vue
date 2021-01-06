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

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.main-box {
  height: 100%;
}
.main-body{
  background-color: #fff;
  height: 100%;
  margin: 10px 0px 0px 10px;
  padding: 20px 0px 0px 20px;
}

.scrollerbar {
  height: calc(100% - 70px);
  overflow-x: hidden;
}

.el-header {
  background-color: #f56c6c;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #444;
}

.title-wrapper {
  line-height: 60px;
  background-color: #f56c6c;
}

.title-wrapper img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 8px 0 10px;
}

.title-wrapper > span {
  font-weight: 700;
  color: white;
  font-size: 18px;
}


.el-main {
  background-color: #E9EEF3;
  color: #444;
  text-align: center;
  padding: 0;
  overflow: hidden;
}

.el-container {
  height: 100%;

}

</style>