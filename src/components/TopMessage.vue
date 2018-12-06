<template>
    <div >
        {{tipsText}}
    </div>
</template>

<script>
export default {
    data() {
    return {};
  },
    props:{
        tipsText: {
            type:String,
            default:'温馨提示：多申请几家不同产品会大幅提升借款成功率哦~'
        }
    }
        
    
}
</script>

<style lang="less" scoped>
    div{
        font-size: 0.24rem;
        width: 100%;
        height: 0.7rem;
        background-color: rgba(251,160,81,0.2);
        color:#F68A32;
        text-align: center;
        line-height: 0.7rem;
    }
</style>

