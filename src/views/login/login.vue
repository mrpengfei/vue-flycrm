<template>
    <div class="login-box">
        <div class="login-logo">
            <router-link to="/"><b>Admin</b>LTE</router-link>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">Sign in to start your session</p>
    
            <form v-on:submit.prevent="login">
                <div class="form-group has-feedback">
                    <input type="text"
                           class="form-control"
                           placeholder="工号"
                           v-model="user.staffId">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password"
                           class="form-control"
                           placeholder="Password"
                           v-model="user.password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>
        </div>
        <!-- /.login-box-body -->
    </div>
</template>
<script>
import {USER_SIGNIN} from '../../store/common/mutationTypes'
 
export default {
    name: 'app-login',
    data(){
        return{
            user:{
                staffId:'',
                password:''
            }
        };
    },
    methods:{
      login(){
        if(!this.user.staffId || !this.user.password){
            alert('登陆数据失败');
            return;
        }
          this.$store.dispatch({
            type:USER_SIGNIN,
            user:this.user
          })
      }  
    },
}
</script>