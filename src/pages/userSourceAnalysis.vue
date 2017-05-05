<template>
  <div class="main">
    <h1 class="title">用户总注册量分析</h1>
    <header class="header">
      <div class="order-wrapper">
        <div class="order first">
          <p class="order-title">总注册用户人数</p>
          <p class="order-total">1000</p>
        </div>
      </div>
      <div class="chart-wrapper">
        <PieChart :data="pieData"/>
      </div>
    </header>
    <h1 class="title">昨日用户注册量统计分析</h1>
    <section class="section">
      <div class="order-wrapper">
        <div class="order fourth">
          <p class="order-title">昨日新增人数</p>
          <p class="order-total">6666</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order second">
          <p class="order-title">昨日新增有效用户占比</p>
          <p class="order-total">10%</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order third">
          <p class="order-title">昨日新增活跃用户占比</p>
          <p class="order-total">15%</p>
        </div>
      </div>
    </section>
    <h1 class="title">用户地区统计<span class="desc">按照地级市统计</span></h1>
    <footer>
      <el-cascader
        :options="options"
        clearable
        expand-trigger="hover"
        placeholder="支持中文/拼音搜索"
      ></el-cascader>
      <el-table
        v-loading="tableLoading"
        element-loading-text="拼命加载中"
        border stripe
        :data="tableData"
        style="width: 100%;">
        <el-table-column
          prop="city"
          label="城市"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="registerPeople"
          label="注册人数"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="registerRate"
          label="注册人数占比"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="activePeople"
          label="活跃人数"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="validPeople"
          label="有效用户"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="validRate"
          label="总有效用户占比"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="todayAdd"
          label="当天新增人数"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="todayAddRate"
          label="当天新增人数占比"
          min-width="150">
        </el-table-column>
      </el-table>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Stat} from 'g2'
  import createG2 from 'g2-vue'

  let pieData = [
    {name: '经纪人邀请人数', value: 200},
    {name: '自注册人数', value: 300},
    {name: '自邀请人数', value: 500}
  ]

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
        tableLoading: false,
        tableData: [
          {
            city: '上海',
            registerPeople: '20311',
            registerRate: '5%',
            activePeople: '6654',
            validPeople: '655',
            validRate: '10%',
            todayAdd: '788',
            todayAddRate: '8%'
          }, {
            city: '北京',
            registerPeople: '20311',
            registerRate: '5%',
            activePeople: '6654',
            validPeople: '655',
            validRate: '10%',
            todayAdd: '788',
            todayAddRate: '8%'
          }, {
            city: '广州',
            registerPeople: '20311',
            registerRate: '5%',
            activePeople: '6654',
            validPeople: '655',
            validRate: '10%',
            todayAdd: '788',
            todayAddRate: '8%'
          }, {
            city: '广州',
            registerPeople: '20311',
            registerRate: '5%',
            activePeople: '6654',
            validPeople: '655',
            validRate: '10%',
            todayAdd: '788',
            todayAddRate: '8%'
          }
        ],
        // 地域二级联动
        options: [
          {
            value: 'zhixiashi',
            label: '直辖市',
            children: [
              {
                value: 'beijing',
                label: '北京'
              },
              {
                value: 'shanghai',
                label: '上海'
              },
              {
                value: 'tianjin',
                label: '天津'
              },
              {
                value: 'chongqing',
                label: '重庆'
              }
            ]
          },
          {
            value: 'hebeisheng',
            label: '河北省',
            children: [
              {
                value: 'beijing',
                label: '石家庄'
              },
              {
                value: 'shanghai',
                label: '保定'
              },
              {
                value: 'tianjin',
                label: '秦皇岛'
              },
              {
                value: 'chongqing',
                label: '邯郸'
              }
            ]
          }
        ]
      }
    },
    methods: {},
    created () {
    },
    components: {
      PieChart
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .main {
    padding: 30px;

    .title {
      margin: 0;
      padding-bottom: 20px;
      font-size: 20px;
      color: #333;

      .desc {
        padding-left: 10px;
        vertical-align: middle;
        font-size: 12px;
        font-weight: 400;
        color: #666;
      }
    }

    .order-wrapper {
      width: 20%;
      min-width: 200px;

      &:not(:first-child) {
        margin-left: 30px;
      }

      .order {
        width: 100%;
        height: 150px;
        text-align: center;
        cursor: pointer;

        .order-title {
          margin: 0;
          width: 100%;
          line-height: 40px;
          font-size: 18px;
          color: #fff;
        }

        .order-total {
          margin: 0;
          width: 100%;
          line-height: 110px;
          font-size: 48px;
          background-color: #fff;
          color: #6b6b6b;
        }
        &.first {
          background-color: #00aaef;
          box-shadow: 0 4px 4px 2px #00aaef;
        }
        &.second {
          background-color: #FF3300;
          box-shadow: 0 4px 4px 2px #ff3300;
        }
        &.third {
          background-color: #00b259;
          box-shadow: 0 4px 4px 2px #00b259;
        }
        &.fourth {
          background-color: #ff6600;
          box-shadow: 0 4px 4px 2px #ff6600;
        }
      }
    }

    .header {
      display: flex;

      .chart-wrapper {
        flex: 1;
      }
    }

    .section {
      display: flex;
      padding-bottom: 20px;
    }
  }

  .el-cascader {
    width: 300px;
    padding-bottom: 20px;
  }

</style>
