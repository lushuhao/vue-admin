<template>
  <div class="navMenu">
    <el-menu default-active="1" class="el-menu-vertical" :router="true" :unique-opened="true" theme="light">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>后台用户管理</template>
        <el-menu-item index="backEndAccount">后台账号列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>客户管理</template>
        <el-menu-item index="clientAccount">客户账号列表</el-menu-item>
        <el-menu-item index="clientInfo">客户信息管理</el-menu-item>
        <el-menu-item index="clientConsumeInfo">客户消费明细</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>股票教程管理</template>
        <el-menu-item index="stockCourse">教程列表</el-menu-item>
        <el-menu-item index="stockApplication">报名列表</el-menu-item>
      </el-submenu>
      <!--<el-submenu index="4">-->
        <!--<template slot="title"><i class="el-icon-menu"></i>财经咨询管理</template>-->
        <!--<el-menu-item index="test">文章管理</el-menu-item>-->
      <!--</el-submenu>-->
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-menu"></i>股神对战管理</template>
        <el-menu-item index="fightList">对战统计表</el-menu-item>
        <el-menu-item index="fightDataSetting">数据设置</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-menu"></i>模拟炒股管理</template>
        <el-menu-item index="mockStockAnalyze">模拟炒股分析</el-menu-item>
        <el-menu-item index="mockStockSetting">数据设置</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-menu"></i>大咖专区管理</template>
        <el-menu-item index="masterArticle">专区文章管理</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title"><i class="el-icon-menu"></i>股友圈管理</template>
        <el-menu-item index="friendCircle">动态管理</el-menu-item>
        <el-menu-item index="friendCircleComment">评论管理</el-menu-item>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title"><i class="el-icon-menu"></i>客服中心</template>
        <el-menu-item index="clientFeedback">客户反馈</el-menu-item>
        <el-menu-item index="customerServiceSetting">客服设置</el-menu-item>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title"><i class="el-icon-menu"></i>财务管理</template>
        <el-menu-item index="assetAnalysis">平台资产分析</el-menu-item>
        <el-menu-item index="rechargeAnalysis">充值分析</el-menu-item>
        <el-menu-item index="rechargeRecord">充值及消费记录</el-menu-item>
      </el-submenu>
      <el-submenu index="11">
        <template slot="title"><i class="el-icon-menu"></i>数据统计</template>
        <el-menu-item index="userDataAnalysis">用户数据分析</el-menu-item>
        <el-menu-item index="userSourceAnalysis">用户来源分析</el-menu-item>
      </el-submenu>
      <el-submenu index="12">
        <template slot="title"><i class="el-icon-setting"></i>设置中心</template>
        <el-menu-item index="settingCarousel">轮播设置</el-menu-item>
        <el-menu-item index="settingFight">对战规则</el-menu-item>
        <el-menu-item index="settingStock">炒股规则</el-menu-item>
        <el-menu-item index="settingGeneralize">推广奖励</el-menu-item>
        <el-menu-item index="settingRegister">注册协议</el-menu-item>
        <el-menu-item index="settingHelp">帮助中心</el-menu-item>
        <el-menu-item index="settingAboutUS">关于我们</el-menu-item>
        <el-menu-item index="settingMoney">资金设置</el-menu-item>
        <el-menu-item index="settingMessage">平台消息</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {}
    },
    methods: {},
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .navMenu {
    width: 280px;
  }
</style>

<style lang="sass" rel="stylesheet/scss">
  .navMenu {
    .el-menu-item, .el-submenu__title {
      margin: 0 10px;
    }
    .el-menu-item:first-child {
      margin: 0 10px;
    }
    .el-menu-item.is-active {
      color: rgba(255, 0, 0, .7);
    }
  }
</style>
