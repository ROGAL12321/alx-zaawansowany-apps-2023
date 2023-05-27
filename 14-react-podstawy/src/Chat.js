import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

// Zrob obsluge Chatu z localStorage


const Chat = () => {
  const [messages, setMessages] = useState([])
  const [authorValue, setAuthorValue] = useState('');
  const [messageValue, setMessageValue] = useState('')

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem('messages')) ?? []
    setMessages(messages);
  }, [])

  const handleAuthorChange = (event) => {
    setAuthorValue(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessageValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessages = [
      ...messages,
      {
        id: uuidv4(),
        author: authorValue,
        message: messageValue
      }
    ];

    setMessages(newMessages)
    localStorage.setItem('messages', JSON.stringify(newMessages));

    setAuthorValue('');
    setMessageValue('');
  }

  // 1. Nad formualarzem do dodawania elementu, dodaj formularz sluzacy do wyszukwiania. Niech formularz sklada sie z pola input i buttona "Szukaj". Po wcisnieciu buttona, przeszukaj liste wiadomosci po polu message.

  // 2. Do kazdej wiadomosci dodaj ikonke X, ktora po wcisnieciu usunie wiadomosc.
  // 3. Zrob obsluge odczytywania, zapisywania i usuwania za pomoca bazy danych


  return (
    <div>
      <h1>Hello Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Author
          <input type="text" value={authorValue} onChange={handleAuthorChange}/>
        </label>
        <label>
          Message
          <input type="text" value={messageValue} onChange={handleMessageChange}/>
        </label>
        <button>Send</button>
      </form>
      <ul>
        {
          messages.map(message => (
            <li key={message.id}>
              <strong>{message.author}</strong> wrote:
              <p>{message.message}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Chat;