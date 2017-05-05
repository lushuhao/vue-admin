<template>
  <div class="main">
    <header class="header">股神对战收取赢家盈利的手续费百分比</header>
    <div class="input-wrapper">
      <el-form :model="form" ref="form" label-width="100px">
        <el-form-item
          prop="fightSetting"
          label="手续费费率"
          :rules="[
      { required: false, message: '请输入手续费费率' },
      { min: 0, max: 100, type: 'number', message: '请将费率设置为0-100', trigger: 'blur,change' }
    ]">
          <el-input v-model.number="form.fightSetting"></el-input>
          <span class="red">%</span>
          <span class="desc">手续费=押注乐币*费率</span>
        </el-form-item>
      </el-form>
    </div>
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
          fightSetting: '0.00'
        }
      }
    },
    methods: {
      reset () {
        this.form.fightSetting = Number('0.00')
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

    .input-wrapper {
      display: flex;
      align-items: center;
      margin: 20px 0;

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
    }

    .footer {

      .el-button:last-child {
        margin-left: 150px;
      }
    }
  }
</style>
