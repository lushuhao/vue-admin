<template>
  <div class="main">
    <i class="el-icon-document"></i><span class="title">{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data () {
      return {
        title: '乐股'
      }
    },
    methods: {},
    watch: {
      '$route' () {
        this.title = this.$route.meta.title
      }
    },
    activated () {
    },
    created () {
      this.title = this.$route.meta.title
    },
    components: {}
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .main {
    padding: 0 30px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #dcdcdc;
    font-size: 18px;
    color: #666;

    .el-icon-menu {
      vertical-align: middle;
    }
    .title {
      padding-left: 10px;
      color: #333;
    }
  }
</style>
