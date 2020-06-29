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
                    prop="id"
                    sortable
                    width="60"
                    label="id">
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
                    prop="type"
                    sortable
                    width="100"
                    label="用户类型">
            </el-table-column>
            <el-table-column
                    prop="lastLoginTime"
                    sortable
                    width="200"
                    label="上次登陆时间">
            </el-table-column>
            <el-table-column
                    prop="balance"
                    sortable
                    width="100"
                    label="用户余额">
            </el-table-column>
            <el-table-column
                    prop="image"
                    sortable
                    width="200"
                    label="用户头像">
            </el-table-column>
            <el-table-column
                    prop="inviter"
                    sortable
                    width="100"
                    label="邀请人">
            </el-table-column>
            <el-table-column
                    prop="inviteNum"
                    sortable
                    width="120"
                    label="总共邀请人数">
            </el-table-column>
            <el-table-column
                    prop="revenue"
                    sortable
                    width="100"
                    label="累计收入">
            </el-table-column>
            <el-table-column
                    prop="clockNum"
                    sortable
                    width="100"
                    label="累计打卡">
            </el-table-column>
            <el-table-column
                    prop="weixinId"
                    sortable
                    width="200"
                    label="用户绑定微信">
            </el-table-column>
            <el-table-column
                    prop="resurrection"
                    sortable
                    width="120"
                    label="复活卡数量">
            </el-table-column>
            <el-table-column
                    prop="joinRoom"
                    sortable
                    width="200"
                    label="加入的房间">
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
