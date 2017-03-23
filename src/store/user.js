import {USER_SIGNIN} from './common/mutationTypes'
export default{
    state:JSON.parse(sessionStorage.getItem('user')) || {},
    mutations:{
        [USER_SIGNIN](state,user){
            sessionStorage.setItem('user',JSON.stringify(user));
            Object.assign(state,user);
            
        },
    },
    actions:{
        [USER_SIGNIN]({commit},user){
            commit(USER_SIGNIN,user);
        }
    }
}