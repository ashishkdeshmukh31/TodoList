import { useState } from 'react';
import './App.css';
import Inputcontainer from './components/Inputcontainer';
import Todocontainer from './components/Todocontainer';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== '') {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) => 
      prevTodos.filter((_, prevTodosIndex) => prevTodosIndex !== todoIndex)
    );
  }

  return (
    <main>
      <h1>To Do List</h1>
      <Inputcontainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <Todocontainer todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
