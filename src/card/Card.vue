<template>
    <div>
         <nav-bar></nav-bar>
         <header-head>
            <template v-slot:headtitle>{{headtitle}}</template>
            <template v-slot:headicon>
                 <i class="el-icon-menu"></i>
            </template>
        </header-head>
        <div class="titleFou">这是页面四</div>
    </div>
</template>
<script>
import NavBar from '../navbar/NavBar'
import HeaderHead from '../components/Life/Header'
export default{
    name:'Card',
    components: {
        NavBar,
        HeaderHead
    },
    data(){
        return{
            headtitle:'参与优惠活动',

        }
    }
}
</script>

<style scoped>
.titleFou{
    color: rgb(100, 69, 184);
    font-weight:bold;
    text-align: left;
    font-size: 16px;
}
</style>