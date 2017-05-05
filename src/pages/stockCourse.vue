<template>
  <div class="stockCourse">
    <header class="header">
      <div class="wrapper">
        <el-button type="primary" icon="plus" @click="dialogAdd = true">添加教程</el-button>
        <span class="refresh">
        <i class="el-icon-loading" @click="refresh"></i><span>刷新 - 共3条数据</span>
      </span></div>

      <el-input
        placeholder="股票名称/讲师姓名/培训地点"
        icon="search"
        v-model="inputAccount"
        :on-icon-click="handleIconClick">
      </el-input>
    </header>

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
        prop="classTitle"
        label="课程标题"
        min-width="400">
      </el-table-column>
      <el-table-column
        prop="time"
        label="培训时间"
        min-width="300">
      </el-table-column>
      <el-table-column
        prop="address"
        label="培训地点"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="讲师姓名"
        min-width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="报名总人数"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="peopleTotal(scope.row.id)"
            type="text"
            size="small">{{scope.row.peopleTotal}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="是否显示"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="display(scope.row.id)"
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

    <!-- 添加教程 -->
    <el-dialog title="添加教程" v-model="dialogAdd">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form-wrapper">
        <el-form-item label="教程标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="标题图片" prop="img">
          <el-upload
            class="upload-img"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="form.fileList"
            :before-upload="beforeImgUpload"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="培训地点" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="讲师姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                              style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="培训价格" prop="money">
          <el-input v-model.number="form.money"></el-input>
        </el-form-item>
        <el-form-item label="教程简介" prop="desc">
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
            id: '101',
            classTitle: '股票入门基础知识视频教程 新手炒股从零开始学炒股',
            time: '2017年2月28日 - 2017年3月6日',
            address: '上海',
            name: '张大师',
            peopleTotal: '33',
            display: '显示'
          }, {
            id: '102',
            classTitle: '炒股必学K线入门基础知识-K线技术分析-K线组合形态-K',
            time: '2017年2月28日 - 2017年3月6日',
            address: '浙江',
            name: '李大师',
            peopleTotal: '88',
            display: '隐藏'
          }, {
            id: '103',
            classTitle: '别做正常的傻瓜-为什么多数人炒股亏钱？',
            time: '2017年2月28日 - 2017年3月6日',
            address: '北京',
            name: '刘大师',
            peopleTotal: '36',
            display: '显示'
          }
        ],
        inputAccount: '',
        dialogAdd: false, // 弹框-添加
        loading: false,
        form: {
          title: '',
          fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }], // 上传图片
          name: '',
          date1: '',
          date2: '',
          money: '',
          type: '',
          desc: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入教程标题', trigger: 'blur'},
            {min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur,change'}
          ],
          img: [
            {type: 'array', required: true, message: '请选择一个教程图片', trigger: 'change'}
          ],
          address: [
            {required: true, message: '请输入培训地点', trigger: 'blur'},
            {min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur,change'}
          ],
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur,change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          money: [
            {required: true, message: '请输入价格'},
            {max: 1e8, type: 'number', message: '请输入0-100000000之间的整数', trigger: 'blur,change'}
          ],
          desc: [
            {required: true, message: '请输入教程简介', trigger: 'blur'}
          ]
        }
      }
    },
    computed: {},
    methods: {
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
  .stockCourse {
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
  .stockCourse {
    .el-dialog {
      width: 700px;
    }
    .el-dialog__header, .el-dialog__body {
      padding: 30px 50px 0 20px;
    }
  }
</style>

