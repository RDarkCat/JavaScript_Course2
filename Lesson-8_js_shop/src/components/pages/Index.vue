<template>
    <div>
        <div class="promo">
            <div class="container_promo">
                <div class="promo-text">
                    <h1>THE BRAND</h1>
                    <h2>OF LUXERIOUS <span class="pink">FASHION</span></h2>
                </div>
            </div>
        </div>

        <div class="categories">
            <div class="container-categories">
                <a href="catalog.html">
                    <div class="categ1">
                        <div class="label-categ">
                            <h3>HOT DEAL</h3>
                            <h2>FOR MEN</h2>
                        </div>
                    </div>
                </a>
                <a href="catalog.html">
                    <div class="categ2">
                        <div class="label-categ">
                            <h3>LUXIROUS & TRENDY</h3>
                            <h2>ACCESORIES</h2>
                        </div>
                    </div>
                </a>
                <a href="catalog.html">
                    <div class="categ3">
                        <div class="label-categ">
                            <h3>30% OFFER</h3>
                            <h2>WOMEN</h2>
                        </div>
                    </div>
                </a>
                <a href="catalog.html">
                    <div class="categ4">
                        <div class="label-categ">
                            <h3>NEW ARRIVALS</h3>
                            <h2>FOR KIDS</h2>
                        </div>
                    </div>
                </a>

            </div>
        </div>
        <div class="text-featured_items">
            <h2>Featured Items</h2>
            <h4>Shop for items based on what we featured in this week</h4>
        </div>
        <Products ref="products"></Products>

        <!--a href="catalog.html" class="redbutton button-all">Browse All Product &#160;&#160;&#8594;</a-->
        <router-link to="catalog" class="redbutton button-all">Browse All Product &#160;&#160;&#8594;</router-link>
        <Banner></Banner>
        <div class="info-sbsr">
            <div class="info-sbsr-cont">
                <div class="info-sbsr-l">
                    <aside><img class="face" src="../img/face.png" alt="face"></aside>
                    <div class="quotation">
                        <p>"Vestibilum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimetum a.
                            Aliquam condimentum mattis neque sed pretium"</p>
                        <h3>Bin Burhan</h3>
                        <h5>Dhaka, Bd</h5>
                        <img class="plank" src="../img/plankwhite.jpg" alt="">
                        <img class="plank" src="../img/plankpink.jpg" alt="">
                    </div>

                </div>
                <div class="info-sbsr-r">
                    <h2>subscribe</h2>
                    <h3>for our newsletter and promoution</h3>
                    <form action="#" class="sbsr-email">
                        <input class="sbsr-input" type="email" placeholder="Enter your E-mail"
                               pattern="\S+@[a-z]+.[a-z]+">
                        <a href="index.html" class="sbsr-button">Subscribe</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import Products from '../shared/Products.vue';
  import Banner from '../shared/Banner.vue';

  export default {
    name: 'Index',
    components: {
      Banner,
      Products
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
