<template>
    <div v-transfer-dom>
        <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
            <div class="img-box">
                <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">
            </div>
            <div @click="showHideOnBlur=false">
                <span class="vux-close"></span>
            </div>
        </x-dialog>
    </div>
</template>

<script>
import { XDialog, TransferDomDirective as TransferDom } from 'vux'

// import { get } from 'http';
export default {
    directives: {
        TransferDom
    },
    props: ['loginShow'],
    data() {
        return {
            // showHideOnBlur: false,
        };
    },
    
    components: {
        XDialog
    },
    // watch(){
    //     console.log(this.loginShow);
    // },
    computed: {
        showHideOnBlur: {
            get() {
                // console.log('computed--'+this.loginShow)
                return this.loginShow
            },
            set(){
                return
            }
           
        },
    },
    mounted(){
        // console.log('mounted--'+this.loginShow)
    }
}
</script>

<style lang="less" scoped>

</style>

