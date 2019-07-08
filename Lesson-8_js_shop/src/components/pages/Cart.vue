<template>
    <div>
        <nav class="arrivals">
            <div class="arrivals-cont">
                <h2 class="arrivals-name">NEW ARRIVALS</h2>
                <ul class="arrivals-menu">
                    <li class="arrivals-crumbs"><router-link to="index">HOME</router-link></li>
                    <li>/</li>
                    <li class="arrivals-crumbs"><router-link to="catalog">MAN</router-link></li>
                    <li>/</li>
                    <li class="arrivals-crumbs"><router-link to="catalog">NEW ARRIVALS</router-link></li>
                </ul>
            </div>
        </nav>
        <div class="cart">
            <table class="cart-list">
                <tr>
                    <th style="text-align: left;">Product Details</th>
                    <th>unite Price</th>
                    <th>Quantity</th>
                    <th>shipping</th>
                    <th>Subtotal</th>
                    <th>ACTION</th>
                </tr>
                <cartItem v-for="item in cartItems" :key="item.id_product" :cart-item="item"></cartItem>

            </table>
            <div class="cart__block2">
                <a href="#" class="cart__2_buttons" title="Clear cart">CLEAR SHOPPING CART</a>
                <router-link to="catalog" class="cart__2_buttons" title="Continue shopping">CONTINUE SHOPPING</router-link>
            </div>
            <div class="cart__block3">
                <div class="cart__block3_adressBlock">
                    <h2 class="cart__block3_h2">Shipping Address</h2>
                    <select class="cart__block3_input" v-model="shippingAddress.country">
                        <option class="cart__block3_input" v-for="country in countries">{{country}}</option>
                    </select>
                    <input type="text" class="cart__block3_input" placeholder="State" v-model="shippingAddress.state">
                    <input type="text" class="cart__block3_input" placeholder="Postcode / Zip" v-model="shippingAddress.zipCode">
                    <input type="button" class="cart__block3_button" title="get a quote" value="get a quote">
                </div>
                <div class="cart__block3_discontBlock">
                    <h2 class="cart__block3_h2">Shipping Address</h2>
                    <p>Enter your coupon code if you have one</p>
                    <input type="text" class="cart__block3_input" placeholder="Coupon">
                    <input type="button" class="cart__block3_button" title="Apply" value="Apply coupon">
                </div>
                <div class="cart__block3_totalBlock">
                    <div class="cart__block3_totalSub">
                        <p>Sub total</p>
                        <p class="pink">${{grandTotal}}</p>
                    </div>
                    <div class="cart__block3_totalGrand">
                        <h3>Grand Total</h3>
                        <h3 class="pink">${{grandTotal}}</h3>
                    </div>
                    <div class="horisontal-line2"></div>
                    <div class="redbutton">PROCESSED TO CHECKOUT</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  const API = `https://raw.githubusercontent.com/RDarkCat/shop_database/master`;

  import CartPosition from '../shared/CartPosition.vue';
  import axios from 'axios';

  export default {
    name: 'Cart',
    components: {
      cartItem: CartPosition
    },
    data() {
      return {
        cartItems: [],
        countries: [
          'Russia',
          'USA',
          'Bangladesh'
        ],
        shippingAddress: {
          country: '',
          state: '',
          zipCode: 0,
        }
      }
    },
    computed: {
      grandTotal: function () {
        return this.cartItems.reduce((acc, item) => {
          return acc + (item.price * item.quantity);
        }, 0);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
