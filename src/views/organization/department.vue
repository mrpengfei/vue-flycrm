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
                    <app-list-page :queryFun="queryFun">
                        <template slot="queryForm"
                                  scope="prop">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">部门名称</div>
                                    <input type="text"
                                           class="form-control"
                                           placeholder="部门名称"
                                           v-model="prop.queryPara.departmentName">
                                </div>
                            </div>
                        </template>
                        <template slot="table-header">
                            <tr>
                                <th>Id</th>
                                <th>名称</th>
                                <th>操作</th>
                            </tr>
                        </template>
                        <template slot="table-body"
                                  scope="prop">
                            <tr>
                                <td>{{prop.item.DepartmentId}}</td>
                                <td>{{prop.item.DepartmentName}}</td>
                                <td class="center">
                                    <button type="button"
                                            class="btn btn-primary">修改</button>
                                </td>
                            </tr>
                        </template>
                        <fly-modal :isShowModal="isShowModal"
                                   title="保存">
                            <el-form ref="form"
                                     v-model="editCompany"
                                     label-width="80px">
                                <input type="hidden"
                                       v-model="editCompany.companyId">
                                <el-form-item label="公司名称">
                                    <el-input v-model="editCompany.companyName"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary"
                                               @click="onSubmit">保存</el-button>
                                    <el-button @click="onCancel">取消</el-button>
                                </el-form-item>
                            </el-form>
                        </fly-modal>
                    </app-list-page>
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
            queryPara: {},
        };
    },
    methods: {

    },
    mounted: function () {

    }
}
</script>
