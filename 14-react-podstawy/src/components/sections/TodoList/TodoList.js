import Button from "../../atoms/Button/Button";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <li key={todo.id}>
            {todo.name}
            <Button text="X" onClick={() => props.handleRemove(todo.id)}/>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList;