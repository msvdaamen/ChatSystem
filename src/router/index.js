import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../views/dashboard'
import login from '../views/auth/login'
import register from '../views/auth/register'
import profile from '../views/profile'
import chats from '../views/chats'
import tasks from '../views/tasks'
import agenda from '../views/agenda'
import notes from '../views/notes'
import store from '../store/store'
import {Mutations} from '../store/mutations'

Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      beforeEnter: (to, from, next) => {isLoggedIn(to, from, next)}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: (to, from, next) => {
        alreadyLoggedin(to, from, next)}
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      beforeEnter: (to, from, next) => {alreadyLoggedin(to, from, next)}
    }
    ,
    {
      path: '/profile/:id',
      name: 'profile',
      component: profile,
      beforeRouteEnter: (to, from, next) => {isLoggedIn(to, from, next)}
    },
    {
      path: '/chats',
      name: 'chats',
      component: chats,
      beforeRouteEnter: (to, from, next) => {isLoggedIn(to, from, next)}
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: agenda,
      beforeRouteEnter: (to, from, next) => {isLoggedIn(to, from, next)}
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: tasks,
      beforeRouteEnter: (to, from, next) => {isLoggedIn(to, from, next)}
    }
    ,
    {
      path: '/notes',
      name: 'notes',
      component: notes,
      beforeRouteEnter: (to, from, next) => {isLoggedIn(to, from, next)}
    }
  ]
})

const isLoggedIn = function (to, from, next) {
  if(localStorage.getItem('token')) {
    next()
  }else {
    localStorage.removeItem('token')
    store.commit(Mutations.SET_USER, undefined)
    router.push({name: 'login'})
    next(false);
  }
}

const alreadyLoggedin = function (to, from, next) {
  if(localStorage.getItem('token')) {
    next(false)
    router.push({name: 'dashboard'})
  }else {
    next();
  }
}


export default router;