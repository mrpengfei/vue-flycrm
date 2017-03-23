<template>
  <div id="app" class="wapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import AppHeader from './components/Header/app.header';
  import AppSidebar from './components/Sidebar/app.sidebar';
  export default {
    name: 'app'
  }
</script>

<style>

</style>
