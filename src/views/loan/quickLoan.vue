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
import Axios from 'axios'
export default {
    data() {
    return {
      loan_list:[]
      
    };
  },
  methods : {
    getLoanList() {
        let pageNum=1;
        Axios.post('/api/lmLoanproduct/fastLoan?pageNum='+pageNum,).then(res =>{
            if(res.data.code==0){
                this.loan_list = res.data.data.rows
            }
        })

    } 

  },
    components: {
        LoanItem, TopMessage
    },
    mounted(){
        this.getLoanList()
    }
}
</script>