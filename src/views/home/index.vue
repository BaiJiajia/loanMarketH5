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
        <div>
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
        <login-dialog :loginShow="loginShow" @changeShow="loginBox"></login-dialog>
    </div>
    
</template>

<script>
// import Vue from 'vue'
import LoanItem from '@/components/LoanItem.vue'
import LoginDialog from '@/components/LoginDialog.vue'
import { Swiper,Grid, GridItem, Tab, TabItem } from 'vux'
import Axios from 'axios'
import { mapState } from "vuex"
export default {
    data() {
    return {
      swiper_list:[],
      hot_loan_list:[],
      new_loan_list:[],
      tabIndex:0,
      tabShow:true
    };
  },
  computed:mapState({
      loginShow:'loginShow'
  }),
  methods : {
    loginBox(val){
        this.$store.commit('openLogin',val);
    },
    //   获取热门小贷
    getHotLoanList() {
        let pageNum=1;
        Axios.post('/api/lmLoanproduct/hotLoan?pageNum='+pageNum).then(res =>{
            if(res.data.code==0){
                this.hot_loan_list = res.data.data.rows
            }
        })
    },
    // 获取最新小贷
    getNewLoanList() {
        let pageNum=1;
        Axios.post('/api/lmLoanproduct/newLoan?pageNum='+pageNum).then(res =>{
            if(res.data.code==0){
                this.new_loan_list = res.data.data.rows
            }
        })
    },
    // 获取banner
    getBannerList() {
        Axios.post('/api/banner/bannerInfo').then(res =>{
            if(res.data.code==0){
                let banners = res.data.data.banners;
                let bannerList = []
                for(let banner of banners){
                    let item = {
                        url:'',
                        img:'',
                        id:''
                    }
                    item.url = banner.bannerLinkUrl;
                    item.img = banner.bannerImgUrl;
                    item.id = banner.id;
                    bannerList.push(item);
                }
                this.swiper_list = bannerList;
            }
        })
    },
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
  mounted(){
      this.getHotLoanList()
      this.getNewLoanList()
      
  },
  created(){
      this.getBannerList()
  },
    components: {
        Swiper, Grid, GridItem, Tab, TabItem, LoanItem,LoginDialog
    },
}
</script>
// 外部组件不用scoped
<style lang="less">
    .vux-slider{
        .vux-indicator{
            font-size: 0.01rem;
        }
        .vux-swiper{
            .vux-swiper-item{
                .vux-img{
                    background-size: 100% 100% !important;

                }
            }
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


