import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList} from './components/TodoList';
// import { TodoItem } from './components/TodoItem';
import './App.css';

function App() {
  const [todos,setTodos] = useState<Array<Todo>>([]);
const addTodo:AddTodo = newTodo=>{
  if(newTodo!==" "){
    setTodos([...todos,{text:newTodo,completed:false}]);
  }
}
const toggleCompleted:ToggleCompleted = selectedTodo =>{
 const updateTodo = todos.map((todo) =>{
  if(todo===selectedTodo){
    return {...todo,completed:!todo.completed}
  }return todo;
 });
 setTodos(updateTodo)
};
  return (
    <div className="App">
      <h1 className='header'>todos</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todoData={todos} toggleCompleted={toggleCompleted }/>
    </div>
  );
}

export default App;
