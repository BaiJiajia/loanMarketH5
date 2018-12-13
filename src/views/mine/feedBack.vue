<template>
    <main>
        <div class="fd-title">请描述具体问题</div>
        <div class="group">
            <x-textarea v-model="adviseContent" :max="200" name="description" placeholder="请描述下您出现的问题场景，便于我们更好的为您解决问题"></x-textarea>
        </div>
        <div class="btn-box"><div class="applyBtn" @click="handleSubmit">提交</div></div>
        <toast v-model="showPositionValue" type="text" :time="1500" is-show-mask :text="message" position="middle"></toast>
    </main>
    
</template>

<script>
import { XTextarea,Toast } from 'vux'
import { mapState } from "vuex"
import { setTimeout } from 'timers';
export default {
    name: 'LoanItem',
    components: {
        XTextarea,Toast
    },
    data() {
        return {
            adviseContent:'',
            showPositionValue:false,
            message:''
        };
    },
    computed:mapState({
        token:'token'
    }),
    methods: {
        handleSubmit() {
            if(this.adviseContent==''){
                this.message = '请填写内容';
                this.showPositionValue = true;
            }else{
                this.request('/api/lmAdvise/saveAdvise?token='+this.token+'&adviseContent='+this.adviseContent).then(res =>{
                    if(res.data.code==0){
                        this.message = res.data.message;
                        this.showPositionValue = true;
                        setTimeout(() => {   //此处必须用箭头函数，如果用以往的function,this指向会改为 window  --from SamLi
                            this.$router.push({path: '/mine'});
                        },1000)
                        
                        
                    }
                })
            }
            
            
    
        }
    }

}
</script>

<style lang="less" scoped>
    main{
        font-size: 0.24rem;
        text-align: left;
        .fd-title{
            padding:0.1rem 0.3rem;
            color: #BABABA;
        }
        .group{
            background-color: #ffffff;
            margin-bottom: 0.2rem;
            text-align: left;
            color: #666;
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

