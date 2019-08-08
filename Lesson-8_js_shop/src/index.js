import Vue from 'vue';
import App from './components/App.vue';
import router from './router';
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
