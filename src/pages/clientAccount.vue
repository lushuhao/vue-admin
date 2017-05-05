<template>
  <div class="backEndAccount">
    <header class="header">
      <el-select v-model="typeValue" clearable placeholder="账号状态">
        <el-option
          v-for="item in options" :key="item.label"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="请输入推荐人"
        v-model="inputRecommendPeople">
      </el-input>
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
        prop="name"
        label="用户昵称"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="QQ"
        label="QQ号"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="WeChat"
        label="微信号"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="affiliationPeople"
        label="归属人"
        min-width="150">
        <template scope="scope">
          <el-button
            @click.native.prevent="brokerInfo(scope.row.id)"
            type="text"
            size="small">{{scope.row.affiliationPeople}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="affiliationID"
        label="归属人ID"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="brokerInfo(scope.row.id)"
            type="text"
            size="small">{{scope.row.affiliationID}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="registerTime"
        label="最近登录时间"
        min-width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="freeze"
        label="状态"
        min-width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="冻结"
        min-width="100">
        <template scope="scope">
          <el-button
            @click.native.prevent="freeze(scope.row.id)"
            type="text"
            size="small">冻结
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
            name: '王小虎',
            QQ: '12345678911',
            WeChat: '12345678911',
            affiliationPeople: '浙江科技有限公司',
            affiliationID: '1101',
            registerTime: '2016-05-04 17:23:22',
            freeze: '未冻结'
          }, {
            id: '8001',
            phone: '15900001234',
            name: '王小虎',
            QQ: '12345678911',
            WeChat: '12345678911',
            affiliationPeople: '浙江科技有限公司',
            affiliationID: '1101',
            registerTime: '2016-05-04 17:23:22',
            freeze: '未冻结'
          }, {
            id: '8001',
            phone: '15900001234',
            name: '王小虎',
            QQ: '12345678911',
            WeChat: '12345678911',
            affiliationPeople: '浙江科技有限公司',
            affiliationID: '1101',
            registerTime: '2016-05-04 17:23:22',
            freeze: '未冻结'
          }
        ],
        options: [{
          value: '选项1',
          label: '未冻结'
        }, {
          value: '选项2',
          label: '已冻结'
        }],
        inputRecommendPeople: '',
        inputAccount: '',
        typeValue: ''

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
      },
      // 查看归属人详细资料
      brokerInfo (id) {
        console.log(id)
        this.$router.push({name: 'brokerInfo', params: {id: id}})
      }
    },
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .backEndAccount {
    padding: 30px;
    width: 100%;
    text-align: center;

    .header {
      display: flex;
      margin-bottom: 30px;

      .el-button--primary {
        margin-right: 20px;
      }
      .el-select {
        margin-right: 20px;
        width: 150px;

      }
      .el-input {
        width: 200px;
        margin-right: 20px;
      }
    }

    .pagination {
      margin-top: 20px;
    }

    .el-dialog__wrapper {
      .info {
        display: flex;
        justify-content: center;
        & span:first-child {
          flex: 50%;
          text-align: right;
        }
        & span:last-child {
          flex: 50%;
          text-align: left;
        }
      }
      .img-wrapper {
        display: flex;
        justify-content: space-around;
        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
</style>

