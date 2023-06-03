import Button from "../../atoms/Button/Button"
import InputField from "../InputField/InputField"

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <InputField
        label="Author"
        value={props.authorValue}
        handleChange={props.handleAuthorChange}
      />
      <InputField
        label="Message"
        value={props.messageValue}
        handleChange={props.handleMessageChange}
        isError={props.isMessageError}
        errorMessage="Pole message musi miec minimum 4 znaki"
      />
      <Button type="submit" text="Send"/>
    </form>
  )
}

export default MessageForm