<template>
    <ul :class="{'sidebar-menu':parentId<=0,'treeview-menu':parentId>0}">
        <!-- Optionally, you can add icons to the links -->
        <li v-for="item in getSubMenus(parentId)" :class="{'treeview':parentId>0}">
            <a :href="item.Link">
                <!--<i class="fa fa-link"></i>-->
                <span>{{item.MenuName}}</span>
                <span v-if="hasSubMenu(item.MenuId)" class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <app-sidebar-menu :parentId="item.MenuId" :allMenus="menus" v-if="hasSubMenu(item.MenuId)"></app-sidebar-menu>
        </li>
    
        <!--<li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
        <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
        <li class="treeview">
            <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
                                <span class="pull-right-container">
                                  <i class="fa fa-angle-left pull-right"></i>
                                </span>
                              </a>
            <ul class="treeview-menu">
                <li><a href="#">Link in level 2</a></li>
                <li><a href="#">Link in level 2</a></li>
            </ul>
        </li>-->
    </ul>
</template>
<script>
export default {
    name: 'app-sidebar-menu',
    props:{
        parentId:{
            type:Number,
            default(){
                return 0;
            }
        },
        allMenus:{
            type:Array,
        },
    },
    data: function () {
        return {
           menus:this.allMenus || []
        };
    },
    methods: {
        hasSubMenu(parentId) {
            return this.menus.some(function (value, index, array) {
                return value.ParentId == parentId;
            });
        },
        getSubMenus(parentId) {
            var result = this.menus.filter(function (value, index, array) {
                return value.ParentId == parentId;
            });
            return result;
        }
    },
    watch:{
        allMenus:function(value,oldValue){
            this.menus = value;
        }
    },
    
}
</script>
<style>

</style>