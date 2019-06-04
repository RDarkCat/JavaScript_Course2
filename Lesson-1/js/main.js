/**
 * 1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
 * 2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
 * 3. * Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
 */

const goods = [
  { name: 'iPhone X', price: 70000 },
  { name: 'Защитное стекло', price: 1000 },
];


let renderItem = (name='Товар отсутствует', price=99999999) => {
  return `<div class="item">
    <h2>${name}</h2>
    <span>${price}</span>
    <button class="buy-btn">Купить</button>
    </div>`;
};

// запятые добавляются потому что map состыковывая строки использует toString у которого стандартный разделитель запятая
// это можно исправить при помощи функции join
let renderList = (list=products) => {
  const itemsHtmls = list.map(item => renderItem(item.name, item.price)).join('');
  document.querySelector('.goods').innerHTML = itemsHtmls;
};

renderList(goods);
