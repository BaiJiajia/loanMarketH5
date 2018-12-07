<template>
    <div>
        <top-message tipsText="请点击你借款成功的小贷进行还款哦~"></top-message>
        <div class="loan-item" v-for="item of helpList" :key="item.msgId">
            <img :src="item.msgImg" alt="">
            <div class="loan-box">
                <div class="loan-info">
                    <div class="info-top">
                        <div class="info-title">{{item.msgTitle}}</div>
                        <div class="info-time">浏览时间：{{item.time}}</div>
                    </div>
                    <div class="i-arrow"><x-icon type="ios-arrow-right" size="20"></x-icon></div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import TopMessage from '@/components/TopMessage.vue'
export default {
    name: 'LoanItem',
    components: {
        TopMessage
    },
    data() {
        return {
            helpList:[
                {
                    msgId:0,
                    msgTitle:'贷款1',
                    time:'2018/10/13',
                    msgContent:'额度：111元 | 月利率：111起',
                    msgImg:require("@/assets/img/notice.png")
                },
                {
                    msgId:1,
                    msgTitle:'贷款2',
                    time:'2018/10/11',
                    msgContent:'额度：111元 | 月利率：111起',
                    msgImg:require("@/assets/img/notice.png")
                },
                {
                    msgId:2,
                    msgTitle:'贷款3',
                    time:'2018/10/12',
                    msgContent:'额度：111元 | 月利率：111起',
                    msgImg:require("@/assets/img/notice.png")
                }
            ]
        };
    },
    
    methods: {
        
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
                font-size: 0.24rem;
                color: #666666;
                overflow: hidden;
                .info-top{
                    line-height: 0.5rem;
                    text-align: left;
                    float: left;
                    .info-title{
                        font-size: 0.28rem;
                        color: #333333;
                    }
                }
                .i-arrow{
                    float: right;
                    color: #f8f8f8;
                    .vux-x-icon{
                        margin-top: 0.3rem;
                    }
                }
            }
        }
    }
</style>

