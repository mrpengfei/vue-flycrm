import Vue from 'vue'
import Router from 'vue-router'
import RootEle from '../common/rootElement'
import store from '../store/'

import logHelper from '../common/logHelper'


import App from '../App'
import AppHome from '../views/home/home'
import AppLogin from '../views/login/login'
import AppTable from '../views/table/table'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '/', component: AppHome, name: 'home', alias: '/home' },
        { path: '/table', component: AppTable, name: 'table', },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin
    }
  ]
});

router.beforeEach((to, from, next) => {
  logHelper.log(store.getters.isLogin);
  var isLogin = store.getters.isLogin;
  if (to.name === 'login' || isLogin) {
    return next();
  }
  next('login')
});


export default router; 
