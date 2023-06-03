const MessageListItem = (props) => {
  return (
    <li>
      <strong>{props.author}</strong> wrote:
      <p>{props.message}</p>
    </li>
  )
}

export default MessageListItem