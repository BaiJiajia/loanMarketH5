<template>
    <div>
        <div class="loan-item" v-for="item of messageList" :key="item.msgId">
            <img :src="msgImg" alt="">
            <div class="loan-box">
                <div class="loan-info">
                    <div class="info-top">
                        <div class="info-title">{{item.msgTitle}}</div>
                        <div class="info-time">{{item.creattime}}</div>
                    </div>
                    <div class="info-content">{{item.msgContent}}</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Axios from 'axios'
import { mapState } from "vuex"
export default {
    name: 'LoanItem',
    data() {
        return {
            msgImg:require("@/assets/img/notice.png"),
            messageList:[]
        };
    },
    computed:mapState({
        token:'token'
    }),
    methods: {
        //   获取消息列表
        getMessageList() {
            Axios.post('/api/lmMessage/getLmMessageByUserId?token='+this.token+'&pageNum=1&pageSize=1').then(res =>{
                if(res.data.code==0){
                    let list = res.data.data.rows;
                    for (let item of list){
                        item.creattime = item.creattime.slice(0,10)
                    }
                    this.messageList = list;
                }
            })
        },
    },
    mounted(){
        this.getMessageList()
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
    .loan-item:first-of-type{
        border-top: 1px solid #e5e5e5;
    }
</style>

