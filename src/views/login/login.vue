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
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password"
                           class="form-control"
                           placeholder="密码"
                           v-model="user.password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button type="submit"
                                class="btn btn-primary btn-block btn-flat">登陆</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>
        </div>
        <!-- /.login-box-body -->
    </div>
</template>
<script>
import { USER_SIGNIN } from '../../store/common/mutationTypes'
import loginService from '../../services/account.service'
import User from '../../models/user.model'
import RootEle from '../../common/rootElement'
import logHelper from '../../common/logHelper'

export default {
    name: 'app-login',
    data() {
        return {
            user: {
                staffId: '',
                password: ''
            }
        };
    },
    created: function () {
        RootEle.onLoginPage();
    },
    methods: {
        login() {
            if (!this.user.staffId || !this.user.password) {
                alert('登陆数据失败');
                return;
            }
            //调用登陆接口
            loginService.login(new User(this.user.staffId, this.user.password))
                .then((data) => {
                    logHelper.dir(data);
                    if (data.State) {
                        var userInfo = data.Result;
                        
                        //改变状态
                        this.$store.dispatch(USER_SIGNIN,{
                            user: userInfo
                        });
                        this.$router.push("home");
                        return;
                    }
                    alert('登陆失败');
                }, function (reason) { });
        }
    },
    computed: {
        user: function () {
            return this.$store.state.user;
        }
    },
}
</script>