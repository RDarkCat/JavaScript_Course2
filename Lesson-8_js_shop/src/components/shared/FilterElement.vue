<template>
    <form class="header_l" action="#">
        <div class="browse-button">
            Browse&nbsp; <i class="fa fa-caret-down" aria-hidden="true"></i>
            <div class="drop">
                <div class="drop-title">WOMAN</div>
                <ul>
                    <li v-for="woman in browseLinks[0].woman"><a class="drop-link" href="catalog.html">{{woman}}</a></li>
                </ul>
                <div class="drop-title">MAN</div>
                <ul>
                    <li v-for="man in browseLinks[1].man"><a class="drop-link" href="catalog.html">{{man}}</a></li>

                </ul>
            </div>
        </div>
        <input class="header_l" type="text" placeholder="Search for item..." v-model="userSearch"
               @submit.prevent="$parent.$refs.products.filter(userSearch)">
        <button class="header_l" v-model="userSearch"></button>
    </form>
</template>

<script>
  export default {
    name: 'FilterElement',
    data() {
      return {
        userSearch: '',
        browseLinks: [
          {
            woman: [
              'Dresses',
              'Tops',
              'Sweaters/Knits',
              'Jackets/Coats',
              'Blazers',
              'Denim',
              'Leggings/Pants',
              'Skirts/Shorts',
              'Accessories'
            ]
          },
          {
            man: [
              'Tees/Tank tops',
              'Shirts/Polos',
              'Sweaters',
              'Sweatshirts/Hoodies',
              'Blazers',
              'Jackets/vests'
            ]
          }

        ]
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
