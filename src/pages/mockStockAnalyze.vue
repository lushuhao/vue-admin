<template>
  <div class="mockStockAnalyze">
    <header class="header">
      <span>时间</span>
      <span class="wrapper">
        <el-button :plain="true" type="success">按日</el-button>
        <el-button :plain="true" type="warning">按周</el-button>
        <el-button :plain="true" type="info">按月</el-button>
      </span>
    </header>
    <section class="section">
      <template>
        <el-table
          :data="tableData"
          stripe border>
          <el-table-column
            prop="id"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="type"
            label="当前进入场次"
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="money"
            label="场次金额"
            min-width="100">
          </el-table-column>
          <el-table-column
            prop="peopleNum"
            label="场次人数"
            min-width="100">
          </el-table-column>
          <el-table-column
            prop="registerRate"
            label="总注册占比"
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="activeRate"
            label="活跃占比"
            min-width="100">
          </el-table-column>
          <el-table-column
            prop="position"
            label="平均持仓"
            min-width="100">
          </el-table-column>
          <el-table-column
            prop="earnings"
            label="平均盈亏"
            min-width="100">
          </el-table-column>
        </el-table>
      </template>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        tableData: [
          {
            id: '001',
            type: '乐币场',
            money: '10万',
            peopleNum: '566',
            registerRate: '6/7',
            activeRate: '60/78',
            position: '6520',
            earnings: '3300'
          }, {
            id: '002',
            type: '乐币场',
            money: '10万',
            peopleNum: '566',
            registerRate: '6/7',
            activeRate: '60/78',
            position: '6520',
            earnings: '3300'
          }, {
            id: '003',
            type: '乐币场',
            money: '10万',
            peopleNum: '566',
            registerRate: '6/7',
            activeRate: '60/78',
            position: '6520',
            earnings: '3300'
          }
        ]
      }
    },
    methods: {},
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .mockStockAnalyze {
    padding: 0 20px;
    width: 100%;

    .header {
      padding: 20px 0;
      .wrapper {
        padding-left: 20px;
      }
    }
    .section {

    }
  }
</style>

<style lang="sass" rel="stylesheet/scss">
  .mockStockAnalyze {

    .el-table {
      text-align: center;

      th {
        @extend .el-table
      }
    }

  }
</style>
