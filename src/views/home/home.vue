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
                                    <!--<button type="button"
                                            class="btn btn-primary"
                                            @click="showEdit">添加</button>-->
                                             <el-button type="primary" @click="showEdit">添加</el-button>
                                </div>
                            </form>
                        </div>
                        <div class="box-body">
                            <fly-table className="fly-table withborder"
                                   v-loading="loading">
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
                            </fly-table>
                        </div>
                        <fly-modal :isShowModal="isShowModal" title="保存">
                            <el-form ref="form" v-model="editCompany" label-width="80px">
                                <input type="hidden" v-model="editCompany.companyId">
                                <el-form-item label="公司名称">
                                    <el-input v-model="editCompany.companyName"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">保存</el-button>
                                    <el-button @click="onCancel">取消</el-button>
                                </el-form-item>
                            </el-form>
                        </fly-modal>
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
            loading: false,
            isShowModal:false,
            editCompany:{
                companyId:0,
                companyName:''
            },
        };
    },
    methods: {
        query() {
            var vm = this;
            this.loading = true;
            organizationService.getCompanyList(this.queryPara)
                .then(function (data) {
                    vm.loading = false;
                    if (data.State) {
                        vm.companies = data.Result;
                    }
                }).catch(function(error){
                    vm.loading = false;
                    console.dir(error);
                });
        },
        showEdit(){
            this.isShowModal=true;
        },
        onCancel(){
            this.isShowModal=false;
        },
        onSubmit(){
            this.isShowModal=false;
        }
    },
    mounted: function () {
        this.query();
    }
}
</script>
