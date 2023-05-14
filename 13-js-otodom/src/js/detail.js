import { getApartment } from "./shared/apartments";
import getIdFromSearchParams from "./shared/helpers"

const apartmentInfo = document.querySelector('#apartmentInfo');

const apartmentId = getIdFromSearchParams(window.location.search)

const renderApartment = (apartment) => {
  apartmentInfo.innerHTML += `
    <h2> ${apartment.title} </h2>
    <p> ${apartment.description} </p>
    <p> ${apartment.price} </p>
    <p> ${apartment.publication_date} </p>
  `
}

getApartment(apartmentId)
  .then(apartment => {
    renderApartment(apartment)
  })
