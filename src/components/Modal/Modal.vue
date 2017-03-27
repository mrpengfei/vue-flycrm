<template>
    <div class="hide" :id="id">
       <div class="modal-root">
            <slot></slot>
       </div>
    </div>
</template>
<script>
    export default{
        name:'fly-modal',
        data(){
            return{
                layerIndex:0,
            };
        },
        props:{
            isShowModal:Boolean,
            id:String
        },
        methods:{
            showModal(){
                var vm = this;
                if(this.isShowModal){
                    this.layerIndex = layer.open({
                        type:1,
                        content:$('#'+vm.id).html(),
                        end:function(){
                            vm.isShowModal=false;
                        }
                    });
                }else{
                    layer.close(this.layerIndex);
                }
            }
        },
        watch:{
            isShowModal:function(){
                this.showModal();
            }
        },
    }
</script>
<style>
.modal-root{
    margin: 5px 10px;
}
</style>