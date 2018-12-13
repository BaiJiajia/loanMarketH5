import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.token || null,
    loginShow:false,
    userName:''
  },
  mutations: {
    setToken(state,value){
        state.token = value;
        localStorage.setItem("token",value)
    },
    setuserName(state,value){
        state.userName = value;
        localStorage.setItem("userName",value)
    },
    removeUserInfo(state) {
        state.token = null;
        state.userName = '';
        localStorage.clear();
    },
    openLogin(state,val){
        state.loginShow = val;
    }
  },
  actions: {},
  getters: {
    getStorage(state){
        if(!state.token) {
            state.token = localStorage.getItem("token");
            return state.token;
        }
    }
  },
  modules: {}
});
