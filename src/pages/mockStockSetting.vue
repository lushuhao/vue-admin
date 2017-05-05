<template>
  <div class="main">
    <header class="header">模拟炒股手续费设置</header>
    <el-form :model="form" ref="form" :rules="rules" label-width="100px">
      <el-form-item
        prop="fightSetting1"
        label="券商手续费">
        <el-input v-model.number="form.fightSetting1"></el-input>
        <span class="red">%</span>
        <span class="desc">买入、卖出手续费=买入、卖出价*股数*佣金费率</span>
      </el-form-item>
      <el-form-item
        prop="fightSetting2"
        label="印花税费率">
        <el-input v-model.number="form.fightSetting2"></el-input>
        <span class="red">%</span>
        <span class="desc">印花税=卖出价*股数*0.1%</span>
      </el-form-item>
      <el-form-item
        prop="fightSetting3"
        label="过户费费率">
        <el-input v-model.number="form.fightSetting3"></el-input>
        <span class="red">%</span>
        <span class="desc">过户费=股数*0.1%</span>
      </el-form-item>
    </el-form>
    <footer class="footer">
      <el-button @click="reset">重置</el-button>
      <el-button type="primary" @click="submit">确认提交</el-button>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        form: {
          fightSetting1: '0.00',
          fightSetting2: '0.00',
          fightSetting3: '0.00'
        },
        rules: {
          fightSetting1: [
            {required: true, message: '请输入手续费费率'},
            {min: 0, max: 100, type: 'number', message: '请将费率设置为0-100', trigger: 'blur,change'}
          ],
          fightSetting2: [
            {required: true, message: '请输入印花税费率'},
            {min: 0, max: 100, type: 'number', message: '请将费率设置为0-100', trigger: 'blur,change'}
          ],
          fightSetting3: [
            {required: true, message: '请输入过户费费率'},
            {min: 0, max: 100, type: 'number', message: '请将费率设置为0-100', trigger: 'blur,change'}
          ]
        }
      }
    },
    methods: {
      reset () {
        this.form = {
          fightSetting1: 0.00,
          fightSetting2: 0.00,
          fightSetting3: 0.00
        }
      },
      submit () {
        this.$confirm('请认真核对确认无误后提交修改!', '提示', {
          confirmButtonText: '确认修改',
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
  .main {
    padding: 20px 0 0 30px;
    width: 100%;
    color: #333;

    .header {
      line-height: 40px;
      color: #000;
    }

    .el-form {
      padding-top: 20px;
    }

    .el-input {
      width: 200px;
      padding: 0 5px;
      vertical-align: middle;
    }

    .red {
      padding-right: 10px;
      color: red;
      vertical-align: middle;
    }
    .desc {
      color: #666;
      font-size: 14px;
      vertical-align: middle;
    }

    .footer {
      display: flex;
      justify-content: space-around;
      width: 400px;

    }

  }
</style>
