<template>
    <ul :class="ulClass">
        <li v-for="item in getSubMenus(parentId)">
            <a :href="item.Link">
            <i class="fa fa-link"></i> 
            <span>{{item.MenuName}}</span>
            <span v-if="hasSubMenu(item)" class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <sidebar-menu-li v-if="hasSubMenu(item)" :parentId="item.MenuId" :menus="menus" ulClass="treeview-menu"></sidebar-menu-li> 
        </li>
    </ul>
</template>
<script>
    export default{
        name: 'sidebar-menu-li',
        props:['parentId','menus','ulClass','isInit'],
        data: function(){
            return {
              getSubMenus:function(parentId){
                var items = new Array();
                for(var i = 0;i<this.menus.length;i++){
                  var item = this.menus[i];
                  if(item.ParentId==parentId){
                  items.push(item);
                  }
                }
                return items;
              }
            };
        },
        methods:{
          hasSubMenu:function(menu){
            var subMenus = this.getSubMenus(menu.MenuId)
            return subMenus.length > 0;
          }
        }
    }

    }
</script>
<style scoped>
</style>