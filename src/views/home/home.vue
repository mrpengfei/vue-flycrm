<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                                    首页
                                    <small>Version 2.0</small>
                                  </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
                <li class="active">Dashboard</li>
            </ol>
        </section>
    
        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <form class="form-inline">
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">公司名称</div>
                                        <input type="text"
                                               class="form-control"
                                               placeholder="公司名称"
                                               v-model="queryPara.companyName">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="button"
                                            class="btn btn-primary"
                                            v-on:click="query">查询</button>
                                </div>
                                <div class="form-group">
                                    <button type="button"
                                            class="btn btn-primary">添加</button>
                                </div>
                            </form>
                        </div>
                        <div class="box-body">
                            <table class="fly-table withborder" v-loading="loading">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>名称</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in companies">
                                        <td>{{item.CompanyI}}</td>
                                        <td>{{item.CompanyName}}</td>
                                        <td class="center">
                                            <button type="button"
                                                    class="btn btn-primary">修改</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import organizationService from '../../services/organization.service'

export default {
    name: 'app-home',
    data() {
        return {
            companies: [],
            queryPara: {
                companyId: 0,
                companyName: '',
            },
            loading:false,
        };
    },
    methods: {
        query() {
            var vm = this;
            this.loading=true;
            organizationService.getCompanyList(this.queryPara)
                .then(function (data) {
                    vm.loading=false;
                    if (data.State) {
                        vm.companies = data.Result;
                    }
                }, function (error) {
                    vm.loading=false;
                    console.dir(error);
                });
        }
    },
    mounted: function () {
        this.query();
    }
}
</script>
<style>
.form-inline .form-group {
    margin-right: 10px;
}

.fly-table {
    width: 100%;
}

.fly-table th {
    background-color: #eef1f6;
    text-align: center;
}

.fly-table th,
.fly-table td {
    text-overflow: ellipsis;
    position: relative;
    vertical-align: middle;
    height: 40px;
    padding: 2px 6px;
}

.fly-table.withborder {
    border-top: 1px solid #dfe6ec;
    border-left: 1px solid #dfe6ec;
}

.fly-table.withborder th,
.fly-table.withborder td {
    border-right: 1px solid #dfe6ec;
    border-bottom: 1px solid #dfe6ec;
}

.fly-table th.center,
.fly-table td.center {
    text-align: center;
}
</style>