import Button from "../../atoms/Button/Button";

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Task Name
        <input
          type="text"
          value={props.inputValue}
          onChange={props.handleTaskNameChange}
        />
      </label>
      <Button type="submit" text="Send"/>
    </form>
  )
}

export default TodoForm;