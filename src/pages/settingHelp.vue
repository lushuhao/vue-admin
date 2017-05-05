<template>
  <div class="backEndAccount">
    <el-table
      border
      :data="tableData"
      style="width: 100%;"
      stripe>
      <el-table-column
        prop="id"
        label="编号"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="title"
        label="帮助标题"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发布日期"
        min-width="150">
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="look(scope.$index, tableData)"
            type="text"
            size="small">查看/编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer class="footer">
      <el-button type="primary" icon="plus" @click="dialogAdd = true">添加账号</el-button>
      <el-pagination
        layout="prev, pager, next"
        :total="40">
      </el-pagination>
      <i></i>
    </footer>

    <!-- 添加账号 -->
    <el-dialog title="添加帮助" v-model="dialogAdd">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="帮助标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文档内容" prop="content">
          <v-editor
            :input-content="inputContent"
            :upload-url="uploadUrl"
            v-model="form.content"></v-editor>
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
  import editor from 'components/Editor'
  export default {
    props: {},
    data () {
      return {
        // input content to editor
        inputContent: '',
        // output content from editor
        outputContent: '',
        // set image upload api url
        uploadUrl: '/api/v1/help/upload/wangEditorH5File',
        tableData: [
          {
            id: '8001',
            title: '帮助标题',
            time: '2016-05-04 17:23:22'
          },
          {
            id: '8001',
            title: '帮助标题',
            time: '2016-05-04 17:23:22'
          },
          {
            id: '8001',
            title: '帮助标题',
            time: '2016-05-04 17:23:22'
          }
        ],
        dialogAdd: false, // 弹框-添加
        form: {
          title: '',
          content: ''
        },
        rules: {
          title: [
            {required: true, message: '标题可以由数字、字符及下划线组成', trigger: 'blur'},
            {max: 50, message: '长度在50个字符以内', trigger: 'blur,change'}
          ],
          content: [{required: true}]
        }
      }
    },
    computed: {},
    methods: {
      // 查看/编辑账户
      look () {
        this.dialogAdd = true
      }
    },
    created () {
    },
    components: {
      'v-editor': editor
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .backEndAccount {
    padding: 30px 50px 30px 30px;
    width: 100%;
    text-align: center;

    .footer {
      display: flex;
      justify-content: space-between;
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
      width: 800px;
    }
    .el-dialog__header, .el-dialog__body {
      padding: 30px 50px 0 20px;
    }
  }
</style>

