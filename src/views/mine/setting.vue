<template>
    <main>
        <div class="group">
            <div class="loan-rule" ><span>关于我们</span><div class="i-arrow"><x-icon type="ios-arrow-right" size="20"></x-icon></div></div>
            <x-switch title="推送消息" v-model="acceptMessage"></x-switch>
            <div class="loan-rule" ><span>当前版本</span><div class="i-arrow">{{version}}</div></div>
        </div>
        <div class="group">
            <div class="logout" @click="logout">退出登录</div>
        </div>
    </main>
</template>
<script>
import { XSwitch } from 'vux'
import { mapState } from "vuex"
export default {
    components: {
        XSwitch 
  },
    data() {
    return {
        acceptMessage:true,
        version:'1.0.9'
    };
  },
    computed:mapState({
        token:'token'
    }),
  methods : {
      logout(){
          this.request('/api/lmUser/userQuit?token='+this.token,).then(res =>{
            if(res.data.code==0){
                this.$store.commit('removeUserInfo'); //清除用户登录信息
                this.$router.push({path: '/'});
            }
        })
          
      }
  },
  created(){
  }
    
}
</script>
<style lang="less">
.logout{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: @theme-color;
    font-size: 0.32rem;
}
.vux-x-switch{
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #e8e8e8;
    box-sizing: border-box;
    padding: 0 0.4rem;
    .weui-cell__bd{
        float: left;
        margin-left: 0.2rem;
    line-height: 0.56rem;
    }
    .weui-cell__ft{
        float: right;
        .weui-switch{
            height: 0.56rem;
            width: 0.96rem;
            
        }
        .weui-switch:after{
                width: 0.52rem;
                height: 0.52rem;
                border-radius: 0.26rem
            }
            .weui-switch:before{
                width: 0.52rem;
                height: 0.52rem;
                border-radius: 0.26rem
            }
    }
}
</style>

<style lang="less" scoped>
    main{
        .group{
            background-color: #ffffff;
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
                box-sizing: border-box;
                padding: 0 0.4rem;
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
                    color: #666;
                    .vux-x-icon{
                        margin-top: 0.2rem;
                    }
                }
            }
            
        }
    }
</style>
