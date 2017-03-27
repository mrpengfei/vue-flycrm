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
                    <fly-table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </fly-table>
    
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'app-table',
}
</script>
<style></style>