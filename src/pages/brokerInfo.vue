<template>
  <div class="brokerInfo">
    <el-row>
      <el-col :xs="24" :sm="22" :md="20" :lg="12">
        <div class="info-wrapper">
          <header class="header">
            <span>【会员级别显示及账号显示】</span>
            <span>基本信息：</span>
          </header>
          <div class="content-wrapper">
            <p class="info"><span>公司名称：</span><span>嗒嗒金融</span></p>
            <p class="info"><span>公司地址：</span><span>上海浦东</span></p>
            <p class="info"><span>公司座机：</span><span>027-56898888</span></p>
            <p class="info"><span>开户行：</span><span>中国银行</span></p>
            <p class="info"><span>开户支行：</span><span>中国银行杭州支行</span></p>
            <p class="info"><span>开户名：</span><span>乐股360</span></p>
            <p class="info"><span>银行账号：</span><span>676578689765578</span></p>
            <p class="info"><span>公司负责人：</span><span>李大神</span></p>
            <p class="info"><span>公司负责人联系电话：</span><span>15102728888</span></p>
            <p class="info"><span>团队规模（人）：</span><span>50-100</span></p>
            <p class="info"><span>备注：</span><span>无</span></p>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="22" :md="20" :lg="12">
        <div class="info-wrapper">
          <header class="header">
            <span>【会员级别显示及账号显示】</span>
            <span>基本信息：</span>
          </header>
          <div class="card-wrapper">
            <el-popover
              ref="popover1"
              placement="right"
              width="400"
              trigger="hover">
              <img :src="fileList[0].url" alt="">
            </el-popover>
            <el-popover
              ref="popover2"
              placement="right"
              width="400"
              trigger="hover">
              <img :src="fileList[1].url" alt="">
            </el-popover>
            <el-popover
              ref="popover3"
              placement="right"
              width="400"
              trigger="hover">
              <img :src="fileList[2].url" alt="">
            </el-popover>
            <el-button v-popover:popover1>
              <img :src="fileList[0].url" alt="">
              <p>{{fileList[0].name}}</p>
            </el-button>
            <el-button v-popover:popover2>
              <img :src="fileList[1].url" alt="">
              <p>{{fileList[1].name}}</p>
            </el-button>
            <el-button v-popover:popover3>
              <img :src="fileList[2].url" alt="">
              <p>{{fileList[2].name}}</p>
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    </span>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        // 查看图片缩略图
        fileList: [{
          popover: 'popover1',
          name: '身份证正面',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          popover: 'popover2',
          name: '身份证反面',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          popover: 'popover3',
          name: '营业执照',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    methods: {},
    created () {
      console.log(this.$route.params)
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .brokerInfo {
    width: 100%;
    padding-bottom: 30px;

    .info-wrapper {
      margin: 20px 0 0 20px;
      height: 750px;
      border: 1px solid #dcdcdc;
      color: #333;

      &:last-child {
        margin-right: 20px;
      }

      .header {
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        background-color: #3399cc;
        font-size: 20px;
        color: #fff;
      }

      .content-wrapper {

        .info {
          display: flex;
          justify-content: center;
          line-height: 40px;

          & span:first-child {
            width: 50%;
            text-align: right;
          }
          & span:last-child {
            padding-left: 20px;
            width: 50%;
            text-align: left;
            color: #666;
          }
        }
      }

      .card-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 40px 0 40px 0;
        text-align: center;

        img {
          width: 243px;
          height: 153px;
        }

        .el-button {
          border: none;
          padding: 0;
          margin-bottom: 20px;
          margin-right: 80px;
        }
        .el-button + .el-button {
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
  }

  /* 右侧证件照 */
  @media (max-width: 1600px) {
    .brokerInfo .info-wrapper .card-wrapper .el-button {
      margin-right: 40px;
    }
  }
  @media (max-width: 1500px) {
    .brokerInfo .info-wrapper .card-wrapper .el-button {
      margin-right: 20px;
    }
  }
  @media (max-width: 1380px) {
    .brokerInfo .info-wrapper .card-wrapper .el-button {
      margin-right: 0;
    }
  }
</style>
