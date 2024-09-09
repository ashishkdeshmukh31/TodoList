import React from 'react';

function Inputcontainer({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writeTodo} placeholder="Add a new task" />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Inputcontainer;
