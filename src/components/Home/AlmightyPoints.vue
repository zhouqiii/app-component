<template>
    <div class="dropPoints">
        <div class="contentBox">
             <div class="mainBox">
                <div class="logoDiv"><!--固定部分-->
                    <img src="../../static/points.png" class="logoImg"/>
                </div>
                <div>
                    <div class="iconDrag" ><!--拖拽部分-->
                        <img src="../../static/pointsIcon1.png" class="iconImg">
                        <div class="iconText">
                            <p>沙宣迷你造型器套餐<span class="integral">710,400,00积分</span></p>
                            <p class="icontext_2">正在热兑中</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>
<script>
// import imgUrl from '@/assets/image/points.png'
export default{
    name:'AlmightyPoints',
    data(){
        return{

        }
    },
    mounted(){
        this.imgUrl='@/assets/image/points.png'
    }
}
</script>

<style scoped>
.dropPoints{
    padding-bottom: 60px;
}
.contentBox{
   padding: 1.5%;
   margin: 1.5%;
   border: 1px solid #eeeeee;
   box-sizing: border-box;
}
.logoDiv{
    overflow: hidden;
    position: absolute;
}
.logoImg{
    height: 45px;
    float: left;
}

.iconImg{
    width: 100%;
    float: left;
}
.iconText{
    float: left;
    display: inline-block;
    padding-left: 3%;
}
.iconText p{
    text-align: left;
    margin-top: 3%;
    margin-bottom: 3%;
}
.integral{
    color: #ff0000ba;
}
.iconDrag{
    overflow: hidden;
    width: 80%;
}
.icontext_2{
    font-size: 14px;
    color: #91919e;
}
</style>