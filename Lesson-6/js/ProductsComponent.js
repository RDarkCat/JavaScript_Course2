Vue.component('products', {
    data(){
      return {
          catalogUrl: `/catalogData.json`,
          products: [],
          filtered: [],
          imgCatalog: `https://placehold.it/200x150`
      }
    },
    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
            .catch(error => {
                this.errorTag = true;
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            }).catch(error => {
                this.errorTag = true;
            })
    },
    template: `<div class="products">
        <product 
        v-for="product of filtered" 
        :key="product.id_product"
        :product="product"
        :img="imgCatalog"></product>
    </div>`
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item">
            <div v-if="!this.$parent.errorTag">
                <img :src="img" :alt="product.product_name">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}</p>
                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                </div>
            </div>
            <div v-else>
            <error></error>
            </div>
        </div>`
});
