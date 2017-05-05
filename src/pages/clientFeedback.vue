<template>
  <div class="clientFeedback">
    <header class="header">
      <el-input
        placeholder="账号/内容模糊搜索"
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
        prop="userId"
        label="用户ID"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户昵称"
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
        label="提交反馈时间"
        min-width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="处理人"
        min-width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="handleClick(scope.row.id, scope.$index)"
            type="text"
            size="small">处理
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        tableData: [
          {
            id: '01',
            userId: '101201',
            userName: '王小虎',
            content: '消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容',
            contentSlice: '',
            time: '2017-1-25 17:23：22',
            name: '-'
          }, {
            id: '02',
            userId: '101202',
            userName: '小虎',
            content: '消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容',
            contentSlice: '',
            time: '2017-1-25 17:23：22',
            name: '-'
          }, {
            id: '03',
            userId: '101203',
            userName: '王虎',
            content: '消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容 消息内容表格中最多只显示两行内容的前面50字，当鼠标移动到上面显示全部内容',
            contentSlice: '',
            time: '2017-1-25 17:23：22',
            name: '-'
          }
        ],
        options: [
          {
            value: '选项1',
            label: '充值'
          }, {
            value: '选项2',
            label: '打赏'
          }, {
            value: '选项3',
            label: '股神对战'
          }, {
            value: '选项4',
            label: '购买股票教程'
          }, {
            value: '选项5',
            label: '模拟炒股'
          }, {
            value: '选项6',
            label: '奖励'
          }],
        input: '',
        typeValue: '',
        dialogVisible: false,
        dialogTitle: '',
        // 查看资料
        form: {}
      }
    },
    computed: {},
    methods: {
      // 查看/编辑账户
      look (id, type, index) {
        this.dialogVisible = true
        this.dialogTitle = type
        this.form = this.tableData[index]
        console.log()
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
      // 处理操作
      handleClick (id, index) {
        this.$confirm('您确定已处理该问题?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData[index].name = '李四'
          this.$message({
            type: 'success',
            message: '处理成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消处理'
          })
        })
      },
      // 分页
      handleSizeChange () {
      },
      handleCurrentChange () {
      }
    },
    created () {
      this.sliceContent()
    },
    activated () {
      this.sliceContent()
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .clientFeedback {
    padding: 30px;
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

    .el-tooltip{
      text-indent: 2em;
    }

    .pagination {
      margin-top: 20px;
    }
  }
</style>
<style lang="sass" rel="stylesheet/scss">
  .clientFeedback {

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

