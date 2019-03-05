import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/home/Home.vue')
// import Home from '../components/home/Home.vue'
import Type from '../components/pages/type.vue'
import Shopcar from '../components/pages/shopcar.vue'
import Typelist from '../components/pages/typelist.vue'
import Detail from '../components/pages/detail.vue'
import Mine from '../components/pages/mine.vue'
import Login from '../components/pages/login.vue'
import Register from '../components/pages/register.vue'

Vue.use(Router)

let options = {
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/type',
      component: Type,
      name: 'type',
      redirect: '/type/typelist/0',
      children: [
        {
          path: 'typelist/:id',
          component: Typelist,
          name: 'typelist',
          props: true
        }
      ]
    },
    {
      path: 'detail',
      component: Detail,
      name: 'detail'
    },
    {
      path: '/shopcar',
      component: Shopcar,
      name: 'shopcar'
    },
    {
      path: '/mine',
      component: Mine,
      name: 'mine'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/register',
      component: Register,
      name: 'register'
    },
    {
      path: '/error',
      component: Error,
      name: 'error'
    },
    {
      path: '**',
      redirect: '/error'//路由的重定向
    }
  ],
  mode: 'history'
}

let router = new Router(options)

export default router
