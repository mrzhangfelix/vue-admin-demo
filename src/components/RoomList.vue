<template>
    <div style="display: inline;padding-top: 22px;">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                    <el-button type="primary" size="mini" style="margin-left: 5px" icon="el-icon-search" @click="getroomdata(1)">刷新
                    </el-button>
            </el-form-item>
          <div class="block">
            <el-pagination
              :current-page=roomdata.pageNum
              :page-size=roomdata.pageSize
              :pager-count=7
              layout="prev, pager, next"
              :total=roomdata.total
              @current-change="getroomdata">
            </el-pagination>
          </div>
        </el-form>
        <el-table
                :data="roomdata.list"
                v-loading="tableLoading"
                border
                size="mini"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    sortable
                    width="200"
                    label="房间id">
            </el-table-column>
            <el-table-column
                    prop="name"
                    sortable
                    width="200"
                    label="房间名称">
            </el-table-column>
            <el-table-column
                    prop="dakaTime"
                    sortable
                    width="200"
                    label="打卡时间">
            </el-table-column>
            <el-table-column
                    prop="money"
                    sortable
                    width="200"
                    label="房间奖金">
            </el-table-column>
            <el-table-column
                    prop="image"
                    sortable
                    width="200"
                    label="房间图片">
            </el-table-column>
            <el-table-column
                    prop="userId"
                    sortable
                    width="200"
                    label="创建人id">
            </el-table-column>
            <el-table-column
                    prop="bonus"
                    sortable
                    width="200"
                    label="分红比例">
            </el-table-column>
            <el-table-column
                    prop="start_day"
                    sortable
                    width="200"
                    label="起始日期">
            </el-table-column>
            <el-table-column
                    prop="avtiveDays"
                    sortable
                    width="200"
                    label="持续几天">
            </el-table-column>
            <el-table-column
                    prop="clockDays"
                    sortable
                    width="200"
                    label="已经打卡了几天">
            </el-table-column>
            <el-table-column
                    prop="recommend"
                    sortable
                    width="200"
                    label="是否推荐">
            </el-table-column>
            <el-table-column
                    prop="creatTime"
                    sortable
                    width="200"
                    label="创建时间">
            </el-table-column>
<!--            <el-table-column-->
<!--                    prop="finish"-->
<!--                    sortable-->
<!--                    width="200"-->
<!--                    label="是否结束">-->
<!--            </el-table-column>-->
            <el-table-column
                    prop="showinfo"
                    sortable
                    width="200"
                    label="是否推荐">
            </el-table-column>
            <el-table-column
                    prop="showinfo"
                    sortable
                    width="200"
                    label="展示的数据">
            </el-table-column>
            <el-table-column
                    prop="type"
                    sortable
                    width="200"
                    label="0:平均分配 其它:限制打卡金额">
            </el-table-column>
            <el-table-column
                    prop="imageUrl"
                    sortable
                    width="200"
                    label="房间图片">
            </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="topping(scope.row.id)" type="text" size="small">推荐</el-button>
              <el-button @click="recommend(scope.row.id)" type="text" size="small">顶置</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>

    <script>
    import {Message} from "element-ui";

    const path = require('path')
    export default {
        data: function() {
            return {
                roomdata:{

                }
            }
        },
        methods: {
            getroomdata(pageNum){
                this.tableLoading = true;
                this.getRequest("/room/selectAll?pageNum="+pageNum).then(resp=> {
                    this.tableLoading = false;
                    if (resp && resp.status == 200) {
                        this.roomdata = resp.data.data
                        }
                })
            },
          topping(id){
            console.log(id)
            this.getRequest("/room/topping?id="+id).then(resp=> {
              if (resp && resp.status == 200) {
                Message.success({message: "成功"});
              }
            })
          },
          recommend(id){
            console.log(id)
            this.getRequest("/room/recommend?id="+id).then(resp=> {
              if (resp && resp.status == 200) {
                Message.success({message: "成功"});
              }
            })
          }
        },
        created: function(){
            this.getroomdata(1)
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
