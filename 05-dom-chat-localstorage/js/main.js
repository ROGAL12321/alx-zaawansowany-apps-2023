const messageForm = document.querySelector('#messageForm')
const messageList = document.querySelector('#messageList')
const searchForm = document.querySelector("#searchForm");

// Formularz posiada specjalne pole elements, zawierajace wszystkie pola formularza

// console.log(messageForm.elements.author)
// console.log(messageForm.elements.message)

// Poprzedni przyklad:

// let orders = JSON.parse(localStorage.getItem('orders'))

// if(orders === null) {
//   orders = [];
// }

// ES9 - Nullish operator
let messages = JSON.parse(localStorage.getItem('messages')) ?? [];

const renderMessages = (messagesToRender) => {
  messageList.innerHTML = "";

  messagesToRender.forEach(message => {
    messageList.innerHTML += `
      <li class="message">
        <div class="author">${message.author}</div>
        <div> ${message.message} </div>
      </li>
    `
  })
}

const validate = () => {
  if (messageForm.elements.author.value.length === 0) {
    alert('Pole author nie moze by puste')
    return false
  }

  if (messageForm.elements.message.value.length < 3) {
    alert("Pole Message nie moze miec mniej niz 2 znaki");
    return false
  }

  return true;
}

const handleSubmit = (event) => {
  event.preventDefault();

  const isValid = validate()

  if(!isValid) return;

  const newMessage = {
    author: messageForm.elements.author.value,
    message: messageForm.elements.message.value
  }

  // messages.push(newMessage);

  // ES6 Spread Operator
  messages = [newMessage, ...messages]
  localStorage.setItem('messages', JSON.stringify(messages));
  renderMessages(messages);

  // messageList.innerHTML += `
  //   <li class="message">
  //     <div class="author">${messageForm.elements.author.value}</div>
  //     <div> ${messageForm.elements.message.value} </div>
  //   </li>
  // `

  // messageForm.elements.author.value = ''
  // messageForm.elements.message.value = ''

  // Formularz posiada wbudowana metode reset, ktora sluzy do resetowania pol formularza
  messageForm.reset()
}

const filterMessagesByMessage = (collection, phrase) => {
  return collection.filter(item => {
    return item.message.toLowerCase().includes(phrase)
  })
}

const handleSearch = (event) => {
  event.preventDefault();

  const phrase = searchForm.elements.search.value;
  const filteredMessages = filterMessagesByMessage(messages, phrase);

  renderMessages(filteredMessages);
}

renderMessages(messages);
messageForm.addEventListener('submit', handleSubmit);
searchForm.addEventListener('submit', handleSearch)