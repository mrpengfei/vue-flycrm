<template>
  <div id="app" class="wapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>

</style>
