import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages'
import Hello from '@/pages/index/home'
import Form from '@/pages/index/form'
import ListiCafe from '@/pages/index/listicafe'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: '',
          component: Hello
        },
        {
          path: 'home',
          name: 'Home',
          component: Hello
        },
        {
          path: 'form',
          name: 'Form',
          component: Form
        },
        {
          path: 'list-icafe',
          name: 'Listicafe',
          component: ListiCafe
        }
      ]
    },
    { path: '/login',
      beforeEnter (to, from, next) {
        window.location = 'https://www.yamisok.com/login'
      }
    },
    { path: '/register',
      beforeEnter (to, from, next) {
        window.location = 'https://www.yamisok.com/register'
      }
    }
  ],
  mode: 'history'
})
