<template>
  <div class="backEndAccount">
    <header class="header">
      <el-button type="primary" icon="plus" @click="dialogAdd = true">添加账号</el-button>
      <el-select v-model="typeValue" clearable placeholder="账号状态">
        <el-option
          v-for="item in options" :key="item.label"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="账号"
        icon="search"
        v-model="input"
        :on-icon-click="handleIconClick">
      </el-input>
    </header>
    <el-table
      border
      :data="tableData"
      style="width: 100%;"
      stripe>
      <el-table-column
        fixed="left"
        prop="id"
        label="ID"
        min-width="100">
      </el-table-column>
      <el-table-column
        fixed="left"
        prop="account"
        label="账户"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="type"
        label="账号角色"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        min-width="200">
      </el-table-column>
      <el-table-column
        prop="registerTime"
        label="最近登录时间"
        min-width="200">
      </el-table-column>
      <el-table-column
        prop="freeze"
        label="状态"
        min-width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="重置密码"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="reset(scope.$index, tableData4)"
            type="text"
            size="small">重置
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="look(scope.$index, tableData4)"
            type="text"
            size="small">查看/编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="10">
      </el-pagination>
    </div>

    <!-- 添加账号 -->
    <el-dialog title="添加账号" v-model="dialogAdd">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="账号" prop="id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model.number="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="type">
          <el-select v-model="form.type" placeholder="请选择角色">
            <el-option label="审核员" value="1"></el-option>
            <el-option label="管理员" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogAdd = false">取 消</el-button>
          <el-button type="primary" @click="dialogAdd = false">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        tableData: [
          {
            id: '8001',
            account: 'wang',
            name: '王小虎',
            type: '审核员',
            createTime: '2016-05-04 17:23:22',
            registerTime: '2016-05-04 17:23:22',
            freeze: '未冻结'
          },
          {
            id: '5001',
            account: 'wang',
            name: '王小虎',
            type: '审核员',
            createTime: '2016-05-04 17:23:22',
            registerTime: '2016-05-04 17:23:22',
            freeze: '已冻结'
          },
          {
            id: '8001',
            account: 'wang',
            name: '王小虎',
            type: '管理员',
            createTime: '2016-05-04 17:23:22',
            registerTime: '2016-05-04 17:23:22',
            freeze: '未冻结'
          }
        ],
        options: [{
          value: '选项1',
          label: '审核员'
        }, {
          value: '选项2',
          label: '管理员'
        }],
        input: '',
        typeValue: '',
        dialogAdd: false, // 弹框-添加
        form: {
          id: '',
          name: '',
          phone: '',
          type: '',
          desc: ''
        },
        rules: {
          id: [
            {required: true, message: '账号可以由数字、字符及下划线组成', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入姓名'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入手机号'},
            {min: 10000000000, max: 20000000000, type: 'number', message: '请输入11位号码', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请选择角色', trigger: 'change'}
          ]
        },
        formLabelWidth: '120px'
      }
    },
    computed: {},
    methods: {
      // 查看/编辑账户
      look () {
        this.dialogAdd = true
      },
      // 搜索账号
      handleIconClick (ev) {
        console.log(ev)
      },
      // 重置密码
      reset () {
        this.$confirm(`确定要重置密码?    重置密码为手机号`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '重置成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          })
        })
      }

    },
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .backEndAccount {
    padding: 30px 50px 30px 30px;
    width: 100%;
    text-align: center;

    .header {
      display: flex;
      margin-bottom: 30px;

      .el-button--primary {
        margin-right: 20px;
      }
      .el-select {
        margin-right: 20px;
        width: 150px;

      }
      .el-input {
        width: 200px;
      }
    }

    .pagination {
      margin-top: 20px;
    }

    .el-dialog__wrapper {
      .el-select {
        width: 100%;
      }
    }
  }
</style>
<style lang="sass" rel="stylesheet/scss">
  .backEndAccount {
    .el-dialog {
      width: 500px;
    }
    .el-dialog__header, .el-dialog__body {
      padding: 30px 50px 0 20px;
    }
  }
</style>

