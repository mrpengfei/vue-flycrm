import loginService from '../services/account.service'
import logHelper from '../common/logHelper'
import router from '../router'


import { USER_SIGNIN, USER_SIGNOUT } from './common/mutationTypes'
export default {
    state: loginService.getLoginUser(),
    getters: {
        isLogin: (state) => {
            logHelper.dir(state);
            if (!state || !state.user) {
                return false;
            }
            if (!state.user.EmployeeId || state.user.EmployeeId <= 0) {
                return false;
            }
            return true;
        }
    },
    mutations: {
        [USER_SIGNIN](state, user) {
            //存储用户信息
            loginService.saveLoginUser(user);
            state.user = null;
            state.user = user.user;
            setTimeout(function() {
            }, 1000);
        },
        [USER_SIGNOUT](state) {
            loginService.signOut();
            state.user = null;
        },
    },
    actions: {
        [USER_SIGNIN]({ commit }, user) {
            commit(USER_SIGNIN, user);
        },
        [USER_SIGNOUT]({ commit }) {
            commit(USER_SIGNOUT);
        }
    }
}