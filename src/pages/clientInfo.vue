<template>
  <div class="clientInfo">
    <header class="header">
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
        fixed="left"
        prop="id"
        label="ID"
        min-width="100">
      </el-table-column>
      <el-table-column
        fixed="left"
        prop="phone"
        label="手机号"
        min-width="150">
      </el-table-column>
      <el-table-column
        fixed="left"
        prop="name"
        label="用户昵称"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="totalVol"
        label="累计成交量"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="theMonthVol"
        label="当月成交量"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="lastMonthVol"
        label="上月成交量"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="accountTotal"
        label="账户总资产"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="accountBalance"
        label="账户可用资产"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="accountStockTotal"
        label="账户股票市值"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="accountFreezeTotal"
        label="账户冻结资产"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="deficitBalance"
        label="最高可亏损额度"
        sortable
        min-width="160">
      </el-table-column>
      <el-table-column
        prop="scene"
        label="当前场次"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="stockIncomeTotal"
        label="股票总收益"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="breakEven"
        label="股票盈亏率"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="moneyBalance"
        label="乐币余额"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="virtualCoinBalance"
        label="体验币余额"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="RMBTotal"
        label="虚拟币余额"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="accountIncomeTotal"
        label="账户总收益"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="accountIncomeTotalRate"
        label="账户总收益率"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="fans"
        label="粉丝人数"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="virtualFans"
        label="虚拟粉丝"
        sortable
        min-width="150">
        <template scope="scope">
          <el-button
            @click.native.prevent="virtualFansNum(scope.row.id)"
            type="text"
            size="small">{{scope.row.virtualFans}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="attention"
        label="关注人数"
        sortable
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="virtualAttention"
        label="虚拟关注人数"
        sortable
        min-width="150">
        <template scope="scope">
          <el-button
            @click.native.prevent="virtualAttentionNum(scope.row.id)"
            type="text"
            size="small">{{scope.row.virtualAttention}}
          </el-button>
        </template>
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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        tableData: [
          {
            id: '8001',
            phone: '15900001234',
            name: '小虎',
            totalVol: '123478911',
            theMonthVol: '345678911',
            lastMonthVol: '645678911',
            accountTotal: '5678911',
            accountBalance: '5678911',
            accountStockTotal: '78911',
            accountFreezeTotal: '5678911',
            deficitBalance: '58911',
            scene: '66678911',
            stockIncomeTotal: '7778911',
            breakEven: '56',
            moneyBalance: '5677711',
            virtualCoinBalance: '8911',
            RMBTotal: '5644911',
            accountIncomeTotal: '5631911',
            accountIncomeTotalRate: '78',
            fans: '44911',
            virtualFans: '511',
            attention: '56911',
            virtualAttention: '645'
          },
          {
            id: '1001',
            phone: '15900001234',
            name: '小小',
            totalVol: '9978911',
            theMonthVol: '348911',
            lastMonthVol: '6489',
            accountTotal: '56789',
            accountBalance: '5671',
            accountStockTotal: '786351',
            accountFreezeTotal: '599713',
            deficitBalance: '68137',
            scene: '671957',
            stockIncomeTotal: '935813',
            breakEven: '-22',
            moneyBalance: '68523',
            virtualCoinBalance: '369782',
            RMBTotal: '36987257',
            accountIncomeTotal: '369824',
            accountIncomeTotalRate: '36',
            fans: '6935742',
            virtualFans: '6923',
            attention: '682374',
            virtualAttention: '68234'
          }, {
            id: '2001',
            phone: '15900001234',
            name: '小',
            totalVol: '8966167',
            theMonthVol: '4984161',
            lastMonthVol: '974614467',
            accountTotal: '687461489',
            accountBalance: '864616',
            accountStockTotal: '464167',
            accountFreezeTotal: '6496464',
            deficitBalance: '6494641',
            scene: '649814361',
            stockIncomeTotal: '646146',
            breakEven: '61',
            moneyBalance: '4161',
            virtualCoinBalance: '4161',
            RMBTotal: '64164',
            accountIncomeTotal: '6416',
            accountIncomeTotalRate: '4',
            fans: '4681361',
            virtualFans: '9646',
            attention: '64616',
            virtualAttention: '4616'
          }, {
            id: '3001',
            phone: '15900001234',
            name: '虎',
            totalVol: '61431',
            theMonthVol: '14614361',
            lastMonthVol: '614631',
            accountTotal: '64161',
            accountBalance: '7131321',
            accountStockTotal: '646469',
            accountFreezeTotal: '9746416',
            deficitBalance: '794613',
            scene: '4646416',
            stockIncomeTotal: '9461313',
            breakEven: '-66',
            moneyBalance: '6466',
            virtualCoinBalance: '46464',
            RMBTotal: '4614616',
            accountIncomeTotal: '46616',
            accountIncomeTotalRate: '100',
            fans: '651616',
            virtualFans: '2516',
            attention: '64646',
            virtualAttention: '6161'
          }
        ],
        inputAccount: ''
      }
    },
    computed: {},
    methods: {
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
  .clientInfo {
    padding: 30px;
    width: 100%;
    text-align: center;

    .header {
      display: flex;
      margin-bottom: 30px;

      .el-input {
        width: 250px;
        margin-right: 20px;
      }
    }

    .pagination {
      margin-top: 20px;
    }

  }

</style>

