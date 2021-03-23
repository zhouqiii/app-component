<template>
    <div>
         <nav-bar></nav-bar>
         <header-head>
            <template v-slot:headtitle>{{headtitle}}</template>
            <template v-slot:headicon>
            </template>
        </header-head>
        <div class="titleThr">这是页面三</div>
    </div>
</template>
<script>
import NavBar from '../navbar/NavBar'
import HeaderHead from '../components/Life/Header'
export default{
    name:'Sport',
    components: {
        NavBar,
        HeaderHead
    },
    data(){
        return{
            headtitle:'缤纷生活',
        }
    }
}
</script>

<style scoped>
.titleThr{
    color: red;
    font-weight:bold;
    text-align: left;
    font-size: 16px;
}
</style>