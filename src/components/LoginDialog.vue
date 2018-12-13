<template>
    <div v-transfer-dom>
        <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
            <div class="closeBox" @click="showHideOnBlur=false">
                <span class="vux-close"></span>
            </div>
            <div class="loginBox">
                <div class="loginTitle">快速登录</div>
                <group>
                    <x-input v-model="phone" class="input1" placeholder="请输入手机号码" mask="99999999999"  :max="11" is-type="china-mobile" type="tel"></x-input>
                    <!-- {{validate}} -->
                    <x-input v-model="validate" placeholder="请输入验证码" :show-clear="false" :max="6" type="tel">
                        <x-button v-show="sendAuthCode" @click.native="handleRegist" slot="right"  mini>发送验证码</x-button>
                        <x-button v-show="!sendAuthCode" slot="right"  mini>{{auth_time}}秒后重新发送</x-button>
                    </x-input>
                </group>
                <!-- <input type='hidden' > -->
                <div class="btn-box"><div class="applyBtn" @click="handleLogin">登录</div></div>
                <div class="bottomWord">登录即代表同意<a href="javascript:;">《用户协议》</a></div>
            </div>
            <toast v-model="showPositionValue" type="text" :time="1500" is-show-mask :text="message" position="middle"></toast>
        </x-dialog>
    </div>
</template>

<script>
import { XDialog,XButton, XInput,Toast, Group, TransferDomDirective as TransferDom } from 'vux'
import Axios from 'axios'
export default {
    directives: {
        TransferDom
    },
    props: ['loginShow'],
    data() {
        return {
            showHideOnBlur: this.loginShow,
            phone:'',
            validate:null,
            message:'',
            showPositionValue:false,
            sendAuthCode:true,
            auth_time: 0
        };
    },
    
    components: {
        XDialog,XInput,Group,Toast,XButton
    },
    methods: {
        // 获取验证码
        getValidateCode(){
            var phone = this.phone;
            Axios.post('/api/lmUser/getSMS?phone='+phone).then(res =>{
                if(res.data.code==0){
                    this.message = res.data.message;
                    this.showPositionValue = true;
                    this.getAuthCode();//获取验证码的倒计时
                }
            })
        },
        // 获取验证码后的倒计时
        getAuthCode:function () {
            this.sendAuthCode = false;
            this.auth_time = 60;
            let auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        },
        // 手机号注册
        handleRegist(){
            Axios.post('/api/lmUser/phoneValidate?phone='+this.phone).then(res =>{
                if(res.data.code==0){
                    this.getValidateCode();
                }
            })
        },
        // 登录
        handleLogin(){
            Axios.post('/api/lmUser/userLogin?phoneCode='+this.phone+'&verifyCode='+this.validate+'&pushid='+this.phone).then(res =>{
                if(res.data.code==0){
                    let token = res.data.data.token;
                    this.message = res.data.message;
                    this.showPositionValue = true;
                    this.showHideOnBlur = false;
                    this.$store.commit('setToken',token);  //使用mutation将token和username存入localstorage和store的state中
                    this.$store.commit('setuserName',this.phone);
                }
            })
        }
    },
    watch: {
        loginShow(val){
            this.showHideOnBlur = val;
        },
        showHideOnBlur(val){
            this.$emit('changeShow',val)
        },
        showPositionValue(val){
            return val;
        },
        immediate:true
           
    },
    mounted(){
    }
}
</script>

<style lang="less" >
@import '~vux/src/styles/close';
.weui-dialog{
    padding: 0.3rem;
    font-size: 0.24rem;
    .loginTitle{
        font-size: 0.32rem;
    }
    .loginBox{
        .input1:after{
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            border-bottom: 1px solid #D9D9D9;
            color: #D9D9D9;
            -webkit-transform-origin: 0 100%;
            transform-origin: 0 100%;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
        .weui-cells{
            font-size: 0.24rem;
            .weui-input::-webkit-inner-spin-button{
                -webkit-appearance: none !important;
            }
            .weui-input::-webkit-outer-spin-button{
                -webkit-appearance: none !important;
            }
        }
        .weui-cells:before{
            border: none;
        }
        .weui-cell:before{
            border: none;
        }
        .weui-cell__ft{
            line-height: inherit;
            .weui-btn{
                background: #fff;
                padding: 0;
                color: #FF983F;
                line-height: inherit;
            }
            .weui-btn + .weui-btn{
                margin-top: 0;
            }
            .weui-btn:after{
                border:none;
            }
        }
        .btn-box{
            line-height: 0.84rem;
            font-size: 0.3rem;
            margin: 0.4rem 0 0.2rem;
            .applyBtn{
                display: inline-block;
                width:70%;
                background:rgba(216,216,216,1) linear-gradient(360deg,rgba(255,152,63,1) 0%,rgba(255,194,142,1) 100%);
                border-radius:5px;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
        
        .bottomWord{
            font-size: 0.24rem;
            a{color: #FF983F;}
        }
    }
    .closeBox{
        float: right;
        
    }
    
}

</style>

