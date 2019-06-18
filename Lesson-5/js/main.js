const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;
const IMG_STUB = `https://placehold.it/200x150`;
const IMG_SMALL_STUB = `https://placehold.it/32x32`;

new Vue({
    el: '#app',
    data: {
        searchLine: '', // строка поиска
        isVisibleCart: true, // видимость корзины
        catalogUrl: `/catalogData.json`,
        basketUrl: `/getBasket.json`,
        products: [],
        filtered:[],
        cart: [],
        imgCatalog: `${IMG_STUB}`,
        imgCatalogSmall: `${IMG_SMALL_STUB}`
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        removeProduct(element) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cart.find(el => el.id_product === element.id_product);
                        if (find.quantity > 1) {
                            find.quantity--;
                        } else {
                            this.cart.splice(this.cart.indexOf(find), 1);
                        }
                    }
                })
        },
        addProduct(product){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result){
                        let find = this.cart.find(el => el.id_product === product.id_product);
                        if(find){
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cart = [prod];
                        }
                    }
                })
        },
        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            })
            .catch(error => console.log(error));
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            })
            .catch(error => console.log(error));
        this.getJson(`${API + this.basketUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cart.push(el);
                }
            })
            .catch(error => console.log(error));
    }
});
