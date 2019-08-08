<template>
    <div class="item">
        <a href="#">
            <img :src="img" :alt="product.product_name">
            <div class="item-text">
                <p>{{product.product_name}}</p>
                <h3>${{product.price}}</h3>
            </div>
        </a>
        <a href="" class="add" @click.prevent="addProduct(product)">Add to Cart</a>
    </div>
</template>

<script>
  export default {
    name: 'Product',
    props: ['product', 'img'],
    methods: {
      addProduct(product) {
        this.$emit('addProduct', product);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
