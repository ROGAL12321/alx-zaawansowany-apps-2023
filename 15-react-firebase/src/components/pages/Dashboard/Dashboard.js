import { useState, useEffect } from 'react';
import { getMessages, saveMessage } from '../../../services/firebase'
import styles from './Dashboard.module.css';

// Rozbij aplikacje na komponenty:

// 1. MessageForm
// 2. MessageList
// 3. MessageListItem
// 4. InputField (input + label + errorMessage)
// 5. Button
// 6. Title

// Przerwa do 15:28

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [authorValue, setAuthorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [isMessageError, setIsMessageError] = useState(false);

  useEffect(() => {
    // funkcja tzw. callback
    getMessages(handleData)
  }, [])

  // handleData wywolywana jest za kazdym razem, jak sa zmieniane dane w firebase
  const handleData = (messages) => {
    setMessages(messages);
  }

  const handleAuthorChange = (event) => {
    setAuthorValue(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessageValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(messageValue.length < 5) {
      setIsMessageError(true)
      return;
    } else {
      setIsMessageError(false)
    }

    const newMessage = {
      author: authorValue,
      message: messageValue
    }

    setMessages([...messages, newMessage])
    saveMessage(newMessage);

    setAuthorValue('');
    setMessageValue('');
  }

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Author
            <input
              type="text"
              value={authorValue}
              onChange={handleAuthorChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message
            <input
              type="text"
              value={messageValue}
              onChange={handleMessageChange}
            />
          </label>
          {isMessageError
            ? <p>Pole message musi miec minimum 4 znaki</p>
            : null
          }
        </div>
        <button type="submit">Send</button>
      </form>
      <ul>
        {
          messages.map((message, index) => {
            return (
              <li key={index}>
                <strong>{message.author}</strong> wrote:
                <p>{message.message}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Dashboard