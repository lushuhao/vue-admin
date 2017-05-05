<template>
  <div class="main">
    <section class="section">
      <h1 class="title">用户注册量</h1>
      <header class="header">
        <div class="order-wrapper">
          <div class="order first">
            <p class="order-title">总注册用户人数</p>
            <p class="order-total">88888</p>
          </div>
        </div>
        <div class="order-wrapper">
          <div class="order third">
            <p class="order-title">昨日新增人数</p>
            <p class="order-total">6666</p>
          </div>
        </div>
      </header>
      <section class="chart-wrapper">
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
        <LineChart :data="lineData"
        />
      </section>
    </section><section class="section">
      <h1 class="title">活跃用户统计<span class="desc">只要进入模拟炒股及股神对战就计算一次活跃量，同一用户不重复统计</span></h1>
      <header class="header">
        <div class="order-wrapper">
          <div class="order fourth">
            <p class="order-title">活跃用户总人数</p>
            <p class="order-total">88888</p>
          </div>
        </div>
        <div class="order-wrapper">
          <div class="order third">
            <p class="order-title">昨日活跃用户人数</p>
            <p class="order-total">6666</p>
          </div>
        </div>
      </header>
      <section class="chart-wrapper">
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
        <LineChart :data="lineData"
        />
      </section>
    </section>
    <section class="section">
      <h1 class="title">有效用户统计<span class="desc">累计充值>=100元默认为有效用户，一个用户ID只计算一次，按天，周月曲线通统计</span></h1>
      <header class="header">
        <div class="order-wrapper">
          <div class="order second">
            <p class="order-title">有效用户总人数</p>
            <p class="order-total">88888</p>
          </div>
        </div>
        <div class="order-wrapper">
          <div class="order third">
            <p class="order-title">昨日新增有效用户人数</p>
            <p class="order-total">6666</p>
          </div>
        </div>
        <div class="order-wrapper">
          <div class="order fourth">
            <p class="order-title">今日新增有效用户人数</p>
            <p class="order-total">6666</p>
          </div>
        </div>
      </header>
      <section class="chart-wrapper">
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
        <LineChart :data="lineData"
        />
      </section>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import createG2 from 'g2-vue'

  let lineData = [
    {'日期': '2017-3-21', '注册量': 35660},
    {'日期': '2017-3-22', '注册量': 66660},
    {'日期': '2017-3-23', '注册量': 15660},
    {'日期': '2017-3-24', '注册量': 26560},
    {'日期': '2017-3-25', '注册量': 45660},
    {'日期': '2017-3-26', '注册量': 68960}
  ]

  const LineChart = createG2(chart => {
    chart.line().position('日期*注册量').color('#00aaef').shape('line').size(2)
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
              {'日期': '2017-3-21', '注册量': 45660},
              {'日期': '2017-3-22', '注册量': 36660},
              {'日期': '2017-3-23', '注册量': 15660},
              {'日期': '2017-3-24', '注册量': 26560},
              {'日期': '2017-3-25', '注册量': 45660},
              {'日期': '2017-3-26', '注册量': 68960}
            ]
            break
          case 1:
            this.lineData = [
              {'日期': '2017-3-21', '注册量': 25660},
              {'日期': '2017-3-22', '注册量': 36660},
              {'日期': '2017-3-23', '注册量': 65660},
              {'日期': '2017-3-24', '注册量': 26560},
              {'日期': '2017-3-25', '注册量': 45660},
              {'日期': '2017-3-26', '注册量': 58960}
            ]
            break
          case 2:
            this.lineData = [
              {'日期': '2017-3-21', '注册量': 15660},
              {'日期': '2017-3-22', '注册量': 36660},
              {'日期': '2017-3-23', '注册量': 85660},
              {'日期': '2017-3-24', '注册量': 26560},
              {'日期': '2017-3-25', '注册量': 45660},
              {'日期': '2017-3-26', '注册量': 68960}
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
    padding: 30px;

    .section {
      .title {
        margin: 0;
        padding-bottom: 20px;
        font-size: 20px;
        color: #333;

        .desc{
          padding-left: 10px;
          vertical-align: middle;
          font-size: 12px;
          font-weight: 400;
          color: #666;
        }
      }

      .header {
        display: flex;
        padding-bottom: 20px;
        border-bottom: 1px dashed #dcdcdc;

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
