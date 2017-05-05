<template>
  <div class="main">
    <header class="header">
      <div class="button-wrapper">
        <template v-for="(val, key) in buttonList">
          <button class="button" @click="navTab(key)">{{val}}</button>
        </template>
      </div>
      <el-input
        placeholder="客户ID搜索"
        icon="search"
        v-model="inputAccount"
        :on-icon-click="handleIconClick">
      </el-input>
    </header>
    <section class="section">
      <el-table
        v-show="rechargeTable"
        v-loading="rechargeLoading"
        element-loading-text="拼命加载中"
        border stripe
        :data="rechargeTableData"
        style="width: 100%;">
        <el-table-column
          prop="time"
          label="时间"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="userID"
          label="充值客户ID"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="money"
          label="充值乐币"
          sortable
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="type"
          label="充值方式"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="first"
          label="是否首次充值"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="inOrder"
          label="内部交易单号"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="outOrder"
          label="第三方交易单号"
          min-width="200">
        </el-table-column>
      </el-table>
      <el-table
        v-show="consumeTable"
        v-loading="consumeLoading"
        element-loading-text="拼命加载中"
        border stripe
        :data="consumeTableData"
        style="width: 100%;">
        <el-table-column
          prop="time"
          label="时间"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="userID"
          label="消费客户ID"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="money"
          label="消费金额"
          sortable
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="type"
          label="消费项目"
          min-width="200">
        </el-table-column>
      </el-table>
    </section>
    <footer class="footer">
      <!-- 分页 -->
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
        buttonList: ['充值', '消费'],
        rechargeLoading: false, // 切换导航，显示加载
        consumeLoading: false, // 切换导航，显示加载
        // 充值消费列表切换显示
        rechargeTable: true,
        consumeTable: false,
        rechargeTableData: [
          {
            time: '2017-03-18 18:48:39',
            userID: '20170311',
            money: '1000',
            type: '微信',
            first: '是',
            inOrder: '56474564654874894',
            outOrder: '56474564654874894'
          },
          {
            time: '2017-03-18 18:48:39',
            userID: '20170312',
            money: '1000',
            type: '京东',
            first: '否',
            inOrder: '56474564654874894',
            outOrder: '56474564654874894'
          },
          {
            time: '2017-03-18 18:48:39',
            userID: '20170313',
            money: '3000',
            type: '支付宝',
            first: '是',
            inOrder: '56474564654874894',
            outOrder: '56474564654874894'
          }
        ],
        consumeTableData: [
          {
            time: '2017-03-18 18:48:39',
            userID: '20170311',
            money: '1000',
            type: '购买股票教程'
          },
          {
            time: '2017-03-18 18:48:39',
            userID: '20170311',
            money: '2000',
            type: '打赏文章'
          },
          {
            time: '2017-03-18 18:48:39',
            userID: '20170311',
            money: '1000',
            type: '股神对战押注'
          }

        ],
        inputAccount: ''
      }
    },
    methods: {
      // 导航菜单
      navTab (key) {
        if (key === 0) {
          this.rechargeTable = true
          this.consumeTable = false
          this.rechargeLoading = true
          setTimeout(() => {
            this.rechargeLoading = false
          }, 1000)
        } else {
          this.rechargeTable = false
          this.consumeTable = true
          this.consumeLoading = true
          setTimeout(() => {
            this.consumeLoading = false
          }, 1000)
        }
      },
      // 搜索
      handleIconClick () {
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
  .main {
    padding: 30px;
    width: 100%;

    .header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      .button {
        display: inline-block;
        margin: 0;
        padding: 10px 30px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #bfcbd9;
        text-align: center;
        box-sizing: border-box;
        border-right: none;
        outline: 0;
        font-size: 14px;
        color: #1f2d3d;

        &:first-child {
          border-radius: 4px 0 0 4px;
        }

        &:last-child {
          border-right: 1px solid #bfcbd9;
          border-radius: 0 4px 4px 0;
        }

        &:hover, &:focus {
          color: #fff;
          background-color: #20a0ff;
          border-color: #20a0ff;
        }
      }

      .el-input {
        width: 300px;
      }
    }

    .footer {
      display: flex;
      justify-content: center;
      padding-top: 20px;
    }
  }
</style>
