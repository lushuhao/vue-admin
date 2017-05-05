<template>
  <div class="clientConsumeInfo">
    <header class="header">
      <el-select v-model="typeValue" clearable placeholder="消费类型">
        <el-option
          v-for="item in options" :key="item.label"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="ID/账号/用户名"
        icon="search"
        v-model="input"
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
        label="ID">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        min-width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="消费类型">
        <template scope="scope">
          <el-button
            @click.native.prevent="look(scope.row.id, scope.row.type, scope.$index)"
            type="text"
            size="small">{{scope.row.type}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="money"
        label="乐币"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="coin"
        label="体验币"
        min-width="100">
      </el-table-column>
    </el-table>

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

    <!-- 弹出框 -->
    <el-dialog :title="dialogTitle" v-model="dialogVisible" size="tiny">
      <el-form label-width="80px" :model="form">
        <el-form-item label="ID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="money">
          <el-input v-model="form.money"></el-input>
        </el-form-item>
        <el-form-item label="coin">
          <el-input v-model="form.coin"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

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
            phone: '15955001234',
            name: '王小虎',
            type: '充值',
            money: '88000',
            coin: '6600'
          }, {
            id: '8001',
            phone: '15955001234',
            name: '王小虎',
            type: '奖励',
            money: '18000',
            coin: '66600'
          }, {
            id: '8001',
            phone: '15955001234',
            name: '王小虎',
            type: '打赏',
            money: '28000',
            coin: '16600'
          }
        ],
        options: [
          {
            value: '选项1',
            label: '充值'
          }, {
            value: '选项2',
            label: '打赏'
          }, {
            value: '选项3',
            label: '股神对战'
          }, {
            value: '选项4',
            label: '购买股票教程'
          }, {
            value: '选项5',
            label: '模拟炒股'
          }, {
            value: '选项6',
            label: '奖励'
          }],
        input: '',
        typeValue: '',
        dialogVisible: false,
        dialogTitle: '',
        // 查看资料
        form: {}
      }
    },
    computed: {},
    methods: {
      // 查看/编辑账户
      look (id, type, index) {
        this.dialogVisible = true
        this.dialogTitle = type
        this.form = this.tableData[index]
        console.log()
      },
      // 分页
      handleSizeChange () {
      },
      handleCurrentChange () {
      },
      // 搜索账号
      handleIconClick (ev) {
        console.log(ev)
      }
    },
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .clientConsumeInfo {
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
      }
    }

    .pagination {
      margin-top: 20px;
    }
  }
</style>
<style lang="sass" rel="stylesheet/scss">
  .clientConsumeInfo {
    .el-dialog__header, .el-dialog__body {
      padding: 30px 50px 0 20px;
    }
  }
</style>

