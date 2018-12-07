<template>
    <div>
        <swiper loop auto :list="swiper_list" ></swiper>
        <grid>
            <grid-item @click.native="toTopLoan">
                <img slot="icon" src="@/assets/img/i-grid.png">
                <div class="grid-text">top排行榜</div>
            </grid-item>
            <grid-item @click.native="toQuickLoan">
                <img slot="icon" src="@/assets/img/i-grid.png">
                <div class="grid-text">极速贷款</div>
            </grid-item>
        </grid>
        <tab v-model="tabIndex" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>热门贷款</tab-item>
            <tab-item >最新小贷</tab-item>
        </tab>
        <loan-item 
            v-show="tabShow"
            v-for="item of hot_loan_list" 
            :key="item.productId+'hot'"
            :item='item'
        ></loan-item>
        <loan-item 
            v-show="!tabShow"
            v-for="item of new_loan_list" 
            :key="item.productId+'new'"
            :item='item'
        ></loan-item>
    </div>
    
</template>

<script>
// import Vue from 'vue'
import LoanItem from '@/components/LoanItem.vue'
import { Swiper,Grid, GridItem, Tab, TabItem } from 'vux'
export default {
    data() {
    return {
      swiper_list:[
        {
            url: 'javascript:',
            img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        },
        {
            url: 'javascript:',
            img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        },
        {
            url: 'javascript:',
            img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
        },   
      ],
      hot_loan_list:[
          {
              productId:1,
              loanImg:require('@/assets/img/i-grid.png'),
              productName:'热小微贷1',
              productLimit:'1000-2000',
              lendingrate:'3分钟',
              loanNumber:1019,//借款成功人数
              productRate:0.02,
          },
          {
              productId:2,
              loanImg:require('@/assets/img/i-grid.png'),
              productName:'热小微贷2',
              productLimit:'1000-6000',
              lendingrate:'4分钟',
              loanNumber:1111,//借款成功人数
              productRate:0.03,
          },
      ],
      new_loan_list:[
          {
              productId:1,
              loanImg:require('@/assets/img/i-grid.png'),
              productName:'新小微贷1',
              productLimit:'1000-2000',
              lendingrate:'3分钟',
              loanNumber:1019,//借款成功人数
              productRate:0.02,
          },
          {
              productId:2,
              loanImg:require('@/assets/img/i-grid.png'),
              productName:'新小微贷2',
              productLimit:'1000-6000',
              lendingrate:'4分钟',
              loanNumber:1111,//借款成功人数
              productRate:0.03,
          },
      ],
      tabIndex:0,
      tabShow:true
    };
  },
  methods : {
      switchTabItem (index) {
        this.tabIndex = index;
        this.tabShow = !this.tabShow
      },
      toTopLoan(){
          this.$router.push({path: '/topLoan'});
      },
      toQuickLoan(){
          this.$router.push({path: '/QuickLoan'});
      }

  },
    components: {
        Swiper, Grid, GridItem, Tab, TabItem, LoanItem
    },
}
</script>
// 外部组件不用scoped
<style lang="less">
    .vux-slider{
        .vux-indicator{
            font-size: 0.01rem;
        }
    }
    .weui-grids{
        margin-bottom: 0.2rem;
        background-color: #fff;
        .weui-grid{
            display: flex;
            flex-direction:row;
            padding:10px 0 !important;
            font-size: 0.32rem;
            justify-content: center;
            .weui-grid__icon{
                margin: 0;
            }
            .grid-text{
                font-size: 0.36rem;
                margin-left: 10px;
                color: #333;
            }
        }
    }
    .weui-grid{
        display: flex;
        flex-direction:row;
        padding:10px 0 !important;
        font-size: 0.36rem;
        justify-content: center;
        .weui-grid__icon{
            margin: 0;
        }
        .grid-text{
            font-size: 0.36rem;
            margin-left: 10px;
            color: #333;
        }
}
</style>
// 当页样式
<style lang="less" scoped>

    
</style>


