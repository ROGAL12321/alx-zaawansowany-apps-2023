const tableBody = document.querySelector('#orderTableBody')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')
const removeOrdersButton = document.querySelector('#removeOrdersButton');
const calculateButton = document.querySelector('#calculateButton');
const orderSum = document.querySelector('#orderSum');
const orderAverage = document.querySelector('#orderAverage');

// Struktura danych: tablica obiektów
// 1. Obiekty muszą mieć takie same pola
// 2. Kolejność zamówień ma znaczenie pod kątem dodania do HTML

let orders = JSON.parse(localStorage.getItem('orders'))

if(orders === null) {
  orders = [];
}

const renderOrders = () => {
  // for of
  tableBody.innerHTML = '';

  for(let order of orders) {
    tableBody.innerHTML += `
      <tr>
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.price}zł</td>
      </tr>
    `
  }
}

const validate = (newOrder) => {
  if(newOrder.name.length < 2) {
    alert ('Pole produkt musi miec wiecej niz 2 znaki')
    return false;
  }

  if(newOrder.price < 0) {
    alert('Pole cena nie moze być mniejsze od 0')
    return false;
  }

  for(let order of orders) {
    if(order.id === newOrder.id) {
      alert('Pole ID nie moze sie powtarzac')
      return false
    }
  }

  return true;
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newOrder = {
    id: parseInt(orderId.value),
    name: orderName.value,
    price: parseFloat(orderPrice.value)
  }

  const isValid = validate(newOrder)
  if(!isValid) return;

  orders.push(newOrder);
  // JSON.stringify potrzebuje aby zapisac to w formatu JS do formatu JSON
  localStorage.setItem('orders', JSON.stringify(orders));
  renderOrders();

  orderId.value = "";
  orderName.value = "";
  orderPrice.value = "";
}

const removeOrders = () => {
  orders = [];
  localStorage.removeItem('orders');
  renderOrders();
}

const calculateOrders = () => {
  let sum = 0;

  for(let order of orders) {
    sum += order.price
  }

  orderSum.innerHTML = `${sum.toFixed(2)}zł`;

  // ternary operator (operator trojargumentowy)
  orderAverage.innerHTML = orders.length === 0
    ? `0zł`
    : `${(sum / orders.length).toFixed(2)}zł`
}


renderOrders();
orderForm.addEventListener("submit", handleSubmit);
removeOrdersButton.addEventListener('click', removeOrders);
calculateButton.addEventListener('click', calculateOrders);




// JS a JSON


// JS - jezyk programowania
// JSON - sposob zapisu danych, majacy okreslona strukture (brat JSON to XML)

// Fragment JS

// const table = {
//   id: 1,
//   name: 'Pod oknem',
//   people: 4
// }

// JSON

// {
//   "id": 1,
//   "name": "Pod oknem",
//   "people": 4
// }


// JS posiada wbudowane metody do zamian JS do JSON i na odwrot.

// Tablica obiektow
console.log(orders);

// JSON
const ordersAsJSON = JSON.stringify(orders);
console.log(ordersAsJSON)

const ordersFromJSON = JSON.parse(ordersAsJSON);
console.log(ordersFromJSON);


// localStorage

// localStorage jest dostepny w obiekcie window, ale ze window jest domyslnym slowem przed kazda funkcja, to nie trzeba tego wpisywac

// localStorage.getItem('klucz') // pobranie wartosci ze schowka
// localStorage.setItem('klucz', 'wartosc') // zapisanie do schowka
// localStorage.removeItem('klucz') // usuniecie ze schowka
