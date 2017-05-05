<template>
  <div class="stockApplication">
    <header class="header">
      <div class="wrapper">
        <el-button type="success" @click="exportTable">EXCEL导出</el-button>
      </div>

      <el-input
        placeholder="课程名称/讲师姓名/手机"
        icon="search"
        v-model="inputAccount"
        :on-icon-click="handleIconClick">
      </el-input>
    </header>

    <el-table
      id="table"
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
        label="教程编号"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="classTitle"
        label="学习课程"
        min-width="400">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="讲师"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="客户姓名"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="QQ"
        label="QQ号码"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="WeChat"
        label="微信号码"
        min-width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="look(scope.row.id)"
            type="text"
            size="small">查看/编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <footer class="footer">

      <el-button :plain="true" type="danger" @click="deleteTip">删除</el-button>

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

    <!-- 查看/编辑教程 -->
    <el-dialog title="查看教程" v-model="dialogAdd">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form-wrapper">
        <el-form-item label="用户姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model.number="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="QQ号码" prop="qq">
          <el-input v-model.number="form.qq"></el-input>
        </el-form-item>
        <el-form-item label="微信号码" prop="WeChat">
          <el-input v-model="form.WeChat"></el-input>
        </el-form-item>
        <el-form-item label="学习课程" prop="classTitle">
          <el-input v-model="form.classTitle"></el-input>
        </el-form-item>
        <el-form-item label="讲师姓名" prop="teacher">
          <el-input v-model="form.teacher"></el-input>
        </el-form-item>
        <el-form-item label="教程编号" prop="classID">
          <el-input v-model="form.classID"></el-input>
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
            id: '101',
            classTitle: '股票入门基础知识视频教程 新手炒股从零开始学炒股',
            teacher: '张大师',
            name: '小王',
            phone: '15955002233',
            QQ: '1100256589',
            WeChat: 'xx5566'
          },
          {
            id: '102',
            classTitle: '股票入门基础知识视频教程 新手炒股从零开始学炒股',
            teacher: '李大师',
            name: '小王',
            phone: '15955002233',
            QQ: '1100256589',
            WeChat: 'xx5566'
          },
          {
            id: '103',
            classTitle: '股票入门基础知识视频教程 新手炒股从零开始学炒股',
            teacher: '张大师',
            name: '小王',
            phone: '15955002233',
            QQ: '1100256589',
            WeChat: 'xx5566'
          }
        ],
        inputAccount: '',
        typeValue: '',
        dialogAdd: false, // 弹框-添加
        loading: false,
        form: {
          name: '',
          phone: '',
          qq: '',
          WeChat: '',
          classTitle: '',
          teacher: '',
          classID: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入价格'},
            {min: 10000000000, max: 200000000000, type: 'number', message: '请输入11位数字', trigger: 'blur'}
          ],
          qq: [
            {required: false, message: '请输入QQ号'},
            {min: 10000, max: 2000000000000, type: 'number', message: '长度在 5 到 13 个数字', trigger: 'blur'}
          ],
          WeChat: [
            {required: false, message: '请输入微信号', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ],
          classTitle: [
            {required: true, message: '请输入教程标题', trigger: 'blur'},
            {min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur'}
          ],
          teacher: [
            {required: true, message: '请输入讲师姓名', trigger: 'blur'},
            {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    computed: {},
    methods: {
      exportTable () {
        // 整个表格拷贝到EXCEL中
      },
      // 选择表格
      handleSelectionChange () {
      },
      // 刷新
      refresh () {
        let icon = document.getElementsByClassName('el-icon-loading')
        icon[0].style.animation = 'rotating 1s ease-in-out 3'
        this.loading = true
        setTimeout(() => {
          icon[0].style.animation = 'none'
          this.loading = false
        }, 3000)
      },
      // 限制上传一张图片
      handleChange (file, fileList) {
        this.form.fileList = fileList.slice(-1)
      },
      // 上传大小
      beforeImgUpload (file) {
        const isJPGorPng = file.type === ('image/jpeg' || 'image/png')
        const isLt500KB = file.size / 1024 < 1024 / 2
        console.log(file.size / 1024)

        if (!isJPGorPng) {
          this.$message.error('上传头像图片只能是 JPG / PNG 格式!')
        }
        if (!isLt500KB) {
          this.$message.error('上传头像图片大小不能超过 500KB!')
        }
        return isJPGorPng && isLt500KB
      },
      // 查看/编辑账户
      look (id) {
        this.dialogAdd = true
      },
      // 查看报名人数
      peopleTotal (id) {
      },
      // 显示、隐藏
      display (id) {
      },
      // 分页
      handleSizeChange () {
      },
      handleCurrentChange () {
      },
      // 搜索账号
      handleIconClick (ev) {
        console.log(ev)
      },
      // 删除提示
      deleteTip () {
        this.$confirm(`您确定要删除?`, '提示', {
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
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .stockApplication {
    padding: 30px;
    width: 100%;
    text-align: center;

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      line-height: 36px;

      .el-button--primary {
        margin-right: 20px;
      }
      .el-input {
        width: 200px;
      }

      .refresh {
        color: #333;

        .el-icon-loading {
          padding: 5px;
          cursor: pointer;
          animation: none;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      .el-button {
        height: 30px;
        padding: 0 15px;
      }
    }

    .pagination {
    }

    .el-dialog__wrapper {
      .el-select {
        width: 100%;
      }

      .upload-img {
        text-align: left;
      }

    }
  }
</style>
<style lang="sass" rel="stylesheet/scss">
  .stockApplication {

    .el-dialog {
      width: 500px;
    }
    .el-dialog__header, .el-dialog__body {
      padding: 30px 50px 0 20px;
    }
  }
</style>

