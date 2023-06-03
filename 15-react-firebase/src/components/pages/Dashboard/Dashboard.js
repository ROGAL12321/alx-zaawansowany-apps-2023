import { useState, useEffect } from 'react';
import { getMessages, saveMessage } from '../../../services/firebase'
import Title from '../../atoms/Title/Title';
import MessageForm from '../../sections/MessageForm/MessageForm';
import MessageList from '../../sections/MessageList/MessageList';
import styles from './Dashboard.module.css';

// Rozbij aplikacje na komponenty:

// 1. MessageForm
// 2. MessageList
// 3. MessageListItem
// 4. InputField (input + label + errorMessage)
// 5. Button
// 6. Title

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
      <Title text="Dashboard" />
      <MessageForm
        handleSubmit={handleSubmit}
        authorValue={authorValue}
        handleAuthorChange={handleAuthorChange}
        messageValue={messageValue}
        handleMessageChange={handleMessageChange}
        isMessageError={isMessageError}
      />
      <MessageList messages={messages} />
    </div>
  )
}

export default Dashboard