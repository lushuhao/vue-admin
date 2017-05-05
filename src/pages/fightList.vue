<template>
  <div class="fightList">
    <header class="header">上证指数【000001】</header>
    <section class="back-end-order">
      <div class="order-wrapper">
        <div class="order first">
          <p class="order-title">当前押注总人数</p>
          <p class="order-total">{{informationMessage.amountTransactionPrice || 0}}</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order second">
          <p class="order-title">看涨人数</p>
          <p class="order-total">{{informationMessage.amountRealPayPrice || 0}}</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order third">
          <p class="order-title">看跌人数</p>
          <p class="order-total">{{informationMessage.amountLogisticsPrice || 0}}</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order fourth">
          <p class="order-title">押注总金额(元)</p>
          <p class="order-total">{{informationMessage.amountCostPrice || 0}}</p>
        </div>
      </div>
    </section>


    <header class="header">深证成指【399001】</header>
    <section class="back-end-order">
      <div class="order-wrapper">
        <div class="order first">
          <p class="order-title">当前押注总人数</p>
          <p class="order-total">{{informationMessage.amountTransactionPrice || 0}}</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order second">
          <p class="order-title">看涨人数</p>
          <p class="order-total">{{informationMessage.amountRealPayPrice || 0}}</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order third">
          <p class="order-title">看跌人数</p>
          <p class="order-total">{{informationMessage.amountLogisticsPrice || 0}}</p>
        </div>
      </div>
      <div class="order-wrapper">
        <div class="order fourth">
          <p class="order-title">押注总金额(元)</p>
          <p class="order-total">{{informationMessage.amountCostPrice || 0}}</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <header class="list-header">
        <el-button-group>
          <el-button @click="buttonTypeSwitch(1)">全部对战</el-button>
          <el-button @click="buttonTypeSwitch(2)">对战进行中</el-button>
          <el-button @click="buttonTypeSwitch(3)">对战结束</el-button>
        </el-button-group>
        <el-input
          placeholder="ID/账号/用户名"
          icon="search"
          v-model="inputAccount"
          :on-icon-click="handleIconClick">
        </el-input>
      </header>
      <el-table
        border
        :data="tableData"
        style="width: 100%;"
        stripe>
        <el-table-column
          prop="id"
          label="编号"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="userID"
          label="押注用户ID"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="select"
          label="押注对战指数"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="type"
          label="押注情况"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="money"
          label="押注乐币数"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="result"
          label="对战结果"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="time"
          label="押注时间"
          min-width="200">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        informationMessage: {
          amountTransactionPrice: 600,
          amountRealPayPrice: 444,
          amountLogisticsPrice: 667,
          amountCostPrice: 99
        },
        tableData: [
          {
            id: '801',
            userID: '10001',
            select: '上证指数(000001)',
            type: '涨',
            money: '56684',
            status: '进行中',
            result: '-',
            time: '2017-03-19 18:37:05'
          },
          {
            id: '802',
            userID: '10002',
            select: '上证指数(000001)',
            type: '跌',
            money: '56684',
            status: '进行中',
            result: '-',
            time: '2017-03-19 18:37:05'
          },
          {
            id: '803',
            userID: '10003',
            select: '上证指数(000001)',
            type: '涨',
            money: '56684',
            status: '已结束',
            result: '胜利',
            time: '2017-03-19 18:37:05'
          }
        ],
        inputAccount: ''
      }
    },
    methods: {
        // 切换按钮
      buttonTypeSwitch () {
      },
      // 搜索账号
      handleIconClick (ev) {
        console.log(ev)
      },
      // 分页
      handleSizeChange () {
      },
      handleCurrentChange () {
      }
    },
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .fightList {
    padding: 0 20px;
    width: 100%;
    text-align: center;

    .header {
      padding: 20px 0 10px;
      font-size: 24px;
      color: #333;
      text-align: left;
    }

    .back-end-order {
      display: flex;
      justify-content: space-between;

      /* 平台订单 */

      .order-wrapper {

        width: 20%;
        min-width: 200px;
      }
      .order {
        width: 100%;
        height: 150px;
        text-align: center;
        cursor: pointer;
      }

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

      .order.first {
        background-color: #00aaef;
        box-shadow: 0 4px 4px 2px #00aaef;
      }
      .order.second {
        background-color: #FF3300;
        box-shadow: 0 4px 4px 2px #ff3300;
      }
      .order.third {
        background-color: #00b259;
        box-shadow: 0 4px 4px 2px #00b259;
      }
      .order.fourth {
        background-color: #ff6600;
        box-shadow: 0 4px 4px 2px #ff6600;
      }
    }

    .footer {

      .list-header {
        display: flex;
        justify-content: space-between;
        margin: 40px 0 20px;

        .el-input {
          width: 250px;
        }
      }

      .pagination {
        margin-top: 20px;
      }
    }
  }
</style>
