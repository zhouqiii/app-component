<template>
    <div>
         <nav-bar></nav-bar>
         <header-head>
            <template v-slot:headtitle>{{headtitle}}</template>
            <template v-slot:headicon>
            </template>
        </header-head>
        <div class="titleFiv">这是页面五</div>
    </div>
</template>
<script>
import NavBar from '../navbar/NavBar'
import HeaderHead from '../components/Life/Header'
export default{
    name:'Myhome',
    components: {
        NavBar,
        HeaderHead
    },
    data(){
        return{
          headtitle:'这是一串很长的标题测试'  
        }
    }
}
</script>

<style scoped>
.titleFiv{
    color: rgb(94, 255, 0);
    font-weight:bold;
    text-align: left;
    font-size: 16px;
}
</style>