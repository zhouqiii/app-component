<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cardList" v-for="(item,index) of cardList" :key="index">
            <div class="cardDetail" v-on:click="greet">
                <p>{{item.number}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from '../navbar/NavBar'
import axios from 'axios'
export default {
    name: 'Life',
    components: {
        NavBar
    },
    data(){
        return{
            cardList:[
                {id:'01',number:'8888 **** **** 8888'},
                {id:'02',number:'9999 **** **** 9999'}
            ],
            title:'',
            nextbyn:'',
            confirm:'',
            showCancelBtn:false
        }
    },
    methods:{
        getData: function() {
            axios.get('/mock/index.json').then(this.getDataSucc)
        },
        getDataSucc: function(res) {
            res = res.data
            if(res.ret&&res.data) {
                const data = res.data
                this.title = data.msgBox.title
                this.nextbyn = data.msgBox.cancel
                this.confirm = data.msgBox.confirm
                if(this.nextbyn!=''){
                    this.showCancelBtn=true
                }
            }
        },
        greet:function (event){
            const h = this.$createElement;
            this.$msgbox({
            message: h('p', null, [
                h('p', null, this.title),
                // h('i', { style: 'color: teal' }, 'VNode')
            ]),
            closeOnClickModal:false,//点击遮罩层是否关闭弹框
            showCancelButton: this.showCancelBtn,//是否显示取消按钮
            cancelButtonText:this.nextbyn,//取消按钮文字
            confirmButtonText:this.confirm ,//确定按钮文字
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                instance.confirmButtonLoading = false;
                // instance.confirmButtonText = '执行中...';
                setTimeout(() => {
                    done();//这里执行回调函数
                    setTimeout(() => {
                    instance.confirmButtonLoading = false;
                    }, 100000000);
                }, 10000000);
                } else {
                done();
                }
            }
            }).then(action => {
            this.$message({
                type: 'info',
                message: 'action: ' + action
            });
            });
            
        }
    },
    mounted () {
    this.getData()
    },
}
</script>
<style>
.cardDetail{
    background: #e03333;
    padding: 1%;
    margin-top: 1%;
    text-align: left;
}
/* 弹出框样式 */
.el-message-box{
    width: 240px !important;
}
.el-message-box__message{
    text-align: center;
}
.el-message-box{
    padding-bottom: 0px!important;
}
.el-message-box__btns{
    padding: 0px !important;
    text-align: center !important;
    border-top: 1px solid #d1c1c1;
}
.el-button--default{
    border: 1px solid transparent !important;  
    outline: none !important; 
      border-right: 1px solid #d1c1c1 !important;
       font-size: 14px !important;
       padding: 9px 40px 9px 0px !important;
   
}
.el-button--primary{
    background-color:inherit !important;
    border: 1px solid transparent !important;  
    outline: none !important; 
    color: #f73232ad !important;
    font-size: 14px !important;
    padding: 9px 0px 9px 40px !important;
    
}
.el-button:focus{
    background-color:#fff !important;
    color: black !important;
}
.el-button:hover{
    background-color:#fff !important;
    color: black !important;
}
</style>