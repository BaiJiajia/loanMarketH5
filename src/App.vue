<template>
  <div id="app">
    <x-header 
      :title="$route.meta.title" 
      :left-options="{showBack: $route.meta.showBack}"
      :class="{white:$route.meta.white}"
    >
      <router-link slot="right" to="/messageCenter" v-show="$route.meta.showIndexRight"><img class="right-icon" src="@/assets/img/bell.png" alt=""></router-link>
      <router-link slot="right" to="/setting" v-show="$route.meta.showMineRight"><img class="right-icon" src="@/assets/img/setting.png" alt=""></router-link>
    </x-header>
    <main><router-view/></main>
    <bottom-tab v-if="$route.meta.footer"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from './components/BottomTab.vue'
import { XHeader } from 'vux'
export default {
  name: 'app',
  components: {
    XHeader,
    BottomTab
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .vux-header{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    .right-icon{
      width: 0.4rem;
    }
  }
  main{
    margin-top: 46px;
    margin-bottom: 60px
  }
  .white{
    background-color: #ffffff;
    *{
      color: #333;
    }
    .left-arrow:before{
      border-color: #333;
    }
  }
  .vux-header-back{
    display: none;
  }
}
</style>
