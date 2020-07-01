<template>
    <div style="display: inline;padding-top: 22px;">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                    <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="getbilldata">刷新
                    </el-button>
            </el-form-item>

        </el-form>
        <el-table
                :data="billdata.data"
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
            label="用户ID">
          </el-table-column>
          <el-table-column
            prop="amount"
            sortable
            width="200"
            label="交易金额">
          </el-table-column>
          <el-table-column
            prop="time"
            sortable
            width="200"
            label="交易时间">
          </el-table-column>
          <el-table-column
            prop="source"
            sortable
            width="200"
            label="来源">
          </el-table-column>

        </el-table>
    </div>
</template>

    <script>
    const path = require('path')
    export default {
        data: function() {
            return {
                billdata:{

                }
            }
        },
        methods: {
            getbilldata(){
                this.tableLoading = true;
                this.getRequest("/bill/selectAll").then(resp=> {
                    this.tableLoading = false;
                    if (resp && resp.status == 200) {
                        var data = resp.data;
                        this.billdata = resp.data
                        }
                })
            }
        },
        created: function(){
            this.getbilldata()
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
