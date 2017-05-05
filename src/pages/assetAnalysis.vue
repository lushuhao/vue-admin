<template>
  <div class="main">
    <section class="section">
      <header class="title">乐币统计分析<span class="desc">每天24点统计一次数据</span></header>
      <el-table
        border
        :data="moneyTableData"
        style="width: 100%;">
        <el-table-column
          prop="moneyTotal"
          label="总发行乐币"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="recharge"
          label="充值"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="presented"
          label="赠送"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="circulate"
          label="当下总流通"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="consume"
          label="总消费"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="charges"
          label="平台收取的手续费"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="Deficit"
          label="模拟股票亏损"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="profit"
          label="模拟炒股总盈利"
          min-width="100">
        </el-table-column>
      </el-table>
      <footer class="footer">
        <p>
          <span>时间</span>
          <span>
            <el-button-group>
          <template v-for="(val, key) in buttonList">
            <el-button @click="dateTypeSwitch(key)">{{val}}</el-button>
          </template>
        </el-button-group>
          </span>
        </p>
        <lineChart
          :data="lineData"
        />
      </footer>
    </section>
    <section class="section">
      <header class="title">体验币统计分析<span class="desc">每天24点统计一次数据</span></header>
      <el-table
        border
        :data="virtualTableData"
        style="width: 100%;">
        <el-table-column
          prop="virtualTotal"
          label="总发行体验币"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="register"
          label="注册奖励"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="invitation"
          label="邀请注册奖励"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="balance"
          label="存量"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="consume"
          label="总消耗"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="profit"
          label="用户赚取的乐币"
          min-width="100">
        </el-table-column>
      </el-table>
      <footer class="footer">
        <p>
          <span>时间</span>
          <span>
            <el-button-group>
          <template v-for="(val, key) in buttonList">
            <el-button @click="dateTypeSwitch(key)">{{val}}</el-button>
          </template>
        </el-button-group>
          </span>
        </p>
        <lineChart
          :data="lineData"
        />
      </footer>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import createG2 from 'g2-vue'

  let lineData = [
    {'日期': '2017-3-21', '统计量': 35660},
    {'日期': '2017-3-22', '统计量': 66660},
    {'日期': '2017-3-23', '统计量': 15660},
    {'日期': '2017-3-24', '统计量': 26560},
    {'日期': '2017-3-25', '统计量': 45660},
    {'日期': '2017-3-26', '统计量': 68960}
  ]

  const LineChart = createG2(chart => {
    chart.line().position('日期*统计量').shape('line').size(2)
    chart.render()
  })

  export default {
    props: {},
    data () {
      return {
        lineData: lineData,
        moneyTableData: [
          {
            moneyTotal: '8555010',
            recharge: '159560',
            presented: '55530',
            circulate: '99990',
            consume: '8800',
            charges: '4000',
            Deficit: '9980',
            profit: '6600'
          }
        ],
        virtualTableData: [
          {
            virtualTotal: '8555010',
            register: '159560',
            invitation: '55530',
            balance: '99990',
            consume: '8800',
            profit: '6600'
          }
        ],
        buttonList: ['按日', '按周', '按月']
      }
    },
    methods: {
      dateTypeSwitch (key) {
        switch (key) {
          case 0:
            this.lineData = [
              {'日期': '2017-3-21', '统计量': 45660},
              {'日期': '2017-3-22', '统计量': 36660},
              {'日期': '2017-3-23', '统计量': 15660},
              {'日期': '2017-3-24', '统计量': 26560},
              {'日期': '2017-3-25', '统计量': 45660},
              {'日期': '2017-3-26', '统计量': 68960}
            ]
            break
          case 1:
            this.lineData = [
              {'日期': '2017-3-21', '统计量': 25660},
              {'日期': '2017-3-22', '统计量': 36660},
              {'日期': '2017-3-23', '统计量': 65660},
              {'日期': '2017-3-24', '统计量': 26560},
              {'日期': '2017-3-25', '统计量': 45660},
              {'日期': '2017-3-26', '统计量': 58960}
            ]
            break
          case 2:
            this.lineData = [
              {'日期': '2017-3-21', '统计量': 15660},
              {'日期': '2017-3-22', '统计量': 36660},
              {'日期': '2017-3-23', '统计量': 85660},
              {'日期': '2017-3-24', '统计量': 26560},
              {'日期': '2017-3-25', '统计量': 45660},
              {'日期': '2017-3-26', '统计量': 68960}
            ]
            break
        }
      }
    },
    created () {
    },
    components: {
      LineChart
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .main {

    .section {
      padding: 10px 0 30px 30px;

      .title {
        font-size: 20px;
        line-height: 40px;

        .desc {
          padding-left: 10px;
          line-height: 40px;
          font-size: 12px;
          color: #666;
        }
      }

      .el-button{
        padding: 10px 25px;

        &:first-child{
          margin-left: 10px;
        }
      }
    }
  }
</style>
