<template>
  <div class="main">
    <header class="header">
      <p class="tip">1.设置充值乐币与现金比例(100整数倍)</p>
      <p class="tip">2.设置邀请注册送体验币的数量</p>
    </header>
    <el-form :model="form" ref="form" :rules="rules" label-width="100px">
      <h1 class="title">充值乐币比例设置</h1>
      <el-form-item
        prop="fightSetting1"
        label="1 元 =">
        <el-input v-model.number="form.fightSetting1"></el-input>
        <span class="red">乐币</span>
      </el-form-item>
      <h1 class="title">首次充值乐币赠送比例设置</h1>
      <el-form-item
        prop="fightSetting2"
        label="总充值乐币">
        <el-input v-model.number="form.fightSetting2"></el-input>
        <span class="red">%</span>
        <span class="desc">首次充值赠送乐币按设置总金额占比赠送</span>
      </el-form-item>
      <h1 class="title">邀请注册赠送体验币</h1>
      <div class="item-wrapper">
        <el-form-item
          prop="fightSetting3"
          label="奖励推荐人">
          <el-input v-model.number="form.fightSetting3"></el-input>
          <span class="red">体验币</span>
        </el-form-item>
        <el-form-item
          prop="fightSetting4"
          label="奖励受邀人">
          <el-input v-model.number="form.fightSetting4"></el-input>
          <span class="red">体验币</span>
        </el-form-item>
      </div>
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
          fightSetting1: 100,
          fightSetting2: 0.00,
          fightSetting3: 0.00,
          fightSetting4: 0.00
        },
        rules: {
          fightSetting1: [
            {required: true, message: '请输入充值乐币比例'},
            {min: 0, type: 'number', message: '请将比例设置为大于0的数字', trigger: 'blur,change'}
          ],
          fightSetting2: [
            {required: true, message: '请输入首次充值乐币赠送比例'},
            {min: 0, max: 100, type: 'number', message: '请将赠送比例设置为0-100', trigger: 'blur,change'}
          ],
          fightSetting3: [
            {required: true, message: '请输入奖励推荐人体验币'},
            {min: 0, type: 'number', message: '请将奖励体验币设置为大于0的数字', trigger: 'blur,change'}
          ],
          fightSetting4: [
            {required: true, message: '请输入奖励受邀人体验币'},
            {min: 0, type: 'number', message: '请将奖励体验币设置为大于0的数字', trigger: 'blur,change'}
          ]
        }
      }
    },
    methods: {
      reset () {
        this.form = {
          fightSetting1: 100,
          fightSetting2: 0.00,
          fightSetting3: 0.00,
          fightSetting4: 0.00
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
      .tip {
        color: #666;
        line-height: 1;
      }
    }

    .el-form {

      .title {
        padding-top: 10px;
        font-size: 20px;
        color: #333;
        font-weight: 500;
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

      .item-wrapper{
        display: flex;

        .el-form-item:first-child{
          margin-right: 20px;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-around;
      width: 400px;

    }

  }
</style>
