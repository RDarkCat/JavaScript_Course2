Vue.component('cart', {
  data() {
    return {
      cartUrl: `/getBasket.json`,
      cartItems: [],
      showCart: false,
      imgCart: `https://placehold.it/50x100`
    }
  },
  methods: {
    addProduct(product) {
      let find = this.cartItems.find(el => el.id_product === product.id_product);
      if (find) {
        this.$parent.doJson(`/api/cart/${find.id_product}`, 'PUT', {quantity: 1})
            .then(data => {
              if (data.result) {
                find.quantity++
              }
            })
      } else {
        let prod = Object.assign({quantity: 1}, product);
        this.$parent.doJson(`/api/cart`, 'POST', prod)
            .then(data => {
              if (data.result) {
                this.cartItems.push(prod);
              }
            })
      }
    },
    remove(product) {
      console.log(product);
      if (product.quantity > 1) {
        this.$parent.doJson(`/api/cart/${product.id_product}`, 'PUT', {quantity: -1})
            .then(data => {
              if (data.result === 1) {
                product.quantity--
              } else {
                console.log('error!');
              }
            })
      } else if (product.quantity === 1) {
        // если остался один товар, то его удаляем
        this.$parent.doJson(`/api/cart/${product.id_product}`, 'DELETE', product)
            .then(data => {
              if (data.result === 1) {
                let find = this.cartItems.find(el => el.id_product === product.id_product);
                this.cartItems.splice(this.cartItems.indexOf(find), 1);
              } else {
                console.log('error!');
              }
            });
      }
    }
  },
  mounted() {
    this.$parent.doJson(`/api/cart`, 'GET')
        .then(data => {
          for (let el of data.contents) {
            this.cartItems.push(el);
          }
        });
  },
  template: `<div>
<button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
<div class="cart-block" v-show="showCart">
            <p v-if="!cartItems.length">Cart is empty</p>
            <cart-item 
            v-for="item of cartItems" 
            :key="item.id_product"
            :img="imgCart"
            :cart-item="item"
            @remove="remove"></cart-item>
        </div>
</div>`
});

Vue.component('cart-item', {
  props: ['cartItem', 'img'],
  template: `<div class="cart-item" >
                <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                        <p class="product-single-price">$ {{cartItem.price}} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">$ {{cartItem.quantity*cartItem.price}}</p>
                    <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                </div>
            </div>`
});
