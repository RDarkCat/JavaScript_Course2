<template>
    <header class="header">
        <div class="container_header">
            <div class="header_l">
                <router-link class="header_l" to="index"><img src="../img/logo.png" alt="Logo"></router-link>
                <div class="header_l"><router-link to="index" class="textbrand">BRAN<span class="pink">D</span></router-link></div>
                <filter-el></filter-el>
            </div>
            <div class="header_r">
                <div class="cart-head">
                    <router-link class="header_r" to="cart"><img src="../img/cart.svg" alt="Add to cart"></router-link>
                </div>
                <a href="account.html" class="header_r redbutton">My Account</a>
            </div>
        </div>
    </header>
</template>

<script>
  const API = `https://raw.githubusercontent.com/RDarkCat/shop_database/master`;
  import FilterElement from '../shared/FilterElement.vue';
  import axios from 'axios';

  export default {
    name: 'ShopHeader',
    data(){
      return {
      }
    },
    components: {
      filterEl: FilterElement
    },
    methods: {

    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

</style>
