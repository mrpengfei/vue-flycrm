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
                            <el-form :inline="true"
                                     :model="queryPara">
                                <el-form-item label="公司：">
                                    <el-select v-model="queryPara.companyId"
                                               placeholder="请选择">
                                        <el-option v-for="item in selectcompanies"
                                                   :label="item.CompanyName"
                                                   :value="item.CompanyId">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="名称：">
                                    <el-input v-model="queryPara.departmentName"
                                              placeholder="部门名称">
                                    </el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div class="box-body">
                            <fly-table className="fly-table withborder"
                                       v-loading="loading">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>公司名称</th>
                                        <th>部门名称</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in listData">
                                        <td>{{item.DepartmentId}}</td>
                                        <td>{{item.CompanyName}}</td>
                                        <td>{{item.DepartmentName}}</td>
                                        <td class="center">
                                            <button type="button"
                                                    class="btn btn-primary">修改</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </fly-table>
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
    name: 'app-deparent',
    data() {
        return {
            queryFun: organizationService.getDepartmentList,
            queryPara: {
            },
            selectcompanies: [],
            loading: false,
            listData: [],
        };
    },
    methods: {
        query() {
            var vm = this;
            this.loading = true;
            this.queryFun(this.queryPara)
                .then(function (data) {
                    vm.loading = false;
                    if (data.State) {
                        vm.listData = data.Result;
                    }
                }).catch(function (error) {
                    vm.loading = false;
                    console.dir(error);
                });
        },
    },
    mounted: function () {
        var vm = this;
        new Promise(function (resovel, reject) {
            organizationService.getCompanyList().then(function (params) {
                vm.selectcompanies = params.Result;
                resovel();
            })
        }).then(function (data) {
            vm.query();
        });
    }
}
</script>
