Vue.component('search', {
  data() {
    return {
      userSearch: ''
    }
  },
  template: `<form action="#" method="post" class="search-form" @submit.prevent="filter">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
             </form>`,
  methods: {
    filter(){
      let regexp = new RegExp(this.userSearch, 'i');

      // почему-то не доступен массив товаров здесь
      
      let filtered = this.$refs.products.filter(el => regexp.test(el.product_name));
      this.$emit('filtered', filtered);
    }
  },
});
