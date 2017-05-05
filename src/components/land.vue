<template>
  <div class="all">
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp</div></el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <div class="center">
            <div class="logo">
              <img src="~assets/img/logo.png" style="vertical-align:middle;margin-bottom: 10px;">
              <span style="display: inline-block;font-size:30px;margin-left:10px;">官网管理中心</span>
            </div>
            <div class="InputBox">
              <div class="AccountNumber">
                <el-input placeholder="请输入账号" size="large" :number="true" v-model="accountNumber"></el-input>
              </div>
              <div class="Password">
                <el-input type="password" size="large" placeholder="请输入密码" :number="true" v-model=passwordNumber></el-input>
              </div>
              <div class="Land" @click="LandMsg">
                <el-button type="primary" size="large" width="100%">登陆</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp</div></el-col>
    </el-row>
  </div>
</template>
<style scoped>
  .all{background: url("~assets/img/bg-login.jpg") repeat;height: 100%;position: relative;}
  .center{margin:0 auto;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;margin-top: 200px;}
  .center h4{color: #478FCA;text-align: center;}
  .logo{padding-left: 100px;}
  .Password,.Land{margin-top: 15px;}
  .Land button{width: 100%}
</style>
<script type="text/ecmascript-6">
  import { mapActions, mapGetters } from 'vuex'
  import store from '../vuex/store'
  import * as types from '../vuex/mutation-types'

  export default{
    data () {
      return {
        accountNumber: '',
        passwordNumber: '',
        err: '0'
      }
    },
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    methods: {
      ...mapActions([
        'actionsUserlogin'
      ]),
      LandMsg () {
        if (('' + this.accountNumber).length > 2 && ('' + this.passwordNumber).length > 5) {
          let accountNumber = this.accountNumber
          let passwordNumber = this.passwordNumber
          this.actionsUserlogin([accountNumber, passwordNumber]).then((data) => {
            let info = {
              userId: data.once.userId,
              token: data.once.token
            }
            store.commit(types.UPDATE_USER_TOKEN, info)
            // window.location.replace('/home')
            console.log('this.isLogin', this.isLogin)
            console.log('data', data, store)
            this.$message({
              showClose: true,
              message: '登陆成功',
              type: 'success'
            })
          }).catch((err) => {
            this.err = err
          })
        } else {
          this.$message({
            showClose: true,
            message: '输入正确账户',
            type: 'error'
          })
        }
      }
    },
    watch: {
      'err': {
        deep: true,
        handler (newVal, oldVal) {
          if (newVal) {
            this.$message({
              showClose: true,
              message: newVal,
              type: 'error'
            })
            this.err = 0
          }
        }
      }
    },
    store
  }
</script>
