import Vue from 'vue'
import Router from 'vue-router'
// 加载演示项目路由
import { domeRouter } from '@/components/dome/router.js'
// 3D全景
import {bigScreenInteract} from '@/components/bigScreenInteract/router.js'
// 3D全景
import {bigScreenLottery} from '@/components/bigScreenLottery/router.js'
// 3D全景
import {luckyDraw} from '@/components/luckyDraw/router.js'

Vue.use(Router)
var routes = [
]
// 合并多个路由的数组
routes = routes.concat(domeRouter)
routes = routes.concat(bigScreenInteract)
routes = routes.concat(bigScreenLottery)
routes = routes.concat(luckyDraw)

const router = new Router({
  // mode: 'history',
  routes
});

/*router.beforeEach((to, from, next) => {
  let user = window.JSON.parse(localStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }

  if (window.localStorage.getItem('tocken')) {
    if (window.localStorage.getItem('tocken')) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})*/
export default router;
