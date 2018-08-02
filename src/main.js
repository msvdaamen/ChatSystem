// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

library.add(faCoffee, faPlus, faEllipsisV);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    this.axios.defaults.baseURL = ' http://127.0.0.1:8000/api'
    this.axios.defaults.headers.accept = 'application/json';
    this.axios.interceptors.request.use((config) => {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      return config;
    });
    this.axios.interceptors.response.use((response) => {
      if(response.status === 401) {
        localStorage.removeItem('token')
        router.push({name: 'login'})
      }
      return response;
    })


    if(localStorage.getItem('token')) {
      this.axios.get('/me').then((response) => {
        localStorage.setItem('token', response.data.token);
        this.$store.commit('setUser', response.data);
        if(router.currentRoute.name === 'login' || router.currentRoute.name === 'register') {
          router.push({name: 'dashboard'})
        }
      }).catch((error) => {
        localStorage.removeItem('token')
        router.push({name: 'login'})
      });
    }else {
      router.push({name: 'login'})
    }
  },
})
