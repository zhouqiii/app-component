<template>
  <div id="app">
    <keep-alive exclude="Detail"><!-- vue自带的标签，使ajax请求的数据只需要加载一次，就会保存,exclude将详情页排除，详情页每一次打开ajax都要发送请求-->
     <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Home from './home/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
