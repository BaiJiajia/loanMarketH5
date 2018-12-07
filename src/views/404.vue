<template>
    <div>
        <img src="@/assets/img/404.png" alt="">
        <div>页面走丢了~</div>
    </div>
</template>
<script>
import { XSwitch } from 'vux'
export default {
    components: {
        XSwitch 
  },
    data() {
    return {
        
    };
  },
  methods : {
      
  },
  created(){
  }
    
}
</script>

<style lang="less" scoped>
    div{
        font-size: 0.2rem;
        
        img{
            margin-top: 1rem;
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>
