import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/home/Home'
import Case from '../components/page/case/Case'
import Price from '../components/page/price/Price'
import Download from '../components/page/download/Download'
import Help from '../components/page/help/Help'
import Contact from '../components/page/contact/Contact'
import Agreement from '../components/page/user-agreement/user-agreement'
import Success from '../components/page/success/Success'

Vue.use(Router)

const router = [
  {
    path: '/',
    component: Home 
  },
  {
    path: '/case',
    component: Case   
  },
  {
    path:'/price',
    component:Price
  },
  {
    path:'/download',
    component:Download
  },
  {
    path:'/help',
    component:Help
  },
  {
    path:'/contact',
    component:Contact
  },
  {
    path:'/agreement',
    component:Agreement
  },
  {
    path:'/success',
    component:Success
  }
  
]

export default new Router({
  routes: router
})
