<template>
  <div id="app"
       class="wapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import RootEle from './common/rootElement'
export default {
  name: 'app',
  created: function () {
    RootEle.onMainPage();
  }
}
</script>

<style>

</style>
