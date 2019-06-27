import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '../components/pages/Catalog.vue';
import Cart from '../components/pages/Cart.vue';
import Index from '../components/pages/Index.vue';
import SinglePage from '../components/pages/SinglePage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: '/',
      component: Index
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/single',
      name: 'single',
      component: SinglePage
    }
  ]
});

export default router;
