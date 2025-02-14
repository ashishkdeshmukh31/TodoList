import React from 'react';
import Todo from './Todo';

function Todocontainer({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} delTodo={delTodo} />
      ))}
    </div>
  );
}

export default Todocontainer;
