<template>
    <div class="homeheader">
        <div class="headerleft" v-on:click="goback">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="headerinput">
                <p class="headtitle">
                    <slot name="headtitle"></slot>
                </p>
        </div>
        <div class="headerright">
             <i class="el-icon-share"></i>
             <slot name="headicon"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderHead',
    methods:{
        goback: function() {
            this.$router.go(-1)
        },
    },
    props: {
    },
    computed: {
    }
}
</script>
<style lang="stylus" scoped>
.homeheader
    display: flex
    color: black
    padding: 0 3%
    background-color: #eeeeee
    .headerleft
        float: left
        margin: auto;
    .headerinput
        height:35px
        flex: 1
        color: black
        margin-left: 2px
        .headtitle
            line-height:35px
            margin-top: 0%
            margin-bottom: 0%
    .headerright
        display:flex
        color: black
        flex-direction: row-reverse
        justify-content: space-between   
        min-width: 15%
        padding: 0 4px
        font-size: 16px
        margin: auto;

</style>

