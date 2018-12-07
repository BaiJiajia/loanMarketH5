<template>
    <main>
        <div class="group">
            <div class="loan-header">
                <img src="@/assets/img/i-grid.png" alt="">
                <div class="loan-name">贷款名称</div>
            </div>
            <div class="loan-info">
                <div class="info-box"><span>借款人数</span>1000人</div>
                <div class="info-box"><span>最快放款</span>3分钟</div>
                <div class="info-box"><span>贷款范围</span>1000-4000元</div>
                <div class="info-box"><span>月利率</span>1.9%</div>
            </div>
        </div>
        <div class="group">
            <div class="loan-rule"><span>借款金额</span>1万</div>
            <div class="loan-rule"><span>借款期限</span>20天</div>
            <div class="loan-rule"><span>每月还款</span>100元</div>
        </div>
        <div class="group">
            <div class="apply-header"><div>申请材料</div></div>
            <div class="apply-box">
                <div class="apply-item" v-for="(item,index) of applyList" :key="index">
                    <img :src="item.icon" alt="">
                    <div>{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="btn-box"><div class="applyBtn" @click="handleLogin">立即申请</div></div>
        <login-dialog :loginShow="loginShow"></login-dialog>
    </main>
</template>
<script>
import LoginDialog from '@/components/LoginDialog.vue'
export default {
    components: {
    LoginDialog
  },
    data() {
    return {
        loginShow:false,
        applyList:[
            {
                name:'芝麻信用',
                icon:require("@/assets/img/1.png")
            },
            {
                name:'微粒贷',
                icon:require("@/assets/img/2.png")
            },
            {
                name:'身份证',
                icon:require("@/assets/img/3.png")
            },
            {
                name:'电商验证',
                icon:require("@/assets/img/4.png")
            },
            {
                name:'手机认证',
                icon:require("@/assets/img/5.png")
            },
            {
                name:'年龄',
                icon:require("@/assets/img/6.png")
            },
            {
                name:'社保公积金',
                icon:require("@/assets/img/7.png")
            },
        ]
    };
  },
  methods : {
      handleLogin() {
          this.loginShow = true;
      }
  },
  created(){
    //   var loanId=this.$route.query.loanId;
  }
    
}
</script>

<style lang="less" scoped>
    main{
        border-top: 1px solid #e8e8e8;
        .group{
            background-color: #ffffff;
            padding: 0 0.4rem;
            margin-bottom: 0.2rem;
            font-size: 0.24rem;
            text-align: left;
            color: #666;
            .loan-header{
                height: 0.8rem;
                line-height: 0.8rem;
                overflow: hidden;
                border-bottom:1px solid #e8e8e8;
                img{
                    width: 0.4rem;
                    height: 0.4rem;
                    float: left;
                    margin-top: 0.2rem;
                }
                .loan-name{
                    margin-left: 0.6rem;
                }
            }
            .loan-info{
                overflow: hidden;
                padding: 10px 0;
                .info-box{
                    min-width: 45%;
                    
                    span{
                        width: 1.4rem;
                        display: inline-block;

                    }
                }
                .info-box:nth-of-type(2n-1){
                    float: left;
                }
                .info-box:nth-of-type(2n){
                    float: right;
                }
            }
            .loan-rule{
                height: 0.6rem;
                line-height: 0.6rem;
                border-bottom:1px solid #e8e8e8;
                span{
                    width: 1.4rem;
                    display: inline-block;
                }
            }
            .loan-rule:last-of-type{
                border-bottom:none;
            }
            .apply-header{
                border-bottom: 1px solid #e8e8e8;
                padding: 0.18rem 0;
                div{
                    border-left: 2px solid #FF983F;
                    height: 0.24rem;
                    line-height: 0.24rem;
                    padding-left: 10px;
                }
            }
            .apply-box{
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                flex-wrap:wrap;
                padding-bottom: 10px;
                .apply-item{
                    text-align: center;
                    padding-top:10px;
                    width: 25%;
                    img{
                        width: 0.48rem;
                    }
                }
            }
        }
        .btn-box{
            text-align: center;
            height:0.84rem;
            line-height:0.84rem;
            font-size:0.3rem;
            .applyBtn{
                display: inline-block;
                width:70%;
                background:rgba(216,216,216,1) linear-gradient(360deg,rgba(255,152,63,1) 0%,rgba(255,194,142,1) 100%);
                border-radius:5px;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
        
    }
</style>
