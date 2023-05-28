const MESSAGES_URL = 'http://localhost:8000/messages'

export const getMessages = () => {
  return fetch(MESSAGES_URL)
    .then(res => res.json())
}

export const postMessage = (newMessage) => {
  fetch(MESSAGES_URL, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(newMessage)
  })
}

export const removeMessage = (id) => {
  fetch(`${MESSAGES_URL}/${id}`, {
    method: "DELETE"
  })
}