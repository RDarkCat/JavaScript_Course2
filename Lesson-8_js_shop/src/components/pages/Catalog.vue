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
    <div class="catalog-cont">
        <div class="panel-filter-side">
            <router-link to="catalog" class="filter-type">CATEGORY</router-link>
            <ul class="filter-list">
                <li><router-link to="single" class="filter-list">Accessories</router-link></li>
                <li><router-link to="single" class="filter-list">Bags</router-link></li>
                <li><router-link to="single" class="filter-list">Denim</router-link></li>
                <li><router-link to="single" class="filter-list">Hoodies & Sweatshirts</router-link></li>
                <li><router-link to="single" class="filter-list">Jackets & Coats</router-link></li>
                <li><router-link to="single" class="filter-list">Pants</router-link></li>
                <li><router-link to="single" class="filter-list">Polos</router-link></li>
                <li><router-link to="single" class="filter-list">Shirts</router-link></li>
                <li><router-link to="single" class="filter-list">Shoes</router-link></li>
                <li><router-link to="single" class="filter-list">Shorts</router-link></li>
                <li><router-link to="single" class="filter-list">Sweaters & Knits</router-link></li>
                <li><router-link to="single" class="filter-list">T-Shirts</router-link></li>
                <li><router-link to="single" class="filter-list">Tanks</router-link></li>
            </ul>
            <router-link to="catalog" class="filter-type">BRAND</router-link>
            <router-link to="catalog" class="filter-type">DESIGNER</router-link>
        </div>
        <div class="panel-catalog">
            <div class="panel-filter-top">
                <div class="trandingnow">
                    <h2>TRANDING NOW</h2>
                    <a href="#" class="filter-crumbs">Bohemian</a>
                    <p class="filter-crumbs">|</p>
                    <a href="#" class="filter-crumbs">Floral</a>
                    <p class="filter-crumbs">|</p>
                    <a href="#" class="filter-crumbs">Lace</a>
                    <p class="filter-crumbs">|</p>
                    <a href="#" class="filter-crumbs">Floral</a>
                    <p class="filter-crumbs">|</p>
                    <a href="#" class="filter-crumbs">Lace</a>
                    <p class="filter-crumbs">|</p>
                    <a href="#" class="filter-crumbs">Bohemial</a>
                    <p class="filter-crumbs">|</p>
                </div>
                <div class="filter-size">
                    <h2>SIZE</h2>
                    <input type="checkbox" id="size-XXS"><label for="size-XXS">XXS</label>
                    <input type="checkbox" id="size-XS"><label for="size-XS">XS</label>
                    <input type="checkbox" id="size-S"><label for="size-S">S</label>
                    <input type="checkbox" id="size-M"><label for="size-M">M</label>
                    <input type="checkbox" id="size-L"><label for="size-L">L</label>
                    <input type="checkbox" id="size-XL"><label for="size-XL">XL</label>
                    <input type="checkbox" id="size-XXL"><label for="size-XXL">XXL</label>
                </div>
                <!--goto-->
                <div class="filter-price">
                    <h2>MAX PRICE</h2>
                    <form class="filter-form" oninput="pricemax.value=(filterPriceRange.value)" action="#">
                        <input id="filterPriceRange" type="range" min="0" max="700" step="10" value="700"/>
                        <p>
                            <output name="pricemax" for="filter-Price-Range">700</output>
                        </p>
                    </form>
                </div>
                <div class="panel-sort">
                    <label class="sortbye">Sort By
                        <select class="sortbye-select">
                            <option value="Name">Name</option>
                            <option value="Price">Price</option>
                        </select>
                    </label>
                    <label class="sortbye">Show
                        <select class="sortbye-select">
                            <option value="9">9</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                        </select>
                    </label>
                </div>
            </div>
            <div class="items">
                <Products ref="products"></Products>

                <div class="item" style="height: 0; margin-bottom: 0">

                </div>
            </div>
            <div class="panel-catalog-lower">
                <div class="panel-catalog-pages">
                    <ul>
                        <li><a class="pages-num" href="#"></a></li>
                        <li><a class="pages-num" href="#">1</a></li>
                        <li><a class="pages-num" href="#">2</a></li>
                        <li><a class="pages-num" href="#">3</a></li>
                        <li><a class="pages-num" href="#">4</a></li>
                        <li><a class="pages-num" href="#">5</a></li>
                        <li><a class="pages-num" href="#">6.....20</a></li>
                        <li><a class="pages-num" href="#"></a></li>
                    </ul>
                </div>
                <div class="panel-catalog-allButton"><p>View All</p></div>
            </div>
        </div>

    </div>
    </div>
</template>


<script>
  import Products from '../shared/Products.vue';

  export default {
    name: 'Catalog',
    components:{
      Products
    }
  }
</script>

<style lang="scss" scoped>

</style>
