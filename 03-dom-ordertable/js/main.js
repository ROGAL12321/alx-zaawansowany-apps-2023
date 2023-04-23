// 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli

// 4*. Napisz walidacje formularza spelniajaca dane kryteria
  // - Pole price musi byc wieksze od 0
  // - Pole name musi miec wiecej niz 2 znaki
  // - Pole ID musi byc unikalne (nie moze sie powtarzac)

// document - DOM, reprezentacja HTML w JS
// window - okno przegladrki

const table = document.querySelector('#orderTable')
const orderForm = document.querySelector('#orderForm');
const orderId = document.querySelector('#id');
const orderName = document.querySelector('#name')
const orderPrice = document.querySelector('#price')

// Usuwanie:

// table.remove() - usuwanie elementu wraz z znacznikiem
// table.innerHTML = "" - usuwanie wnetrza z elementu

// Dodawanie elementu do HTML:


// function handleSubmit() {
//   console.log('hej!');
// }



const handleSubmit = (event) => {
  // preventDefalt() jest to metoda, sluzaca do zatrzymania domyslnego eventu przegladarki
  event.preventDefault();

  // Dla chetnych:

  // console.log(orderForm.elements.name.value)
  // console.log(orderForm.elements.price.value)
  // console.log(orderForm.elements.id.value)

  table.innerHTML += `
    <tr>
      <td>${orderId.value}</td>
      <td>${orderName.value}</td>
      <td>${orderPrice.value}zł</td>
    </tr>
  `

  orderId.value = "";
  orderName.value = "";
  orderPrice.value = "";
}

orderForm.addEventListener("submit", handleSubmit);

