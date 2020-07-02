<template>
    <div style="display: inline;padding-top: 22px;">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                    <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="getclockdata(1)">刷新
                    </el-button>
            </el-form-item>
          <div class="block">
            <el-pagination
              :current-page=clockdata.pageNum
              :page-size=clockdata.pageSize
              :pager-count=7
              layout="prev, pager, next"
              :total=clockdata.total
              @current-change="getclockdata">
            </el-pagination>
          </div>
        </el-form>
        <el-table
                :data="clockdata.list"
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
                    label="用户id">
            </el-table-column>
            <el-table-column
                    prop="roomId"
                    sortable
                    width="200"
                    label="打卡房间id">
            </el-table-column>
            <el-table-column
                    prop="state"
                    sortable
                    width="200"
                    label="打卡状态">
            </el-table-column>
            <el-table-column
                    prop="joinTime"
                    sortable
                    width="200"
                    label="加入时间">
            </el-table-column>
            <el-table-column
                    prop="num"
                    sortable
                    width="200"
                    label="打卡天数">
            </el-table-column>
            <el-table-column
                    prop="clockTime"
                    sortable
                    width="200"
                    label="打卡时间">
            </el-table-column>
<!--            <el-table-column-->
<!--                    prop="finish"-->
<!--                    sortable-->
<!--                    width="200"-->
<!--                    label="是否已结束">-->
<!--            </el-table-column>-->
            <el-table-column
                    prop="money"
                    sortable
                    width="200"
                    label="投入钱数">
            </el-table-column>
            <el-table-column
                    prop="roomName"
                    sortable
                    width="200"
                    label="房间名字">
            </el-table-column>
            <el-table-column
                    prop="dakaTime"
                    sortable
                    width="200"
                    label="打卡开始结束时间">
            </el-table-column>

        </el-table>
    </div>
</template>

    <script>
    const path = require('path')
    export default {
        data: function() {
            return {
                clockdata:{

                }
            }
        },
        methods: {
            getclockdata(pageNum){
                this.tableLoading = true;
                this.getRequest("/clock/selectAll?pageNum="+pageNum).then(resp=> {
                    this.tableLoading = false;
                    if (resp && resp.status == 200) {
                        this.clockdata = resp.data.data
                        }
                })
            }
        },
        created: function(){
            this.getclockdata(1)
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
