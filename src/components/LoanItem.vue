<template>
    <div class="loan-item" @click="toDetail(item.productId)">
        <img :src="item.productImgUrl" alt="">
        <div class="loan-box">
            <div class="loan-name">{{item.productName}}</div>
            <div class="loan-info">
                <div class="loan-left">
                    <div>额度：{{item.productLimitL}}-{{item.productLimitH}}元 | {{item.productRateName}}：{{item.productRate}}起</div>
                    <div>征信报告/信用记录...</div>
                </div>
                <div class="loan-right">
                    <div>最快<span>{{item.lendingrate}}分钟</span>下款</div>
                    <div>借款成功<span>{{item.productNum}}</span>人</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoanItem',
    data() {
        return {
        
        };
    },
    props: 
        ['item'],
    methods: {
        // 跳转至详情页
        toDetail(loanId) {
            this.$router.push({path: '/loanDetail',query:{loanId}},);
        }
    }

}
</script>

<style lang="less" scoped>
    .loan-item{
        border-bottom: 1px solid #e5e5e5;
        padding: 10px;
        overflow: hidden;
        background-color: #fff;
        img{
            float: left;
            margin-top: 0.16rem;
            width: 0.9rem;
            height:0.9rem;
        }
        .loan-box{
            margin-left: 55px;
            .loan-name{
                font-size: 0.28rem;
                color: #333333;
                text-align: left;
                // line-height: 0.28rem;
            }
            .loan-info{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 0.22rem;
                color: #666666;
                .loan-left{
                    text-align: left;
                }
                .loan-right{
                    text-align: right;
                    span{
                        color: #FF983F;
                    }
                }
            }
        }
    }
</style>

