<template>
    <div style="display: inline;padding-top: 22px;">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                    <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="getlogdata">刷新
                    </el-button>
            </el-form-item>

        </el-form>
        <el-table
                :data="logdata.data"
                v-loading="tableLoading"
                border
                size="mini"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    sortable
                    width="200"
                    label="id">
            </el-table-column>
            <el-table-column
                    prop="userId"
                    sortable
                    width="200"
                    label="userId">
            </el-table-column>
            <el-table-column
                    prop="type"
                    sortable
                    width="200"
                    label="日志类型">
            </el-table-column>
            <el-table-column
                    prop="roomId"
                    sortable
                    width="200"
                    label="房间id">
            </el-table-column>
            <el-table-column
                    prop="text"
                    sortable
                    width="200"
                    label="text">
            </el-table-column>
            <el-table-column
                    prop="time"
                    sortable
                    width="200"
                    label="time">
            </el-table-column>
        </el-table>
    </div>
</template>

    <script>
    const path = require('path')
    export default {
        data: function() {
            return {
                logdata:{

                }
            }
        },
        methods: {
            getlogdata(){
                this.tableLoading = true;
                this.getRequest("/log/selectAll").then(resp=> {
                    this.tableLoading = false;
                    if (resp && resp.status == 200) {
                        var data = resp.data;
                        this.logdata = resp.data
                        }
                })
            }
        },
        created: function(){
            this.getlogdata()
        },
        destroyed: function(){

        }
    }
    </script>


<style>
    .up-color{
        color:#F56C6C
    }
    .down-color{
        color:#67C23A
    }
    .el-table .up-row {
        color: #F56C6C;
    }

    .el-table .down-row {
        color: #67C23A;
    }
</style>
