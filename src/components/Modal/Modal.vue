<template>
    <el-dialog :title="title" v-model="isShow" :custom-class="customClass">
        <slot></slot>
    </el-dialog>
</template>
<script>
    export default{
        name:'fly-modal',
        data(){
            return{
                isShow:this.isShowModal
            };
        },
        props:{
            isShowModal:Boolean,
            title:String,
            customClass:{
                default(){
                    return 'dialog-autoSize';
                }
            },
            closeBtn:{
                type:Number,
                default(){
                    return 1;
                }
            },           
        },
        methods:{
        },
        watch:{
            isShowModal:function(){
                this.isShow = this.isShowModal;
            },
            isShow:function(){
                this.$parent.isShowModal=this.isShow;
            }
        },
    }
</script>
<style>
.dialog-autoSize{
    width: auto !important;
}
.dialog-autoSize>.el-dialog__header {
    background-color: #F8F8F8;
    border-bottom: 1px solid #eee;
    padding: 10px 20px;
}
.dialog-autoSize>.el-dialog__header>.el-dialog__title{
    font-weight: normal;
}
</style>