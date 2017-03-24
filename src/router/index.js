import Vue from 'vue'
import Router from 'vue-router'
import RootEle from '../common/rootElement'
import store from '../store/'

import App from '../App'
import AppHome from '../views/home/home'
import AppLogin from '../views/login/login'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '/', component: AppHome, name: 'home', alias: '/home' },
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
  var isLogin = store.state.User.user && store.state.User.user.EmployeeId > 0;
  if (to.name === 'login' || isLogin) {
    return next();
  }
  next('login')
});


export default router; 
