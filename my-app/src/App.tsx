import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import './App.css';

function App() {
  const [todos,setTodos] = useState<Array<Todo>>([]);
const addTodo:AddTodo = newTodo=>{
  if(newTodo!==" "){
    setTodos([...todos,{text:newTodo,completed:false}]);
  }
}
  return (
    <div className="App">
      <h1 className='header'>todos</h1>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
