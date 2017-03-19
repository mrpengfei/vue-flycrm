<template>
    <ul :class="{'sidebar-menu':parentId<=0,'treeview-menu':parentId>0}" :aaa="parentId">
        <!-- Optionally, you can add icons to the links -->
        <li v-for="item in getSubMenus(parentId)" :class="{'treeview':parentId>0}">
            <a :href="item.Link">
                <i class="fa fa-link"></i>
                <span>{{item.MenuName}}</span>
                <span v-if="hasSubMenu(item.MenuId)" class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <SidebarMenu :parentId="item.MenuId" :allMenus="menus" v-if="hasSubMenu(item.MenuId)"></SidebarMenu>
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
const MENUS = [{
    MenuId: 1,
    MenuName: '首页',
    ParentId: 0,
    Link: '/'
},
{
    MenuId: 2,
    MenuName: '资源管理',
    ParentId: 0,
    Link: '#'
},
{
    MenuId: 3,
    MenuName: '我的资源',
    ParentId: 2,
    Link: '/resource/myresource'
}
];
export default {
    name: 'SidebarMenu',
    props: ['parentId','allMenus'],
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
    mounted: function () {
        if (this.parentId <= 0) {
            var vm = this;
            // setTimeout(function () {
            //     vm.menus = MENUS;
            // }, 2000);
            $.get('/daishu/crm/api/employee/menu/list/1',function(data){
                if(data && data.State){
                    vm.menus = data.Result;
                }
            });
        }
    }
}
</script>
<style>

</style>