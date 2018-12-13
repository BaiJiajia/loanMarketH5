<template>
    <tabbar ref="tabbar" @on-before-index-change="changeHandler">
        <tabbar-item v-for="(item,index) of tabs" :selected="$route.path===item.link" :key="index" :link="item.link">
            <img slot="icon" :src="item.icon">
            <img slot="icon-active" :src="item.activeIcon">
            <span slot="label">{{item.text}}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
// import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vux'
export default {
    data() {
    return {
      tabs:[
          {
              text:'首页',
              link:'/',
              icon: require("@/assets/img/i-index.png"),
              activeIcon: require("@/assets/img/i-index-active.png"),
          },
          {
              text:'贷款',
              link:'/loan',
              icon: require("@/assets/img/i-loan.png"),
              activeIcon: require("@/assets/img/i-loan-active.png"),
          },
          {
              text:'我的',
              link:'/mine',
              icon: require("@/assets/img/i-mine.png"),
              activeIcon: require("@/assets/img/i-mine-active.png"),
          },
      ]
    };
  },
    components: {
        Tabbar,
        TabbarItem
    },
    methods: {
        changeHandler(index) {
            this.$router.push(this.tabs[index].link)
        }
    },
    mounted() {
        this.$refs.tabbar.preventDefault = true
    }
}
</script>

<style lang="less" scoped>
.weui-tabbar{
    position: fixed;
}
</style>

