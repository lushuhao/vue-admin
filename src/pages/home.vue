<template>
  <div class="main">

    <PieChart
      :data="pieData"
    />

    <lineChart
      :data="lineData"
    />
  </div>
</template>

<script type="text/ecmascript-6">
  import G2 from 'g2'
  import createG2 from 'g2-vue'

  let pieData = [
    {name: 'Microsoft Internet Explorer', value: 56.33},
    {name: 'Chrome', value: 24.03},
    {name: 'Firefox', value: 10.38},
    {name: 'Safari', value: 4.77},
    {name: 'Opera', value: 0.91},
    {name: 'Proprietary or Undetectable', value: 0.2}
  ]
  const Stat = G2.Stat

  const PieChart = createG2(chart => {
    chart.source(pieData)
    // 重要：绘制饼图时，必须声明 theta 坐标系
    chart.coord('theta', {
      radius: 0.8 // 设置饼图的大小
    })
    chart.legend('name', {
      position: 'bottom',
      itemWrap: true,
      formatter: function (val) {
        for (var i = 0, len = pieData.length; i < len; i++) {
          var obj = pieData[i]
          if (obj.name === val) {
            return val + ': ' + obj.value + '%'
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
      .color('name')
      .label('name*..percent', function (name, percent) {
        percent = (percent * 100).toFixed(2) + '%'
        return name + ' ' + percent
      })
    chart.render()
  })

// -------------------------------------------

  let lineData = [
    {'time': '3-21', 'pm25': 10},
    {'time': '3-22', 'pm25': 40}
  ]

  const LineChart = createG2(chart => {
    chart.line().position('time*pm25').color('pm25').shape('spline').size(2)
    chart.render()
  })

  export default {
    props: {},
    data () {
      return {
        pieData: pieData,
        lineData: lineData
      }
    },
    methods: {},
    created () {
    },
    components: {
      PieChart,
      LineChart
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .main {
  }
</style>
