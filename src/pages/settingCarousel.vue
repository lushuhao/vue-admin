<template>
  <div class="settingCarousel">
    <header class="title">轮播图一</header>
    <el-upload
      class="upload-demo"
      drag
      :before-upload="beforeUpload0"
      :on-success="uploadSuccess0"
      :on-error="uploadErr0"
      :on-remove="uploadRemove0"
      list-type="picture-card"
      action="https://jsonplaceholder.typicode.com/posts/">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
    </el-upload>
    <footer class="footer">
      <span>商品货号：</span>
      <el-input></el-input>
    </footer>
    <header class="title">轮播图二</header>
    <el-upload
      class="upload-demo"
      drag
      :before-upload="beforeUpload1"
      :on-success="uploadSuccess1"
      :on-error="uploadErr1"
      :on-remove="uploadRemove1"
      list-type="picture-card"
      action="https://jsonplaceholder.typicode.com/posts/">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
    </el-upload>
    <footer class="footer">
      <span>商品货号：</span>
      <el-input></el-input>
    </footer>
    <header class="title">轮播图三</header>
    <el-upload
      class="upload-demo"
      drag
      :before-upload="beforeUpload2"
      :on-success="uploadSuccess2"
      :on-error="uploadErr2"
      :on-remove="uploadRemove2"
      list-type="picture-card"
      action="https://jsonplaceholder.typicode.com/posts/">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
    </el-upload>
    <footer class="footer">
      <span>商品货号：</span>
      <el-input></el-input>
    </footer>
    <footer class="bottom">
      <el-button plain type="warning" @click="reset">取消</el-button>
      <el-button plain type="success">确认保存</el-button>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  let upload = document.getElementsByClassName('el-upload')
  let uploadItem = document.getElementsByClassName('el-upload-list__item')

  export default {
    props: {},
    data () {
      return {}
    },
    methods: {
      beforeUpload0 (file) {
        upload[0].style.display = 'none'
        const isJPGorPNG = file.type === 'image/jpeg' || 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPGorPNG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPGorPNG && isLt2M
      },
      uploadSuccess0 () {
        upload[0].style.display = 'none'
      },
      uploadErr0 () {
        setTimeout(() => {
          upload[0].style.display = 'block'
        }, 500)
      },
      uploadRemove0 () {
        setTimeout(() => {
          upload[0].style.display = 'block'
        }, 500)
      },
      beforeUpload1 (file) {
        upload[1].style.display = 'none'
        const isJPGorPNG = file.type === 'image/jpeg' || 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPGorPNG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPGorPNG && isLt2M
      },
      uploadSuccess1 () {
        upload[1].style.display = 'none'
      },
      uploadErr1 () {
        setTimeout(() => {
          upload[1].style.display = 'block'
        }, 500)
      },
      uploadRemove1 () {
        setTimeout(() => {
          upload[1].style.display = 'block'
        }, 500)
      },
      beforeUpload2 (file) {
        upload[2].style.display = 'none'
        const isJPGorPNG = file.type === 'image/jpeg' || 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPGorPNG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPGorPNG && isLt2M
      },
      uploadSuccess2 () {
        upload[2].style.display = 'none'
      },
      uploadErr2 () {
        setTimeout(() => {
          upload[2].style.display = 'block'
        }, 500)
      },
      uploadRemove2 () {
        setTimeout(() => {
          upload[2].style.display = 'block'
        }, 500)
      },
      // 重置
      reset () {
        for (let i = 0; i < upload.length; i++) {
          upload[i].style.display = 'block'
        }
        for (let i = 0; i < uploadItem.length; i++) {
          uploadItem[i].style.display = 'none'
        }
      }
    },
    created () {
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .settingCarousel {
    padding: 30px 100px;
    .title {
      padding: 20px 0;
      font-size: 20px;
      color: #333;
    }

    .footer {
      padding-top: 10px;
      color: #444;

      .el-input {
        width: 275px;
        vertical-align: middle;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      width: 360px;
    }
  }
</style>

<style lang="sass" rel="stylesheet/scss">
  .settingCarousel {

    .el-upload--picture-card {
      width: 360px;
      height: 180px;
      line-height: 20px;
    }

    .el-upload-list--picture-card .el-upload-list__item {
      width: 360px;
      height: 180px;
    }
  }
</style>
