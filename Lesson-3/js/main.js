const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

// TODO: TASK 1
const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject('error');
        } else {
          resolve(xhr.responseText);
        }
      }
    }
  })
};

// test it
const getPlaceholder = async (url) => {
  return await getRequest(url);
};

getPlaceholder('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
      console.log(JSON.parse(data))
    });

// TODO: Task 2

class Basket {
  constructor(container = '.cart') {
    this.container = container;
    this.basket = {};
    this.allProducts = [];
    this._getBasket()
        .then(() => this._render());
  }

  _getBasket() {
    return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .then(basket => {
          this.basket = {...basket};
        })
        .catch(error => console.log('error'));
  }

  cleanBasket() {
    this.basket = {}
  }

  countGoodsPrice() {
    return this.basket.contents.reduce((tempAccumulator, item) => {
      return tempAccumulator + item.price;
    }, 0);
  }

  _render() {
    const block = document.querySelector(this.container);
    for (let item of this.basket.contents) {
      const basket = new BasketItem(item);
      this.allProducts.push(basket);
      block.insertAdjacentHTML('beforeend', basket.render());

    }

    document.querySelector('.total-summary').textContent = this.basket.amount;
    document.querySelector('.total-count').textContent = this.basket.countGoods;
  }
}


class BasketItem {
  constructor(basket, img = `https://placehold.it/50x50`) {
    this.id_product = basket.id_product;
    this.product_name = basket.product_name;
    this.price = basket.price;
    this.img = img;
  }
  getPrice() {
    return basket.price;
  }

  getDescription() {
    return basket.product_name;
  }

  render() {
    return `<div class="product-item">
                <img src="${this.img}" alt="${this.product_name}">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn" id="${this.id_product}">Купить</button>
                    <button class="delete-btn" id="${this.id_product}">X</button>
                </div>
            </div>`;
  }
}

const basket = new Basket();

// TODO: code from archive

class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.data = [];
    this.allProducts = [];
    this._getProducts()
        .then(() => this._render());
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .then(data => {
          this.data = [...data];
        })
        .catch(error => console.log('error'));
  }

  calcSum() {
    return this.allProducts.reduce((accum, item) => accum + item.price, 0)
  }

  _render() {
    const block = document.querySelector(this.container);
    for (let item of this.data) {
      const product = new ProductItem(item);
      this.allProducts.push(product);
      block.insertAdjacentHTML('beforeend', product.render());
    }
  }
}

class ProductItem {
  constructor(product, img = `https://placehold.it/200x150`) {
    this.id_product = product.id_product;
    this.product_name = product.product_name;
    this.price = product.price;
    this.img = img;
  }

  render() {
    return `<div class="product-item">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn" id="${this.id_product}">Купить</button>
                 </div>
             </div>`
  }
}

const products = new ProductsList();
