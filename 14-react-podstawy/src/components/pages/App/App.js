import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getTodos, addTodo, removeTodo } from '../../../services/todos';

import './App.css';
import TodoList from '../../sections/TodoList/TodoList';
import TodoForm from '../../sections/TodoForm/TodoForm';
import Title from '../../atoms/Title/Title';

// const Header = () => {
//   return (
//     <header>
//       Hello World
//     </header>
//   )
// }

// const name = 'Damian';

// const Footer = () => {
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   )
// }

// const List = () => {
//   return (
//     // Wszystkie Komponenty/Fragmenty JSX musza byc wewnatrz jakiegos znacznika HTML
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>{todo.name}</li>
//       ))}
//     </ul>
//   )
// }

function App() {
  // jak wywolac useState
  // const [zmienna_ze_stanu, funkcja_zmieniajaca_stan] = useState(wartosc_poczatkowa_stanu)
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  // useEffect jest to funkcjonalnosc komponentow, pozwalajaca na odpalenie jakies funkcji/kawalka kodu w zdefiniowanym przez nas momencie.

  // w useEffect robimy zapytania do localStorage lub bazy danych
  useEffect(() => {
    getTodos()
      .then(data => {
        setTodos(data);
      })
  }, [])
  // pusta tablica oznacza, ze useEffect wykona sie tylko raz, po pierwszym zaladowaniu komponentu.


  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      name: inputValue
    }

    const newTodos = [...todos, newTodo]

    setTodos(newTodos);
    addTodo(newTodo)

    setInputValue('');
  }

  const handleTaskNameChange = (event) => {
    // event.target.value = to co uzytkownik wpisuje do inputa

    // kazdorazowo uruchomienie funkcji do zmiany stanu powoduje przeladowanie komponentu
    setInputValue(event.target.value);
  }

  const handleRemove = (id) => {
    const filteredTasks = todos.filter(todo => todo.id !== id);

    removeTodo(id);
    setTodos(filteredTasks);
  }

  return (
    <div className="App">
      <Title text="Welcome from App" />

      <TodoForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        handleTaskNameChange={handleTaskNameChange}
      />

      <TodoList
        todos={todos}
        handleRemove={handleRemove}
      />
    </div>
  );
}


export default App;


// Stworz 2 atomowe komponenty: Header i Input. Zastap nimi wszystkie naglowki i inputy w aplikacji. Ostyluj je.