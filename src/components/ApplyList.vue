<template>
    <div style="display: inline;padding-top: 22px;">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                    <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="getapplydata(1)">刷新
                    </el-button>
            </el-form-item>
          <div class="block">
            <el-pagination
              :current-page=applydata.pageNum
              :page-size=applydata.pageSize
              :pager-count=7
              layout="prev, pager, next"
              :total=applydata.total
              @current-change="getapplydata">
            </el-pagination>
          </div>
        </el-form>
        <el-table
                :data="applydata.list"
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
            prop="number"
            sortable
            width="200"
            label="用户提现金额">
          </el-table-column>
          <el-table-column
            prop="info"
            sortable
            width="200"
            label="用户填写的信息">
          </el-table-column>
          <el-table-column
            prop="phone"
            sortable
            width="200"
            label="用户联系信息">
          </el-table-column>
          <el-table-column
            prop="finish"
            sortable
            width="200"
            label="是否已经处理">
          </el-table-column>

        </el-table>
    </div>
</template>

    <script>
    const path = require('path')
    export default {
        data: function() {
            return {
                applydata:{

                }
            }
        },
        methods: {
            getapplydata(pageNum){
                this.tableLoading = true;
                this.getRequest("/apply/selectAll?pageNum="+pageNum).then(resp=> {
                    this.tableLoading = false;
                    if (resp && resp.status == 200) {
                        this.applydata = resp.data.data
                        }
                })
            }
        },
        created: function(){
            this.getapplydata(1)
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
