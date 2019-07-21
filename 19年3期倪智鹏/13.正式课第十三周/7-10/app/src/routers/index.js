import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const routes = [
  {
    path:'/page',
    component:()=>(import('../views/page.vue'))
  }
];

// [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//   }
// ]

{/* <Route path="/" component={()=>import('./xx')} /> */}

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
