<template>
    <div>
        <div class="loan-item" v-for="item of messageList" :key="item.msgId">
            <img :src="item.msgImg" alt="">
            <div class="loan-box">
                <div class="loan-info">
                    <div class="info-top">
                        <div class="info-title">{{item.msgTitle}}</div>
                        <div class="info-time">{{item.time}}</div>
                    </div>
                    <div class="info-content">{{item.msgContent}}</div>
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
            messageList:[
                {
                    msgId:0,
                    msgTitle:'系统消息1',
                    time:'2018/10/13',
                    msgContent:'额度：111元 | 月利率：111起',
                    msgImg:require("@/assets/img/notice.png")
                },
                {
                    msgId:1,
                    msgTitle:'系统消息2',
                    time:'2018/10/11',
                    msgContent:'额度：111元 | 月利率：111起',
                    msgImg:require("@/assets/img/notice.png")
                },
                {
                    msgId:2,
                    msgTitle:'系统消息3',
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
                .info-top{
                    overflow: hidden;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    .info-title{
                        float: left;
                        font-size: 0.28rem;
                        color: #333333;
                    }
                    .info-time{
                        float: right;
                    }
                }
                .info-content{
                    text-align: left;
                }
            }
        }
    }
</style>

