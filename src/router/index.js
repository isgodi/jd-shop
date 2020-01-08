import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	redirect:"/shouye",
	children:[
		{
			path:'/shouye',
			name:'shouye',
			desc:'首页',
			component: () => import('../views/shouye')
		},
		{
			path:'/classify',
			name:'classify',
			desc:'分类',
			component: () => import('../views/classify'),
			redirect:'/tuijian',
			children: [
				{
					path:"/tuijian",
					name:'tuijian',
					desc:"推荐分类",
					component: () => import("../views/tuijian")
				},
				{
					path:"/chaoshi",
					name:'chaoshi',
					desc:"京东超市",
					component: () => import("../views/chaoshi")
				},
			],
			
		},
		{
			path:'/shopcar',
			name:'shopcar',
			desc:'购物车',
			component: () => import('../views/navlist/shopcar')
		},
		{
			path:'/user',
			name:'user',
			desc:'我的',
			component: () => import('../views/navlist/user')
		},
	]
  },
  {
	  path:'/shoplist',
	  name:'shoplist',
	  desc:'商品列表',
	  component: () => import('../views/shoplist')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
