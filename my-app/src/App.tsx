import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList} from './components/TodoList';
// import { TodoItem } from './components/TodoItem';
import './App.css';

function App() {
  const [todos,setTodos] = useState<Array<Todo>>([]);
const addTodo:AddTodo = newTodo=>{
  if(newTodo!==" "){
    setTodos([...todos,{id:todos.length,text:newTodo,completed:false}]);
  }
}
const deleteTodo:DeleteTodo = id=>{
  const result = todos.findIndex((todo) => todo.id === id);
  todos.splice(result, 1);
  setTodos([...todos]);
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
    <div className="todo-app">
      <h1 className='header'>TodoList</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todoData={todos} toggleCompleted={toggleCompleted } deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
