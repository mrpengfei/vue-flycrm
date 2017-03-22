<template>
 <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <app-sidebar-menu :parentId="0" :allMenus="menus"></app-sidebar-menu>
    </section>
 </aside>
</template>
<script>
import AppSidebarMenu from '../SidebarMenu/app.sidebar.menu';
export default {
    name: "app-sidebar",
    components: {
      AppSidebarMenu
    },
    data(){
        return {
           menus:[], 
        }
    },
    mounted: function () {
        var vm = this;
        $.get('/daishu/crm/api/employee/menu/list/1', function (data) {
            if (data && data.State) {
                vm.menus = data.Result;
            }
        });
    },
    
}
</script>

<style></style>