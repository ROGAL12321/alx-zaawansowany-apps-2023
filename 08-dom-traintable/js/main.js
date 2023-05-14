const list = document.querySelector('#trainList');
const searchForm = document.querySelector('#searchForm')
const addTrainForm = document.querySelector('#addTrainForm');

// Nullish operator ES9
const trains = JSON.parse(localStorage.getItem('trains')) ?? []

const renderData = (data) => {
  list.innerHTML = "";

  data.forEach(train => {
    list.innerHTML += `
      <li>
        <p>Pociąg ${train.name} z ${train.from} do ${train.to}</p>
        <p>dnia ${train.date} o ${train.time}</p>
      </li>
    `
  })
}

const handleSearch = (event) => {
  event.preventDefault();

  const searchValue = searchForm.elements.search.value

  const filteredTrains = trains.filter(train => {
    return train.name.toLowerCase()
      .includes(searchValue.toLowerCase())
  })

  renderData(filteredTrains)
}

const handleSubmit = (event) => {
  event.preventDefault();

  trains.push({
    from: addTrainForm.elements.from.value,
    to: addTrainForm.elements.to.value,
    name: addTrainForm.elements.name.value,
    date: addTrainForm.elements.date.value,
    time: addTrainForm.elements.time.value
  })

  localStorage.setItem('trains', JSON.stringify(trains));

  renderData(trains);
  addTrainForm.reset();
}

renderData(trains)
searchForm.addEventListener('submit', handleSearch)
addTrainForm.addEventListener('submit', handleSubmit)
