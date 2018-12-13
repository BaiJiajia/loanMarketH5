<template>
    <main>
        <div class="group">
            <div class="info-header">
                <img src="@/assets/img/i-grid.png" alt="">
                <div class="user-name">{{userName}}</div>
            </div>
        </div>
        <div class="group">
            <div class="loan-rule" @click="toMessageCenter"><img src="@/assets/img/mine-1.png" alt=""><span>消息中心</span><div class="i-arrow"><x-icon type="ios-arrow-right" size="20"></x-icon></div></div>
            <!-- <div class="loan-rule" @click="toHelp"><img src="@/assets/img/mine-2.png" alt=""><span>还款帮助</span><div class="i-arrow"><x-icon type="ios-arrow-right" size="20"></x-icon></div></div> -->
            <div class="loan-rule" @click="toFeedBack"><img src="@/assets/img/mine-3.png" alt=""><span>意见反馈</span><div class="i-arrow"><x-icon type="ios-arrow-right" size="20"></x-icon></div></div>
        </div>
        
    </main>
</template>
<script>
export default {
    components: {
  },
    data() {
    return {
        userName:''
    };
  },
  methods : {
      toMessageCenter() {
          this.$router.push({path: '/messageCenter'});
      },
    //   toHelp() {
    //       this.$router.push({path: '/help'});
    //   },
      toFeedBack() {
          this.$router.push({path: '/feedBack'});
      },
      getUserName(){
          let name = localStorage.getItem('userName');
          this.userName = name ? name : '您还没有登录呢';
      }
  },
  mounted(){
      this.getUserName()
  }
    
}
</script>

<style lang="less" scoped>
    main{
        .group{
            background-color: #ffffff;
            padding: 0 0.4rem;
            margin-bottom: 0.2rem;
            font-size: 0.24rem;
            text-align: left;
            color: #666;
            .info-header{
                height: 1.5rem;
                line-height: 1.5rem;
                overflow: hidden;
                img{
                    width: 0.86rem;
                    height: 0.86rem;
                    float: left;
                    margin-top: 0.32rem;
                }
                .user-name{
                    margin-left: 1.18rem;
                }
            }
            
            .loan-rule{
                height: 0.8rem;
                line-height: 0.8rem;
                border-bottom:1px solid #e8e8e8;
                overflow: hidden;
                width: 100%;
                img{
                    float: left;
                    height:0.44rem;
                    margin-top: 0.18rem;
                }
                span{
                    width: 1.4rem;
                    display: inline-block;
                    float: left;
                    margin-left: 0.2rem;
                }
                .i-arrow{
                    float: right;
                    // padding: 0.1rem 0;
                    color: #f8f8f8;
                    .vux-x-icon{
                        margin-top: 0.2rem;
                    }
                }
            }
            
        }
    }
</style>
