<template>
    <div style="display: inline;padding-top: 22px;">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                    <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="getswiperdata">刷新
                    </el-button>
            </el-form-item>

        </el-form>
        <el-table
                :data="swiperdata.data"
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
                    prop="url"
                    sortable
                    width="200"
                    label="点击轮播图跳转地址">
            </el-table-column>
            <el-table-column
                    prop="desc"
                    sortable
                    width="200"
                    label="轮播图介绍文字">
            </el-table-column>
            <el-table-column
                    prop="order"
                    sortable
                    width="200"
                    label="顺序">
            </el-table-column>
            <el-table-column
                    prop="image"
                    sortable
                    width="200"
                    label="轮播图图片路径">
            </el-table-column>
        </el-table>
    </div>
</template>

    <script>
    const path = require('path')
    export default {
        data: function() {
            return {
                swiperdata:{

                }
            }
        },
        methods: {
            getswiperdata(){
                this.tableLoading = true;
                this.getRequest("/swiper/selectAll").then(resp=> {
                    this.tableLoading = false;
                    if (resp && resp.status == 200) {
                        var data = resp.data;
                        this.swiperdata = resp.data
                        }
                })
            }
        },
        created: function(){
            this.getswiperdata()
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
