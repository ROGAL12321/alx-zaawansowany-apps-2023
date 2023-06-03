import MessageListItem from "../MessageListItem/MessageListItem"

const MessageList = (props) => {
  return (
    <ul>
      {
        props.messages.map((message, index) => {
          return (
            <MessageListItem
              key={index}
              {...message}
            />
          )
          // return (
          //   <MessageListItem
          //     key={index}
          //     author={message.author}
          //     message={message.message}
          //   />
          // )
        })
      }
    </ul>
  )
}

export default MessageList