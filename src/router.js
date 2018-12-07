import Vue from "vue";
import Router from "vue-router";
import index from "./views/home/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/404",
      name: "404",
      meta:{ footer:false,showBack:true,title:'页面丢失',white:true },
      component: () => import("./views/404.vue")
    },
    {
      path: "/",
      name: "index",
      meta:{ footer:true,title:'贷款超市',showBack:false,showIndexRight:true },
      component: index
    },
    {
      path: "/loan",
      name: "loan",
      meta:{ footer:true,title:'贷款超市',showBack:false },
      component: () => import("./views/loan/loanList.vue")
    },
    {
      path: "/topLoan",
      name: "topLoan",
      meta:{ footer:false,title:'top排行榜',showBack:true,white:true },
      component: () => import("./views/loan/topLoan.vue")
    },
    {
      path: "/quickLoan",
      name: "quickLoan",
      meta:{ footer:false,title:'极速贷款',showBack:true,white:true },
      component: () => import("./views/loan/quickLoan.vue")
    },
    {
      path: "/loanDetail",
      name: "loanDetail",
      meta:{ footer:false,title:'贷款详情',showBack:true,white:true },
      component: () => import("./views/loan/loanDetail.vue")
    },
    {
      path: "/mine",
      name: "mine",
      meta:{ footer:true,title:'我的',showBack:false,showMineRight:true },
      component: () => import("./views/mine/personalCenter.vue")
    },
    {
      path: "/messageCenter",
      name: "messageCenter",
      meta:{ footer:false,title:'消息中心',showBack:true,showMineRight:false,white:true },
      component: () => import("./views/mine/messageCenter.vue")
    },
    {
      path: "/help",
      name: "help",
      meta:{ footer:false,title:'还款帮助',showBack:true,showMineRight:false,white:true },
      component: () => import("./views/mine/help.vue")
    },
    {
      path: "/feedBack",
      name: "feedBack",
      meta:{ footer:false,title:'意见反馈',showBack:true,showMineRight:false,white:true },
      component: () => import("./views/mine/feedBack.vue")
    },
    {
      path: "/setting",
      name: "setting",
      meta:{ footer:false,title:'设置',showBack:true,showMineRight:false,white:true },
      component: () => import("./views/mine/setting.vue")
    },
  ]
});
