<template>
    <div class="items">
        <product
                v-for="product of filtered"
                :key="product.id_product"
                :product="product"
                :img="imgCatalog"></product>
    </div>
</template>

<script>
  const API = `https://raw.githubusercontent.com/RDarkCat/shop_database/master`;
  import Product from './Product.vue';
  import axios from 'axios';

  export default {
    name: 'Products',
    components: {
      Product
    },
    data() {
      return {
        products: [],
        filtered: [],
        imgCatalog: `https://placehold.it/261x280`
      }
    },
    methods: {
      filter(value){
        let regexp = new RegExp(value, 'i');
        this.filtered = this.products.filter(el => regexp.test(el.product_name));
      }
    },
    mounted() {
      axios(`${API}/products.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        for (let el of response.data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      })
      /*this.$root.$refs.doJson(`${API}/products.json`, 'GET')
          .then(data => {
            for (let el of data) {
              this.products.push(el);
              this.filtered.push(el);
            }
          });
          */
    }
  }
</script>

<style lang="scss" scoped>

</style>
