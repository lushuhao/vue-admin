<template>
  <div class="main">
    <header class="header">
      <el-input
        placeholder="评论用户ID/对象/内容模糊搜索"
        icon="search"
        v-model="inputAccount"
        :on-icon-click="handleIconClick">
      </el-input>
    </header>
    <section class="section">
      <el-table
        border stripe
        :data="tableData"
        style="width: 100%;"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          min-width="55">
        </el-table-column>
        <el-table-column
          fixed="left"
          prop="id"
          label="动态ID"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="userID"
          label="评论用户ID"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          min-width="200">
          <template scope="scope">
            <el-button
              @click.native.prevent="lookArticle(scope.row.id)"
              type="text"
              size="small">{{scope.row.title}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="类别"
          min-width="100">
        </el-table-column>
        <el-table-column
          label="评论内容"
          min-width="100">
          <template scope="scope">
            <el-button
              @click.native.prevent="lookComment(scope.row.id, scope.$index)"
              type="text"
              size="small">查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="praise"
          sortable
          label="点赞数量"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="IP"
          label="IP地址"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="time"
          label="发布时间"
          min-width="150">
        </el-table-column>
        <el-table-column
          label="是否显示"
          min-width="100">
          <template scope="scope">
            <el-button
              @click.native.prevent="displayType(scope.row.id, scope.$index, scope.row.display)"
              type="text"
              size="small">{{scope.row.display}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          min-width="100">
          <template scope="scope">
            <el-button
              @click.native.prevent="deleteTable(scope.row.id)"
              type="text"
              size="small">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <footer class="footer">
      <el-button type="danger" icon="delete" @click="deleteTable">删除</el-button>
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
    </footer>


    <!-- 查看文章 -->
    <el-dialog v-model="dialogArticle">
      <span>文章内容</span>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogContent = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 查看评论内容 -->
    <el-dialog v-model="dialogComment" size="tiny">
      <p class="title">
        <span class="click">15102728756</span>
        <span>评论的</span>
        <span class="click">{{articleTitle}}</span>
      </p>
      <p class="content-wrapper">
        <span class="name">评论内容：</span>
        <span class="content">{{content}}</span>
      </p>
      <p class="content-info">
        <span>
          <span class="name">评论时间：</span>
          <span>2017-03-19 17:16:37</span>
        </span>
        <span>
          <span class="name">评论用户IP：</span>
          <span>192.168.2.68</span>
        </span>
      </p>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        buttonList: ['全部', '个股', '教程', '板块', '策略'],
        tableData: [
          {
            id: '101',
            userID: '10100',
            title: '股票入门基础知识视频',
            type: '个股',
            praise: '1655',
            IP: '192.168.0.1',
            display: '显示',
            time: '2017年2月28日—2017年3月6日'
          },
          {
            id: '101',
            userID: '10100',
            title: '新手炒股从零开始学炒股',
            type: '个股',
            praise: '2655',
            IP: '192.168.0.2',
            display: '显示',
            time: '2017年2月28日—2017年3月6日'
          },
          {
            id: '101',
            userID: '10100',
            title: '股票入门基础知识视频',
            type: '个股',
            praise: '6655',
            IP: '192.168.0.3',
            display: '显示',
            time: '2017年2月28日—2017年3月6日'
          }
        ],
        inputAccount: '',
        dialogArticle: false, // 查看文章
        dialogComment: false, // 查看评论
        articleTitle: '', // 评论的标题
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.'
      }
    },
    methods: {
      // 搜索
      handleIconClick () {
      },
      // 表格多选，处理
      handleSelectionChange () {
      },
      // 查看文章内容
      lookArticle (id, key) {
        this.dialogArticle = true
      },
      // 查看评论内容
      lookComment (id, key) {
        this.dialogComment = true
        this.articleTitle = this.tableData[key].title
      },
      // 是否显示
      displayType (id, key, type) {
        // key和type，写着玩的，后期服务器有数据，删除即可
        if (type === '显示') {
          this.tableData[key].display = '隐藏'
        } else {
          this.tableData[key].display = '显示'
        }
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
      },
      // 分页
      handleSizeChange () {
      },
      handleCurrentChange () {
      }
    },
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .main {
    padding: 30px;
    width: 100%;

    .header {
      padding-bottom: 20px;

      .el-input {
        width: 300px;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
    }

    .el-dialog {

      .dialog-footer-add {
        display: flex;
        justify-content: space-around;
        margin-top: -20px;
      }

      .click {
        cursor: pointer;
        color: #20a0ff;
      }

      .name{
        white-space: nowrap;
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }

      .content-wrapper{
        display: flex;

        .content{
          padding: 10px;
          border: 1px dashed #dcdcdc;
          border-radius: 5px;
        }
      }

      .content-info{
        display: flex;
        justify-content: space-between;
      }

    }
  }
</style>
