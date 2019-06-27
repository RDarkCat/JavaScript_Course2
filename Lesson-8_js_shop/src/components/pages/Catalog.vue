<template>
    <div>
    <nav class="arrivals">
        <div class="arrivals-cont">
            <h2 class="arrivals-name">NEW ARRIVALS</h2>
            <ul class="arrivals-menu">
                <li class="arrivals-crumbs"><a href="index.html">HOME</a></li>
                <li>/</li>
                <li class="arrivals-crumbs"><a href="catalog.html">MAN</a></li>
                <li>/</li>
                <li class="arrivals-crumbs"><a href="catalog.html">NEW ARRIVALS</a></li>
            </ul>
        </div>
    </nav>
    <div class="catalog-cont">
        <div class="panel-filter-side">
            <a href="catalog.html" class="filter-type">CATEGORY</a>
            <ul class="filter-list">
                <li><a href="single_page.html" class="filter-list">Accessories</a></li>
                <li><a href="single_page.html" class="filter-list">Bags</a></li>
                <li><a href="single_page.html" class="filter-list">Denim</a></li>
                <li><a href="single_page.html" class="filter-list">Hoodies & Sweatshirts</a></li>
                <li><a href="single_page.html" class="filter-list">Jackets & Coats</a></li>
                <li><a href="single_page.html" class="filter-list">Pants</a></li>
                <li><a href="single_page.html" class="filter-list">Polos</a></li>
                <li><a href="single_page.html" class="filter-list">Shirts</a></li>
                <li><a href="single_page.html" class="filter-list">Shoes</a></li>
                <li><a href="single_page.html" class="filter-list">Shorts</a></li>
                <li><a href="single_page.html" class="filter-list">Sweaters & Knits</a></li>
                <li><a href="single_page.html" class="filter-list">T-Shirts</a></li>
                <li><a href="single_page.html" class="filter-list">Tanks</a></li>
            </ul>
            <a href="catalog.html" class="filter-type">BRAND</a>
            <a href="catalog.html" class="filter-type">DESIGNER</a>
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
