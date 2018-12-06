import Vue from "vue";
import Router from "vue-router";
import index from "./views/home/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
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
      meta:{ footer:false,title:'top排行榜',showBack:true, },
      component: () => import("./views/loan/topLoan.vue")
    },
    {
      path: "/quickLoan",
      name: "quickLoan",
      meta:{ footer:false,title:'极速贷款',showBack:true, },
      component: () => import("./views/loan/quickLoan.vue")
    },
    {
      // path: "/loanDetail",
      path: "/mine",
      name: "loanDetail",
      meta:{ footer:false,title:'贷款详情',showBack:true, },
      component: () => import("./views/loan/loanDetail.vue")
    },
    // {
    //   path: "/mine",
    //   name: "mine",
    //   meta:{ footer:true,title:'我的',showBack:false,showMineRight:true },
    //   component: () => import("./views/mine/personalCenter.vue")
    // },
  ]
});
