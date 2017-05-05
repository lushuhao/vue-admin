<template>
  <div class="backEndAccount">
    <header class="header">
      <el-button type="primary" icon="edit" @click="dialogAdd = true">发布消息</el-button>
      <el-input
        placeholder="消息标题/标题内容"
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
        prop="id"
        label="编号"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="title"
        label="消息标题"
        min-width="150">
      </el-table-column>
      <el-table-column
        label="消息内容"
        min-width="400">
        <template scope="scope">
          <el-tooltip effect="light" :content="scope.row.content" popper-class="content__tooltip">
            <p type="text" size="small"
               style="text-align: left">{{scope.row.contentSlice}}
            </p>
          </el-tooltip>

        </template>
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
          <el-button
            @click.native.prevent="deleteTable(scope.$index, tableData)"
            type="text"
            size="small">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer class="footer">
      <el-pagination
        layout="prev, pager, next"
        :total="40">
      </el-pagination>
    </footer>

    <!-- 添加账号 -->
    <el-dialog title="添加消息" v-model="dialogAdd">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="消息标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="消息内容" prop="content">
          <v-editor
            :input-content="inputContent"
            :upload-url="uploadUrl"
            v-model="form.content"></v-editor>
        </el-form-item>
        <footer class="time">
          <span class="title">选择推送时间</span>
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="选择日期"
            :picker-options="datePickerOptions">
          </el-date-picker>
          <el-time-picker
            v-model="time"
            placeholder="选择时间">
          </el-time-picker>
        </footer>
        <el-form-item>
          <div class="button-wrapper">
            <el-button @click="dialogAdd = false">取 消</el-button>
            <el-button type="primary" @click="dialogAdd = false">确认发布推送</el-button>
          </div>
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
        input: '',  // 搜索
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
            content: '消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容消息内容表格中最多只显示两行前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容',
            contentSlice: '',
            time: '2016-05-04 17:23:22'
          },
          {
            id: '8001',
            title: '帮助标题',
            content: '消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容消息内容表格中最多只显示两行内容容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容',
            contentSlice: '',
            time: '2016-05-04 17:23:22'
          },
          {
            id: '8001',
            title: '帮助标题',
            content: '消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容',
            contentSlice: '',
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
        },
        // 限制日期
        datePickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        date: '',
        time: ''
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
      // 截取消息内容前50字
      sliceContent (id) {
        this.tableData.forEach((item, index) => {
          if (item.content.length > 50) {
            item.contentSlice = item.content.slice(0, 50)
          } else {
            this.tableData[index].contentSlice = item.content
          }
        })
      },
      // 删除表格
      deleteTable (id) {
        this.$confirm('此操作将删除表格数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    created () {
      this.sliceContent()
    },
    activated () {
      this.sliceContent()
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

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .el-input {
        width: 300px;
      }
    }

    .footer {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    .time {
      display: flex;
      align-items: center;
      padding-bottom: 20px;

      .title {
        width: 100px;
      }
    }

    .button-wrapper {
      display: flex;
      justify-content: space-around;

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

  /* toolTip 样式 */
  .content__tooltip.el-tooltip__popper.is-light {
    width: 400px;
    box-sizing: border-box;
    border-color: #20a0ff;
    line-height: 1.5;
    font-size: 14px;
    text-indent: 2em;
  }
</style>

