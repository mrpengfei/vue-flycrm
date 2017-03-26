// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import components from './components/'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Object.keys(components).forEach(function(value,key,array){
  var item = components[value];
  if(!item){
    return;
  }
  Vue.component(item.name,item);
});

Vue.config.productionTip = false

Vue.use(ElementUi);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
