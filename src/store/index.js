import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.token || null,
    loginShow:false
  },
  mutations: {
    setToken(state,value){
        state.token = value;
        localStorage.setItem("token",value)
    },
    removeToken(state) {
        state.token = null;
        localStorage.removeItem("token");
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
