
<template>
  <div>
    <div class="head">
      <!-- <div style="height:60px;"></div>  -->
      <div class="bottom">
          <div class="item" @click="clickItem('/')" :class="{active: $route.path==='/'}">
          <i class="el-icon-view"></i>
          <p>精选</p>
          </div>
          <div class="item" @click="clickItem('/life')" :class="{active: $route.path==='/life'}">
          <i class="el-icon-present"></i>
          <p>生活</p>
          </div>
          <div class="item" @click="clickItem('/myhome')" :class="{active: $route.path==='/myhome'}">
          <i class="el-icon-bicycle"></i>
          <p>运动</p>
          </div>
          <div class="item" @click="clickItem('/myhome')" :class="{active: $route.path==='/myhome'}">
          <i class="el-icon-bank-card"></i>
          <p>用卡</p>
          </div>
          <div class="item" @click="clickItem('/myhome')" :class="{active: $route.path==='/myhome'}">
          <i class="el-icon-s-custom"></i>
          <p>我的</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "bottom",
    //   components:{HomeHome,LifeLife},
      methods:{
        clickItem:function(path){
            this.$router.push(path);
        }
      }
 
    }
</script>
<style scoped>
  .head{
     /* height:150px; */
  }
  .bottom{
    display: flex;
    position: fixed;
    bottom:0px;
    border-top:1px solid #d2d2d2;
    background-color: #f2f2f2;
    width: 100%;
    height: 60px;
   
  }
  .item{
    padding-top: 1%;
    width:20%;
  }
  .item i{
      font-size: 22px;
  }
  .item p{
    margin:0;
    font-size: 12px;
  }
  .active{
    color:#bf0a0a;
  }
</style>