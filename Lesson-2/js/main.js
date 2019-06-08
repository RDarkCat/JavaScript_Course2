/**
 * Task №1
 *
 */

class Cart {
  constructor() {
    // FIXME: stub for cart constructor
  }

  addItem(item) {
    // FIXME: stub for adding item function
  }

  cleanCart() {
    // FIXME: stub clean all from cart
  }

  deleteItem(item) {
    // FIXME: stub for deleting item function
  }

  renderAll() {
    // FIXME: stub for rendering all cart
  }

  countGoodsPrice() {
    // FIXME: stub for counting price
  }

  countGoodsQuantity() {
    // FIXME: stub how many items in cart
  }

  convertToLocalCurrency() {
    // FIXME: stub updating ex. USD to RUB
  }

  updateCart() {
    // FIXME: stub for updating cart
  }
}

class CartItem {
  constructor() {
    // FIXME: stub for cart item constructor
  }

  getPrice() {
    // FIXME: stub price getter
  }

  getQuantity(){
    // FIXME: stub quantity getter
  }

  getDescription () {

  }

  render() {
    // FIXME: stub for rendering cart item
  }
}

class Item {
  constructor(title, price, description) {
    this.name = title;
    this.price = price;
    this.description = description;
  }

  render() {
    return `<div class="item">
    <h2>${this.name}</h2>
    <span>${this.price}</span>
    <span>${this.description}</span>
    <button class="buy-btn">Купить</button>
    </div>`;
  };
}

class ItemsList {
  constructor() {
    this.items = [];
  }

  fetchItems() {
    this.items = [
      { name: 'iPhoneX', price: 2000, description: "Cool iPhone" },
      { name: 'Защитное стекло', price: 20, description: "Прочное стекло" },
      { name: 'Бампер', price: 300, description: "Неубиваемый бампер" },
    ];
    this.items = this.items.map(item => new Item(item.name, item.price));
  }

  calcSum() {
    return this.items.reduce((tempAccumulator, item) => {
      return tempAccumulator + item.price;
    }, 0);
  }

  render() {
    const itemsHtmls = this.items.map(item => item.render());
    return itemsHtmls.join('');
  }
}

const items = new ItemsList();
items.fetchItems();
console.log(items.calcSum());

document.querySelector('.goods').innerHTML = items.render();
