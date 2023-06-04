import { useContext } from "react"

import { GlobalContext } from "../../../contexts/global"
import Button from "../../atoms/Button/Button"
import InputField from "../InputField/InputField"

const MessageForm = (props) => {
  const state = useContext(GlobalContext);

  return (
    <form onSubmit={props.handleSubmit}>
      <img
        src={state.user.photoURL}
        alt=""
      />
      <InputField
        label="Author"
        value={state.user.displayName}
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