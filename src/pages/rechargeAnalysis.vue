<template>
  <div class="main">
    <header class="header">
      <header class="title">充值统计</header>
      <section class="section">
        <div class="PieChart">
          <PieChart
            :data="pieData"
          />
        </div>


      </section>
      <section class="pie-line">
        <p>
          <span>时间</span>
          <span>
            <el-button-group>
          <template v-for="(val, key) in buttonList">
            <el-button @click="rechargeDateTypeSwitch(key)">{{val}}</el-button>
          </template>
        </el-button-group>
          </span>
        </p>
        <div class="rechargeLineChartWrapper">
          <rechargeLineChart
            :data="rechargeLineData"
          />
        </div>
      </section>
    </header>
    <section class="section">
      <header class="title">详细数据统计</header>
      <el-table
        border
        :data="rechargeTableData"
        style="width: 100%;">
        <el-table-column
          prop="Total"
          label="充值"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="charges"
          label="手续费"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="yesterday"
          label="昨日充值"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="month"
          label="本月充值"
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
  import G2 from 'g2'
  import createG2 from 'g2-vue'

  // 详细统计折线图
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

  // 充值统计折线图

  let rechargeLineData = [
    {'日期': '2017-3-21', '充值金额': 45660, '充值方式': '支付宝'},
    {'日期': '2017-3-22', '充值金额': 66660, '充值方式': '支付宝'},
    {'日期': '2017-3-23', '充值金额': 15660, '充值方式': '支付宝'},
    {'日期': '2017-3-24', '充值金额': 26560, '充值方式': '支付宝'},
    {'日期': '2017-3-25', '充值金额': 45660, '充值方式': '支付宝'},
    {'日期': '2017-3-26', '充值金额': 68960, '充值方式': '支付宝'},
    {'日期': '2017-3-21', '充值金额': 35660, '充值方式': '微信'},
    {'日期': '2017-3-22', '充值金额': 56660, '充值方式': '微信'},
    {'日期': '2017-3-23', '充值金额': 25660, '充值方式': '微信'},
    {'日期': '2017-3-24', '充值金额': 16560, '充值方式': '微信'},
    {'日期': '2017-3-25', '充值金额': 35660, '充值方式': '微信'},
    {'日期': '2017-3-26', '充值金额': 28960, '充值方式': '微信'},
    {'日期': '2017-3-21', '充值金额': 15660, '充值方式': '京东'},
    {'日期': '2017-3-22', '充值金额': 46660, '充值方式': '京东'},
    {'日期': '2017-3-23', '充值金额': 35660, '充值方式': '京东'},
    {'日期': '2017-3-24', '充值金额': 26560, '充值方式': '京东'},
    {'日期': '2017-3-25', '充值金额': 85660, '充值方式': '京东'},
    {'日期': '2017-3-26', '充值金额': 78960, '充值方式': '京东'}
  ]

  const rechargeLineChart = createG2(chart => {
    chart.line().position('日期*充值金额').color('充值方式', ['#4E7CCC', '#36B3C3', '#F9815C']).shape('line').size(2)
    chart.render()
  })

  // 饼图

  let pieData = [
    {name: '支付宝充值', value: 50000},
    {name: '微信充值', value: 30000},
    {name: '京东充值', value: 20000}
  ]
  const Stat = G2.Stat

  const PieChart = createG2(chart => {
    chart.source(pieData)
    // 重要：绘制饼图时，必须声明 theta 坐标系
    chart.coord('theta', {
      radius: 1 // 设置饼图的大小
    })
    chart.legend('name', {
      position: 'bottom',
      itemWrap: true,
      formatter: function (val) {
        for (var i = 0, len = pieData.length; i < len; i++) {
          var obj = pieData[i]
          if (obj.name === val) {
            return val + ': ' + obj.value
          }
        }
      }
    })
    chart.tooltip({
      title: null,
      map: {
        value: 'value'
      }
    })
    chart.intervalStack()
      .position(Stat.summary.percent('value'))
      .color('name', ['#4E7CCC', '#36B3C3', '#F9815C'])
      .label('name*..percent', function (name, percent) {
        percent = (percent * 100).toFixed(2) + '%'
        return name + ' ' + percent
      })
    chart.render()
  })

  export default {
    props: {},
    data () {
      return {
        pieData: pieData,
        rechargeLineData: rechargeLineData,
        lineData: lineData,
        rechargeTableData: [
          {
            Total: '8555010',
            charges: '159560',
            yesterday: '55530',
            month: '99990'
          }
        ],
        buttonList: ['按日', '按周', '按月']
      }
    },
    methods: {
      // 充值统计
      rechargeDateTypeSwitch (key) {
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
      },
      // 详细统计
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
      PieChart,
      rechargeLineChart,
      LineChart
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .main {

    .header {
      padding: 10px 0 10px 30px;
      .title {
        font-size: 20px;
        line-height: 40px;
      }

      .section {
        display: flex;
        justify-content: center;

        .order-wrapper {
          width: 400px;
          .order {
            width: 100%;
            height: 200px;
            text-align: left;
            cursor: pointer;
          }

          .order-title {
            margin: 0;
            width: 100%;
            line-height: 40px;
            font-size: 18px;
            color: #fff;
          }

          .content-wrapper {
            padding: 20px 0;
            width: 100%;
            background-color: #fff;
            color: #333;
          }
          .order-total {
            display: flex;
            justify-content: center;
            line-height: 40px;
            font-size: 18px;
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;

            span {
              width: 50%;
              &:first-child {
                text-align: right;
              }
            }
          }
          .order.first {
            background-color: #00aaef;
            box-shadow: 0 4px 6px 2px #00aaef;
          }
        }

        .PieChart {
          width: 50%;
        }
      }

      .pie-line{
        .rechargeLineChartWrapper{
          box-sizing: border-box;
          padding-right: 10px;
        }
      }
    }

    .section {
      padding: 10px 0 30px 30px;

      .title {
        font-size: 20px;
        line-height: 40px;
      }

    }
  }

  .el-button{
    padding: 10px 25px;

    &:first-child{
      margin-left: 10px;
    }
  }
</style>
