export default{
    /**
     * 获得公司列表
     * @param {object} parameter 
     */
    getCompanyList(parameter){
        var url = '/daishu/crm/api/organization/company/list?companyName='+parameter.companyName+
        '&pageSize='+parameter.pageSize+'&pageIndex='+parameter.pageIndex;

        return new Promise(function(resolve,reject){
            $.ajax({
                url:url,
                type:'GET',
                dataType:'json',
                success:function(data,textStatus,jqXHR){
                    setTimeout(function() {
                        resolve(data);
                    }, 2000);
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
    }
}