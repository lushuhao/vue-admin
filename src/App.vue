<template>
  <div id="app">
    <v-header class="header"></v-header>
    <section class="section">
      <aside class="navMenu">
        <navMenu></navMenu>
      </aside>
      <article class="main-content">
          <v-title></v-title>
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </article>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import navMenu from 'components/navMenu.vue'
  import header from 'components/header.vue'
  import title from 'components/title.vue'

  import store from './vuex/store'
  import {mapGetters} from 'vuex'

  export default {
    created () {
    },
    data () {
      return {}
    },
    methods: {},
    computed: {
      ...mapGetters([])
    },
    components: {
      'navMenu': navMenu,
      'v-header': header,
      'v-title': title
    },
    store
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>

  #app {
    overflow: inherit;

    .header {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background-color: #fff;
    }
    .section {
      display: flex;
      padding-top: 80px;
      padding-right: 30px;
      width: 100%;

      .navMenu {
        width: 280px;
      }
      .main-content {
        padding-right: 80px;
        flex: 1;
        width: 70%;
        min-width: 500px;

        .slide-fade-enter-active {
          transition: all .3s ease;
        }
        .slide-fade-leave-active {
          transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-active {
          transform: translateX(10px);
          opacity: 0;
        }
      }

      @media (max-width: 800px) {
        .navMenu {
          display: none;
        }
      }

    }
  }
</style>


<style lang="sass" rel="stylesheet/scss">

  body, html {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;;
  }

  .el-table {
    text-align: center;

    tr th {
      @extend .el-table
    }
  }
</style>
