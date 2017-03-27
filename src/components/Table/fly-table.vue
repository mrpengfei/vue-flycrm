<template>
    <table :class="className">
        <slot></slot>
    </table>
</template>
<script>
    export default{
        name:'fly-table',
        props:{
            className:String,
        },        
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