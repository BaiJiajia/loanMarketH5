<template>
    <div>
        <popup-header
            left-text="金额"
            right-text="排序"
            title="贷款资质"
            @click.native="handleOpen"
        ></popup-header>
        <div v-transfer-dom>
            <popup v-model="topSelect" position="top" :show-mask="false">
                <div>1123</div> 
                <div>1123</div> 
            </popup>
        </div>
        <top-message></top-message>
        <loan-item 
            v-for="item of hot_loan_list" 
            :key="item.productId+'hot'"
            :item='item'
        ></loan-item>
    </div>
</template>
<script>
import { TransferDom, Popup,PopupHeader } from 'vux'
import LoanItem from '@/components/LoanItem.vue'
import TopMessage from '@/components/TopMessage.vue'
export default {
    directives: {
        TransferDom
    },
    data() {
    return {
      topSelect:false,
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
      ]
      
    };
  },
  methods : {
      handleOpen(){
          this.topSelect = true;
      }

  },
    components: {
        LoanItem,TopMessage,Popup,PopupHeader
    },
}
</script>