<template>
  <div id="app"
       class="wapper">
    <app-header></app-header>
    <Sidebar></Sidebar>
    <Footer></Footer>
  </div>
</template>

<script>
  import AppHeader from './components/Header/app.header';
  export default {
    name: 'app',
    components: {
      AppHeader
    },
    mounted: function () {
      var vm = this;
      $.get('/daishu/crm/api/employee/menu/list/1', function (data) {
        if (data && data.State) {
          vm.menus = data.Result;
        }
      });
    }
  }
</script>

<style>

</style>
