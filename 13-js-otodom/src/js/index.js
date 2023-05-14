import { getApartments } from "./shared/apartments";

const list = document.querySelector('#apartmentsList');

// Skranie funkcji strzalkowych ES6

// Pelna wersja
// const sum = (a, b) => {
//   return a + b;
// }

// Skrocona wersja
// 1. Kiedy funkcja strzalkowa zwraca tylko jedna rzecz i nie wykonuje zadnych zaawansowanych kalkulacji, mozemy usunac {} i slowo return
const sum = (a, b) => a + b;

// console.log(sum(2,2));

// const multiply = (a) => a * 2;

// 2. Jesli funkcja strzalkowa przyjmuje tylko 1 parametr, to moge usunac () do okola tego parametru
const multiply = a => a * 2;

const renderApartments = apartments => {
  apartments.forEach(apartment => {
    list.innerHTML += `
      <li>
        <h3> ${apartment.title} </h3>
        <p> Cena ${apartment.price}zł </p>
        <p> Data dodania ${apartment.publication_date} </p>
        <a href="/detail.html?id=${apartment.id}"> Przejdz do mieszkania > </a>
      </li>
    `
  })
}

// 3. Jesli funkcja uruchamia tylko inna funkcje i przekazuje ten sam parametr w dol, to jestem w stanie to skrocic

// Pelna wersja
getApartments()
  .then(apartments => {
    renderApartments(apartments)
  })

// Skrocona wersja
// getApartments().then(renderApartments)