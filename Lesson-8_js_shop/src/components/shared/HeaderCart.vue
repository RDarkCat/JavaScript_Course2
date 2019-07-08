<template>
    <div class="drop-cart" v-show="isVisibleCart">
        <div class="drop-cart-item" v-for="item of cartItems" :key="cartItem.id_product">
            <img src="../img/cart-item1.jpg" alt="item1">
            <div class="item-about">
                <h3 class="item-about-name">{{cartItem.product_name}}</h3>
                <span class="item-about-span">
                <i class="fa fa-star" aria-hidden="true" style="color: #e4af48"></i>
                <i class="fa fa-star" aria-hidden="true" style="color: #e4af48"></i>
                <i class="fa fa-star" aria-hidden="true" style="color: #e4af48"></i>
                <i class="fa fa-star" aria-hidden="true" style="color: #e4af48"></i>
                <i class="fa fa-star-half-o" aria-hidden="true" style="color: #e4af48"></i>
            </span>
                <p class="item-about-p">{{cartItem.quantity}} x ${{cartItem.price}}</p>
            </div>
            <div class="cart-item-del" @click="$emit('remove', cartItem)"><i class="fa fa-times-circle"
                                                                             aria-hidden="true"></i></div>
        </div>
        <div class="total-sum">
            <div>TOTAL</div>
            <div>$500.00</div>
        </div>
        <router-link to="checkout" class="button-checkout">CHECKOUT</router-link>
        <router-link to="cart" class="button-checkout">GO TO CART</router-link>
    </div>
</template>

<script>
  const API = `https://raw.githubusercontent.com/RDarkCat/shop_database/master`;
  import axios from 'axios';

  export default {
    name: 'HeaderCart',
    data() {
      return {
        isVisibleCart: false,
        cartItems: []
      }
    },
    computed: {
      cartTotal: function () {
        return this.cartItems.reduce((acc, item) => {
          return acc + (item.price * item.quantity);
        }, 0);
      }
    },
    mounted() {
      axios(`${API}/userCart.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        for (let el of response.data.contents) {
          this.cartItems.push(el);
        }
      })
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
