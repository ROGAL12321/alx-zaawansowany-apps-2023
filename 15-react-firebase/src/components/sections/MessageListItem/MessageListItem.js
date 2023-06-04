const MessageListItem = (props) => {
  return (
    <li>
      <img src={props.photo} alt=""/>
      <strong>{props.author}</strong> wrote:
      <p>{props.message}</p>
    </li>
  )
}

export default MessageListItem