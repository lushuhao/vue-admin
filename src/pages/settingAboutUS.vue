<template>
  <div class="main">
    <v-editor
      :input-content="inputContent"
      :upload-url="uploadUrl"
      v-model="outputContent"></v-editor>
    <footer class="footer">
      <el-button plain type="warning" @click="reset">取消</el-button>
      <el-button plain type="success" @click="submit">确认保存</el-button>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import editor from 'components/Editor'

  export default {
    props: {},
    data () {
      return {
        // input content to editor
        inputContent: 'base on wangeditor',
        // output content from editor
        outputContent: '',
        // set image upload api url
        uploadUrl: '/api/v1/help/upload/wangEditorH5File'
      }
    },
    methods: {
      submit () {
        console.log(this.outputContent)
      },
      reset () {
        this.inputContent = ''
      }
    },
    created () {
    },
    components: {
      'v-editor': editor
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .main {
    padding: 30px;
    width: 800px;

    .footer {
      display: flex;
      justify-content: space-around;
      padding-top: 20px;
      width: 800px;
    }
  }
</style>
