import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { getMessages, postMessage, removeMessage } from "../../../services/messages";

// 10:35

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [allMessages, setAllMessages] = useState([])
  const [authorValue, setAuthorValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [searchInputValue, setSearchInputValue] = useState('')

  useEffect(() => {
    getMessages()
      .then(messages => {
        saveMessages(messages);
      })
  }, [])

  const saveMessages = (messages) => {
    setMessages(messages);
    setAllMessages(messages);
  }

  const handleAuthorChange = (event) => {
    setAuthorValue(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessageValue(event.target.value)
  }

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault();

    const results = allMessages.filter(message =>
      message.message.toLowerCase().includes(searchInputValue.toLowerCase())
    )

    setMessages(results);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: uuidv4(),
      author: authorValue,
      message: messageValue
    }

    postMessage(newMessage)
    saveMessages([...messages, newMessage])

    setAuthorValue('');
    setMessageValue('');
  }

  const handleMessageRemove = (id) => {
    const filteredMessages = messages.filter(message => message.id !== id)
    removeMessage(id)
    saveMessages(filteredMessages)
  }

  return (
    <div>
      <h1>Hello Form</h1>

      <form style={{ margin: '20px 0' }} onSubmit={handleSearch}>
        <h2>Search form</h2>
        <label>
          Search
          <input type="text" value={searchInputValue} onChange={handleSearchInputChange}/>
        </label>
        <button>Search</button>
      </form>

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
              <button onClick={() => handleMessageRemove(message.id)}>Usun</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Chat;