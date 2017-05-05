<template>
  <div class="main">
    <header class="header">
      <div class="button-wrapper">
        <template v-for="(val, key) in buttonList">
          <button class="button" @click="navTab(key)">{{val}}</button>
        </template>
      </div>
      <el-input
        placeholder="ID/标题/内容模糊搜索"
        icon="search"
        v-model="inputAccount"
        :on-icon-click="handleIconClick">
      </el-input>
    </header>
    <section class="section">
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
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
          label="编号"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="userID"
          label="用户ID"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          min-width="200">
        </el-table-column>
        <el-table-column
          label="文章内容"
          min-width="100">
          <template scope="scope">
            <el-button
              @click.native.prevent="look(scope.row.id)"
              type="text"
              size="small">查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="类别"
          min-width="100">
        </el-table-column>
        <el-table-column
          label="点赞数量"
          min-width="100">
          <template scope="scope">
            <el-button
              @click.native.prevent="praiseNum(scope.row.id)"
              type="text"
              size="small">{{scope.row.praise}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="comment"
          sortable
          label="评论数量"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="money"
          sortable
          label="打赏乐币合计"
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
          prop="time"
          label="发布时间"
          min-width="150">
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
      <div>
        <el-button type="danger" icon="delete" @click="deleteTable">删除</el-button>
        <el-button type="info" @click="praiseTypeSetting">点赞显示设置</el-button>
        <el-button type="success" @click="articleSetting">大咖专区置顶设置</el-button>
      </div>
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

    <el-dialog v-model="dialogContent">
      <span>文章内容</span>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogContent = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 设置点赞显示类型 -->
    <el-dialog title="提示" v-model="dialogPraiseType" size="tiny">
      <span class="button-wrapper">
        <button class="button">按点赞量真实数据显示</button>
        <button class="button">按点赞量修改数据显示</button>
      </span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogPraiseType = false">取 消</el-button>
    <el-button type="primary" @click="dialogPraiseType = false">确 定</el-button>
  </span>
    </el-dialog>


    <!-- 大咖专区置顶设置 -->
    <el-dialog title="大咖专区推荐文章显示设置(允许为空)" v-model="dialogArticle" size="tiny">
      <template v-for="(val, key) in articleFormList">
        <el-form :model="val.form">
          <el-form-item :label="val.form.name">
            <el-input v-model="val.form.title" auto-complete="off">
              <el-button slot="append" icon="delete" @click="deleteInput(val.form.id, key)"></el-button>
            </el-input>
          </el-form-item>
          </el-form-item>
        </el-form>
      </template>
      <div slot="footer" class="dialog-footer-add">
        <div class="addArticle">
          <el-button @click="addForm" type="success">添加一条</el-button>
        </div>
        <div>
          <el-button @click="dialogArticle = false">取 消</el-button>
          <el-button type="primary" @click="dialogArticle = false">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        buttonList: ['全部', '个股', '教程', '板块', '策略'],
        loading: false, // 切换导航，显示加载
        tableData: [
          {
            id: '101',
            userID: '10100',
            title: '股票入门基础知识视频',
            type: '个股',
            praise: '1655',
            comment: '245',
            money: '1660',
            display: '显示',
            time: '2017年2月28日—2017年3月6日'
          },
          {
            id: '101',
            userID: '10100',
            title: '新手炒股从零开始学炒股',
            type: '个股',
            praise: '2655',
            comment: '445',
            money: '3660',
            display: '显示',
            time: '2017年2月28日—2017年3月6日'
          },
          {
            id: '101',
            userID: '10100',
            title: '股票入门基础知识视频',
            type: '个股',
            praise: '6655',
            comment: '645',
            money: '6660',
            display: '显示',
            time: '2017年2月28日—2017年3月6日'
          }
        ],
        inputAccount: '',
        dialogContent: false, // 查看文章
        dialogPraiseType: false, // 设置点赞数量
        dialogArticle: false,  // 文章置顶设置
        // 推荐文章设置
        articleFormList: [
          {
            form: {
              id: 1,
              name: '推荐1',
              title: ''
            }
          },
          {
            form: {
              id: 2,
              name: '推荐2',
              title: ''
            }
          }, {
            form: {
              id: 3,
              name: '推荐3',
              title: ''
            }
          }
        ]
      }
    },
    methods: {
      // 导航菜单
      navTab (key) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1000)
      },
      // 搜索
      handleIconClick () {
      },
      // 表格多选，处理
      handleSelectionChange () {
      },
      // 查看文章内容
      look (id) {
        this.dialogContent = true
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
      // 修改虚拟点赞数量
      praiseNum (id) {
        this.$prompt('请输入点赞量', '修改虚拟点赞数量', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\d/,
          inputErrorMessage: '格式不正确'
        }).then(({value}) => {
          this.$message({
            type: 'success',
            message: '虚拟点赞数量是: ' + value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
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
      },
      // 点赞显示类型
      praiseTypeSetting () {
        this.dialogPraiseType = true
      },
      articleSetting () {
        this.dialogArticle = true
      },
      // 删除推荐文章
      deleteInput (id, key) {
        this.articleFormList.splice(key, 1)
        for (let i = 0; i < this.articleFormList.length; i++) {
          this.articleFormList[i].form.name = `推荐${i + 1}`
        }
      },
      // 添加一条文章表单
      addForm () {
        let length = this.articleFormList.length
        let newForm = {
          form: {
            id: length,
            name: `推荐${length + 1}`,
            title: ''
          }
        }
        console.log(newForm)
        this.articleFormList.push(newForm)
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
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      .button {
        display: inline-block;
        margin: 0;
        padding: 10px 15px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #bfcbd9;
        text-align: center;
        box-sizing: border-box;
        border-right: none;
        outline: 0;
        font-size: 14px;
        color: #1f2d3d;

        &:first-child {
          border-radius: 4px 0 0 4px;
        }

        &:last-child {
          border-right: 1px solid #bfcbd9;
          border-radius: 0 4px 4px 0;
        }

        &:hover, &:focus {
          color: #fff;
          background-color: #20a0ff;
          border-color: #20a0ff;
        }
      }

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

      .button-wrapper {
        font-size: 0;

        .button {
          display: inline-block;
          margin: 0;
          padding: 10px 15px;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 1px solid #bfcbd9;
          text-align: center;
          box-sizing: border-box;
          border-right: none;
          outline: 0;
          font-size: 14px;
          color: #1f2d3d;

          &:first-child {
            border-radius: 4px 0 0 4px;
          }

          &:last-child {
            border-right: 1px solid #bfcbd9;
            border-radius: 0 4px 4px 0;
          }

          &:hover, &:focus {
            color: #fff;
            background-color: #20a0ff;
            border-color: #20a0ff;
          }
        }
      }

      .el-form {
        .el-form-item {
          display: flex;
          justify-content: center;

          .el-input {
            width: 300px;
          }
        }
      }

      .dialog-footer-add {
        display: flex;
        justify-content: space-around;
        margin-top: -20px;
      }
    }
  }
</style>
