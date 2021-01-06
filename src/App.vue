<template>
  <div class="app-box">
    <!--这个标签 表示一个不确定显示的内容 这个要显示的内容 一个vue的组件 并且在rooter中配置路径 才能显示-->
    <router-view/>
  </div>
</template>

<style lang="less">
//清除边距
* {
  margin: 0;
  padding: 0;
}

html, body,.app-box {
  width: 100%;
  height: 100%;
}

</style>
