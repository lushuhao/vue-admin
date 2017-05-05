<template>
  <div class="main">
    <el-form label-width="100px" :rules="rules" ref="form" :model="form">
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ号码" prop="qq">
        <el-input v-model.number="form.qq"></el-input>
      </el-form-item>
    </el-form>
    <footer class="footer">
      <el-button :plain="true" type="warning" @click="reset">取消</el-button>
      <el-button :plain="true" type="success" @click="submit">确认</el-button>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        form: {
          phone: '',
          qq: ''
        },
        rules: {
          phone: [
            {required: true, message: '请输入联系电话', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur,change'}
          ],
          qq: [
            {required: true, message: '请输入QQ号码'},
            {min: 1e4, max: 1e13, type: 'number', message: '长度在 5 到 13 个数字', trigger: 'blur,change'}
          ]
        }

      }
    },
    methods: {
      init () {
        this.form = {
          phone: '',
          qq: ''
        }
      },
      // 取消
      reset () {
        this.init()
      },
      // 确认
      submit () {
      }
    },
    activated () {
      this.init()
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

    .el-input {
      width: 200px;
    }

    .footer {
      display: flex;
      justify-content: space-around;
      width: 350px;
      padding-top: 20px;
    }
  }
</style>
