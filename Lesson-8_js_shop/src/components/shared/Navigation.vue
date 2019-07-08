<template>
    <nav class="navigation">
        <div class="container_navigation">
            <ul class="menu">
                <li class="list-menu">
                    <router-link class="link-menu" to="index.html">HOME</router-link>
                </li>
                <li class="list-menu">
                    <router-link to="catalog" class="link-menu">MAN</router-link>
                </li>
                <li class="list-menu">
                    <router-link class="link-menu" to="catalog.html">WOMAN</router-link>
                </li>
                <li class="list-menu">
                    <router-link class="link-menu" to="catalog.html">KIDS</router-link>
                </li>
                <li class="list-menu">
                    <router-link class="link-menu" to="catalog.html">ACCOSERIESE</router-link>
                </li>
                <li class="list-menu list-menu6">
                    <router-link class="link-menu" to="catalog.html">FEATURED</router-link>
                </li>
                <li class="list-menu list-menu7">
                    <router-link class="link-menu" to="catalog.html" >HOT DEALS</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'Navigation.vue'
  }
</script>

<style scoped>

</style>
