<template>
  <div id="app">
    <x-header 
      :title="$route.meta.title" 
      :left-options="{showBack: $route.meta.showBack}"
      
    >
      <a slot="right" v-show="$route.meta.showIndexRight"><img class="right-icon" src="@/assets/img/i-index.png" alt=""></a>
      <a slot="right" v-show="$route.meta.showMineRight"><img class="right-icon" src="@/assets/img/i-mine.png" alt=""></a>
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
}
</style>
