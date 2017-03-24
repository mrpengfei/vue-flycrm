import loginService from '../services/account.service'

import {USER_SIGNIN,USER_SIGNOUT} from './common/mutationTypes'
export default{
    state:loginService.getLoginUser(),
    mutations:{
        [USER_SIGNIN](state,user){
            Object.assign(state,user);
        },
        [USER_SIGNOUT](state){
            loginService.signOut();
            Object.assign(state,user);
        },
    },
    actions:{
        [USER_SIGNIN]({commit},user){
            commit(USER_SIGNIN,user);
        },
        [USER_SIGNOUT]({commit}){
            commit(USER_SIGNOUT);
        }
    }
}