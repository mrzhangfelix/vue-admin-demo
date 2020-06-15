<template>
    <div style="display: inline;padding-top: 22px;">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                    <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="getuserdata">刷新
                    </el-button>
            </el-form-item>

        </el-form>
        <el-table
                :data="userdata.data"
                v-loading="tableLoading"
                border
                size="mini"
                style="width: 100%">
            <el-table-column
                    prop="userId"
                    sortable
                    width="200"
                    label="用户id">
            </el-table-column>
            <el-table-column
                    prop="username"
                    sortable
                    width="200"
                    label="用户名">
            </el-table-column>
            <el-table-column
                    prop="password"
                    sortable
                    width="200"
                    label="密码">
            </el-table-column>
            <el-table-column
                    prop="status"
                    sortable
                    width="200"
                    label="状态:NORMAL正常  PROHIBIT禁用">
            </el-table-column>

        </el-table>
    </div>
</template>

    <script>
    const path = require('path')
    export default {
        data: function() {
            return {
                userdata:{

                }
            }
        },
        methods: {
            getuserdata(){
                this.tableLoading = true;
                this.getRequest("/user/selectAll").then(resp=> {
                    this.tableLoading = false;
                    if (resp && resp.status == 200) {
                        var data = resp.data;
                        this.userdata = resp.data
                        }
                })
            }
        },
        created: function(){
            this.getuserdata()
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
