import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/index";
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.meta.checked){
     if(store.state.token){
       next();
     }else{
       store.commit('openLogin',true);
       to.path = from.path
     }
  }else{
    next()
  }
})