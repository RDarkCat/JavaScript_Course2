import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API = `https://raw.githubusercontent.com/RDarkCat/shop_database/master`;

export default new Vuex.Store({
  state: {
    cartItems: []
  },
  getters: {
    getFullCart: state => {
      return state.cartItems;
    }
  },
  mutations: {
    setFullCart: (state, data) => {
      state.cartItems = data;
    },
    setUpdateProduct: (state, data) => {
      state.cartItems.contents.push(data);
    }
  },
  actions: {
    getCart:  (context) => {
      //let {data} = await
          axios(`${API}/userCart.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })//;
      //context.commit('setFullCart', data)
          .then(response => {
        //let temp = [];
        //for (let el of response.data) {
        //  temp.push(el);
        //}
        context.commit('setFullCart', response.data)
      })
    },
    addProduct: ({commit, state}, product) => {
      let find = state.cartItems.contents.find(el => el.id_product === product.id_product);
      if (find) {
        axios(`${API}/addToBasket.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }/*,
          data: {
            quantity: 1
          }*/
        })
            .then(response => {
              //if (response.data.result) {
                find.quantity++;
              commit('setUpdateProduct', prod)
              //}
            })
      } else {
        let prod = Object.assign({quantity: 1}, product);
        axios(`${API}/addToBasket.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }//,
          //data: prod
        })
            .then(response => {
              //if (response.data.result) {
                //this.cartItems.push(prod);
                commit('setUpdateProduct', prod)
              //}
            })
      }
    },
    removeProduct: ({commit, state}, data) => {

    }
  }
});
