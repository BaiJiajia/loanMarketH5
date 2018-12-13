<template>
    <div>
        <div class="topSelectBox">
            <div class="topSelect">
                <div class="topBar">
                    <div @click="openSelect(9)" :class="{activeTitle:curIndex==9}">全部</div>
                    <div @click="openSelect(1)" :class="{activeTitle:curIndex==1}">金额<x-icon type="ios-arrow-down" size="16"></x-icon></div>
                    <div @click="openSelect(2)" :class="{activeTitle:curIndex==2}">贷款资质<x-icon type="ios-arrow-down" size="16"></x-icon></div>
                    <div @click="openSelect(3)" :class="{activeTitle:curIndex==3}">排序<x-icon type="ios-arrow-down" size="16"></x-icon></div>
                </div>
                <div class="selectBox">
                    <div class="selects" :class="{ active:curIndex==1}">
                        <div class="option" @click="changeMoney(0)" :class="{selecting:selIndex1==0}">全部</div>
                        <div v-for="item of MoneyLimitList" :key="item.dictCode+'mn'"  @click="changeMoney(item.dictValue)" :class="{selecting:selIndex1==item.dictValue}"  class="option">{{item.dictValue}}</div>
                    </div>
                    <div class="selects" :class="{active:curIndex==2}">
                        <div class="option" @click="changeAptitude('')" :class="{selecting:selIndex2==''}">全部</div>
                        <div v-for="item of AptitudeList" :key="item.id+'apt'" class="option" @click="changeAptitude(item.loanAptitudeType)" :class="{selecting:selIndex2==item.loanAptitudeType}">{{item.loanAptitudeName}}</div>
                    </div>
                    <div class="selects" :class="{active:curIndex==3}">
                        <div class="option" @click="changeSort(1)"  :class="{selecting:selIndex3==1}">倒序</div>
                        <div class="option" @click="changeSort(2)" :class="{selecting:selIndex3==2}">正序</div>
                    </div>
                </div>
            </div>
        </div>
        <top-message></top-message>
        <loan-item 
            v-for="item of loanList" 
            :key="item.productId+'hot'"
            :item='item'
        ></loan-item>
        <login-dialog :loginShow="loginShow" @changeShow="loginBox"></login-dialog>
        <!-- 蒙版阴影 -->
        <div @click="hideSelect" :class="{shadow:curIndex==1||curIndex==2||curIndex==3}" ></div>
    </div>
</template>
<script>
import LoanItem from '@/components/LoanItem.vue'
import LoginDialog from '@/components/LoginDialog.vue'
import TopMessage from '@/components/TopMessage.vue'
import { mapState } from "vuex"
export default {
    data() {
    return {
      MoneyLimitList:[],
      AptitudeList:[],
      curIndex:9,
      selIndex1:0,//金额区间
      selIndex2:'',//资质
      selIndex3:1,//排序
      loanList:[{}],
      pageNum:1
    };
  },
  computed:mapState({
      loginShow:'loginShow'
  }),
  watch:{
      //金额区间筛选
      selIndex1:function(newVal){
          this.getLoanList();
      },
      //资质筛选
      selIndex2:function(newVal){
          this.getLoanList();
      },
      //排序
      selIndex3:function(newVal){
          this.getLoanList();
      }


  },
  methods : {
      openSelect(v){
          this.curIndex = v;
          if(v==9){
              this.selIndex1 = 0;
              this.selIndex2 = '';
          }
      },
      hideSelect(){
          this.curIndex = 0;
      },
      changeMoney(id){
          this.selIndex1 = id;
          this.curIndex = 0;
      },
      changeAptitude(id){
          this.selIndex2 = id;
          this.curIndex = 0;
      },
      changeSort(id){
          this.selIndex3= id;
          this.curIndex = 0;
      },
      loginBox(val){
        this.$store.commit('openLogin',val);
      },
      getMoneyLimit(){   //获取金额区间
        this.request('/api/lmMoneyLimit/getLmMoneyLimitByList').then(res =>{
            this.MoneyLimitList = res.data.data;
          })
      },
      getAptitude(){   //获取资质列表
        this.request('/api/lmAptitude/selectAll').then(res =>{
            this.AptitudeList = res.data.data;
          })
      },
      getLoanList() {
          let atype = this.selIndex2;
          let limits = [];
          let limitsNum = this.selIndex1.toString();
        if(limitsNum.indexOf('-') != -1){
            limits = limitsNum.split('-');
          }else{
            limits = [limitsNum,'']
          }
          let sortlimt = this.selIndex3;
          
          this.request('/api/lmLoanproduct/getInfoByCondition?pageNum='+this.pageNum+'&atype='+atype+'&sortlimt='+sortlimt+'&productlimitl='+limits[0]+'&productlimith='+limits[1]).then(res =>{
              this.loanList = res.data.data.rows;
          })
      }
  },
    components: {
        LoanItem,TopMessage,LoginDialog
    },
    mounted(){
        this.getLoanList();
        this.getMoneyLimit();
        this.getAptitude();
        
    }
}
</script>

<style lang="less" scoped>
    .topSelectBox{
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        border-bottom:1px solid #F6F5F5; 
        z-index: 9;
    }
    .topSelect{
        font-size: 0.28rem;
        background-color: #fff;
        position: relative;
        
        .topBar{
            height: 0.9rem;
            line-height: 0.9rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .activeTitle{
                color: @theme-color;
            }
            svg{
                margin-bottom: -3px;
            }
        }
        .selectBox{
            position: absolute;
            background: #fff;
            width: 100%;
            .selects{
                display: none;
                text-align: left;
                border-top:1px solid #F6F5F5; 
                border-bottom: 1px solid #F6F5F5; 
                padding: 0 0.4rem;
                .option{
                    line-height: 0.64rem;
                    line-height: 0.64rem;
                    border-bottom: 1px solid #F6F5F5; 
                }
                .option:last-of-type{
                    border-bottom: none;
                }
                .selecting{
                    color: @theme-color;
                }
            }
            .active{
                display: block;
            }
        }
    }
    .shadow{
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1;
    }
</style>
