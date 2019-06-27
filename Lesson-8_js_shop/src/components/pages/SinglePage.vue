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
    <div class="page-img"><img src="img/single-page-img.jpg" alt="" class="page-img-main"></div>
    <div class="page-about">
        <h3 class="h3">WOMAN COLLECTION</h3>
        <div class="slider-plank"></div>
        <div class="slider-plank-pink"></div>
        <h2 class="h2">Moschino Cheap And Chic</h2>
        <p class="p">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate
            collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather
            than exceptional portals. </p>
        <div class="single-item-info">
            <div class="info-gray">MATERIAL:</div>
            <div class="info-black">COTTON</div>
            <div class="space1"></div>
            <div class="info-gray">DESIGNER:</div>
            <div class="info-black">BINBURHAN</div>
        </div>
        <div class="price">$561</div>
        <div class="horisontal-line"></div>
        <div class="page__choose">
            <div class="page__choose_param">
                <div class="info-black">choose color</div>
                <select name="color" class="page__choose_select page-color">
                    <option value="red">RED</option>
                    <option value="green">GREEN</option>
                    <option value="blue">BLUE</option>
                </select>
            </div>
            <div class="page__choose_param">
                <div class="info-black">choose size</div>
                <select name="color" class="page__choose_select page-color">
                    <option value="size-XXS">XXS</option>
                    <option value="size-XS">XS</option>
                    <option value="size-S">S</option>
                    <option value="size-M">M</option>
                    <option value="size-L">L</option>
                    <option value="size-XL">XL</option>
                    <option value="size-XXL">XXL</option>
                </select>
            </div>
            <div class="page__choose_param">
                <div class="info-black">quanity</div>
                <select name="color" class="page__choose_select page-color">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="other">OTHER</option>

                </select>
            </div>


        </div>
        <a href="cart.html" class="page-about_button">
            <img src="img/cart-pink.svg" alt="cart">
            Add to Cart
        </a>

    </div>
    <div class="page_h2">you may like also</div>
    <div class="items">
        <div class="item">
            <a href="single_page.html">
                <figure>
                    <img src="img/Item17.jpg" alt="Item">
                    <figcaption class="item-text">
                        <p>BLAZE LEGGINGS</p>
                        <h3>$52.00</h3>
                    </figcaption>
                </figure>
            </a>
            <a href="cart.html" class="add">Add to Card</a>
        </div>
        <div class="item">
            <a href="single_page.html">
                <figure>
                    <img src="img/Item18.jpg" alt="Item">
                    <figcaption class="item-text">
                        <p>ALEXA SWEATER</p>
                        <h3>$52.00</h3>
                    </figcaption>
                </figure>
            </a>
            <a href="cart.html" class="add">Add to Card</a>
        </div>
        <div class="item">
            <a href="single_page.html">
                <figure>
                    <img src="img/Item19.jpg" alt="Item">
                    <figcaption class="item-text">
                        <p>AGNES TOP</p>
                        <h3>$52.00</h3>
                    </figcaption>
                </figure>
            </a>
            <a href="cart.html" class="add">Add to Card</a>
        </div>
        <div class="item">
            <a href="single_page.html">
                <figure>
                    <img src="img/Item20.jpg" alt="Item">
                    <figcaption class="item-text">
                        <p>SYLVA SWEATER</p>
                        <h3>$52.00</h3>
                    </figcaption>
                </figure>
            </a>
            <a href="cart.html" class="add">Add to Card</a>
        </div>
    </div>
    <div class="info-sbsr">
        <div class="info-sbsr-cont">
            <div class="info-sbsr-l">
                <aside><img class="face" src="img/face.png" alt="face"></aside>
                <div class="quotation">
                    <p>"Vestibilum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimetum a. Aliquam
                        condimentum mattis neque sed pretium"</p>
                    <h3>Bin Burhan</h3>
                    <h5>Dhaka, Bd</h5>
                    <img class="plank" src="img/plankwhite.jpg" alt="">
                    <img class="plank" src="img/plankpink.jpg" alt="">
                </div>

            </div>
            <div class="info-sbsr-r">
                <h2>subscribe</h2>
                <h3>for our newsletter and promoution</h3>
                <form action="#" class="sbsr-email">
                    <input class="sbsr-input" type="text" placeholder="Enter your E-mail">
                    <a href="#" class="sbsr-button">Subscribe</a>

                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'SinglePage'
  }
</script>

<style lang="scss" scoped>

</style>
