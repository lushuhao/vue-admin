<template>
  <div class="main">
    <div class="wrapper">
      <div class="logo">
        <span class="img-wrapper"><img src="../assets/img/logo.png" alt=""></span><span class="name">{{name}}</span>
      </div>
      <div class="right">
        <div class="user-wrapper">
              <div class="img-wrapper">
                <img class="img" src="../assets/img/logo.png" alt="">
              </div>
          <span class="user-name">{{userName}}</span>
          <span><i class="el-icon-setting "></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        name: '后台管理',
        routerName: '经纪人管理',
        userName: '管理员'
      }
    },
    methods: {},
    created () {
    },
    components: {}
  }
</script>

<style rel="stylesheet/scss" lang="sass" scoped>
  .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #dcdcdc;
    .logo {
      min-width: 280px;
      .img-wrapper {
        padding: 0 20px;

        img {
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
      }

      .name {
        vertical-align: middle;
        font-size: 24px;
        color: #333;
      }
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;


    .user-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      width: 220px;
      padding-right: 30px;

      .img-wrapper {
        width: 26px;
        height:26px;
        border-radius: 50%;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
        }
      }

      .el-icon-setting{
        padding-top: 2px;
        font-size: 24px;
      }

      .user-name {
        padding: 0 5px;
        line-height: 1;
        white-space: nowrap;
        font-size: 24px;
        color: #333;
      }

      .icon-shezhi {
        font-size: 30px;
        color: #333;
      }
    }
  }
</style>
