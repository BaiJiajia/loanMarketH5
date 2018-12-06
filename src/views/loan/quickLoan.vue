<template>
    <div>
        <top-message></top-message>
        <loan-item 
            v-for="item of loan_list" 
            :key="item.productId+'hot'"
            :item='item'
        ></loan-item>
    </div>
</template>
<script>
// import Vue from 'vue'
import LoanItem from '@/components/LoanItem.vue'
import TopMessage from '@/components/TopMessage.vue'
export default {
    data() {
    return {
      
      loan_list:[
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
      

  },
    components: {
        LoanItem, TopMessage
    },
}
</script>