import Vue from 'vue'
import Router from 'vue-router'
import ourValue from '@/pages/about/value'
import ourTeam from '@/pages/about/team'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home', // 首页
      name: 'home',
      component: resolve => require(['@/pages/home/index'], resolve)
    },
    {
      path: '/wiki', // 百科
      name: 'wiki',
      component: resolve => require(['@/pages/wiki/index'], resolve)
    },
    {
      path: '/strategy/assetRecite', // 投资策略---资产背书
      name: 'assetRecite',
      component: resolve => require(['@/pages/strategy/assetRecite'], resolve)
    },
    {
      path: '/strategy/investProject', // 投资策略---投资项目
      name: 'investProject',
      component: resolve => require(['@/pages/strategy/investProject'], resolve)
    },
    {
      path: '/blockChain', // 区域链
      name: 'blockChain',
      component: resolve => require(['@/pages/blockChain/index'], resolve)
    },
    {
      path: '/about/ourValue', // 关于---我们的价值
      name: 'ourValue',
      component: ourValue
    },
    {
      path: '/about/team', //  关于---我们的团队
      name: 'ourTeam',
      component: ourTeam
    },
    {
      path: '/newView', // 新视角
      name: 'newView',
      component: resolve => require(['@/pages/newView/index'], resolve)
    },
    {
      path: '/news', // 新视角
      name: 'news',
      component: resolve => require(['@/components/news'], resolve)
    }
  ]
})
