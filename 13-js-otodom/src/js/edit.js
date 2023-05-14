import { editApartment, getApartment } from "./shared/apartments";
import getIdFromSearchParams from "./shared/helpers";
import { getUser } from "./shared/user";

const user = getUser();

const editApartmentForm = document.querySelector('#editApartmentForm');

const apartmentId = getIdFromSearchParams(window.location.search);

const renderApartmentDataToForm = (apartment) => {
  editApartmentForm.elements.title.value = apartment.title;
  editApartmentForm.elements.description.value = apartment.description;
  editApartmentForm.elements.price.value = apartment.price;
  editApartmentForm.elements.publication_date.value = apartment.publication_date;
}

const handleSubmit = (event) => {
  event.preventDefault();

  const editedApartment = {
    title: editApartmentForm.elements.title.value,
    description: editApartmentForm.elements.description.value,
    price: editApartmentForm.elements.price.value,
    publication_date: editApartmentForm.elements.publication_date.value
  }

  editApartment(editedApartment, apartmentId)
    .then(() => {
      window.location.href = '/index.html'
    })
}

getApartment(apartmentId)
  .then(apartment => {
    renderApartmentDataToForm(apartment)
  })

editApartmentForm.addEventListener('submit', handleSubmit)