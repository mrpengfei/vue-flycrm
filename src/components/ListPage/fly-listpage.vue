<template>
    <div class="box box-primary">
        <div class="box-header with-border">
            <form class="form-inline">
                <slot name="queryForm"
                      :queryPara="queryPara"></slot>
                <div class="form-group">
                    <button type="button"
                            class="btn btn-primary"
                            v-on:click="query">查询</button>
                </div>
            </form>
        </div>
        <div class="box-body">
            <fly-table className="fly-table withborder"
                       v-loading="loading">
                <thead>
                    <slot name="table-header"></slot>
                </thead>
                <tbody>
                    <slot name="table-body"
                          v-for="item in listData"
                          :item="item"></slot>
                </tbody>
            </fly-table>
            <slot></slot>
        </div>
    </div>
</template>
<script>

export default {
    name: 'app-list-page',
    data() {
        return {
            listData: [],
            loading: false,
            queryPara: {

            }
        };
    },
    props: {
        queryFun: {
            type: Function,
            default() {
                return function () {
                    return new Promise(function (resovel, reject) {
                        resovel({ Result: [] });
                    });
                };
            }
        },
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
        showEdit() {
            this.isShowModal = true;
        },
        onCancel() {
            this.isShowModal = false;
        },
        onSubmit() {
            this.isShowModal = false;
        }
    },
    mounted: function () {
        this.query();
    }
}
</script>
