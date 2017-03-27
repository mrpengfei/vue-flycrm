export default{
    /**
     * 登陆
     * @param {User} user 
     */
    login(user){
        return new Promise(function(resolve,reject){
            $.ajax({
                url:'/daishu/crm/api/authen/login',
                type:'POST',
                data:JSON.stringify(user),
                dataType:'json',
                contentType:'application/json; charset=UTF-8',
                success:function(data,textStatus,jqXHR){
                    resolve(data);
                },
                error:function(jqXHR,textStatus,errorThrown){
                    reject({
                        jqXHR,
                        textStatus,
                        errorThrown
                    });
                },
                complete:function(){},
            });
        });
    },

    getLoginUser(){
        return JSON.parse(sessionStorage.getItem('user')) || {user:null};
    },

    signOut(){
        sessionStorage.removeItem('user')
    },

    saveLoginUser(user){
         sessionStorage.setItem('user',JSON.stringify(user));
    }

}