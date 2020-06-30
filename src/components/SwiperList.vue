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
        prop="description"
        sortable
        width="200"
        label="轮播图介绍文字">
      </el-table-column>
      <el-table-column
        prop="ordernum"
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
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="showform(scope.row)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="id" label-width="120px">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="点击轮播图跳转地址" label-width="120px">
          <el-input v-model="form.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" label-width="120px">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="顺序" label-width="120px">
          <el-input v-model="form.ordernum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="轮播图图片路径" label-width="120px">
          <el-input v-model="form.image" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="change()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  const path = require('path')
  export default {
    data: function () {
      return {
        swiperdata: {},
        dialogFormVisible: false,
        form: {
          id: '',
          url: '',
          description: '',
          ordernum: '',
          image: ''
        }
      }
    },
    methods: {
      getswiperdata() {
        this.tableLoading = true;
        this.getRequest("/swiper/selectAll").then(resp => {
          this.tableLoading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
            this.swiperdata = resp.data
          }
        })
      },
      showform(row){
        this.form.id=row.id;
        this.form.url=row.url;
        this.form.description=row.description;
        this.form.ordernum=row.ordernum;
        this.form.image=row.image;
        this.dialogFormVisible=true
      },
      change(){
        this.postRequest("/swiper/change",this.form).then(resp => {
          this.tableLoading = false;
          if (resp && resp.status == 200) {

          }
        })
        this.dialogFormVisible = false
      }
    },
    created: function () {
      this.getswiperdata()
    },
    destroyed: function () {

    }
  }
</script>


<style>
  .up-color {
    color: #F56C6C
  }

  .down-color {
    color: #67C23A
  }

  .el-table .up-row {
    color: #F56C6C;
  }

  .el-table .down-row {
    color: #67C23A;
  }
</style>
