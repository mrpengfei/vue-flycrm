export default {
    onRouteChange(to) {
        if (to.name === 'login') {
            $('body').removeClass('skin-blue').removeClass('sidebar-mini').addClass('login-page');
        } else {
            $('body').removeClass('login-page').addClass('skin-blue').addClass('sidebar-mini');
        }
    },
    onLoginPage() {
        $('body').removeClass('skin-blue').removeClass('sidebar-mini').addClass('login-page');
    },
    onMainPage() {
        $('body').removeClass('login-page').addClass('skin-blue').addClass('sidebar-mini');
    }
}