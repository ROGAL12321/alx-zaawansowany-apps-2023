import Button from "../../atoms/Button/Button";
import InputField from "../../atoms/InputField/InputField";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <InputField
        title="Task Name"
        type="text"
        value={props.inputValue}
        onChange={props.handleTaskNameChange}
      />
      <Button type="submit" text="Send"/>
    </form>
  )
}

export default TodoForm;