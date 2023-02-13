import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList} from './components/TodoList';
// import { TodoItem } from './components/TodoItem';
import './App.css';
import { AddTodo, ClearCompletedTodos, DeleteTodo, EditTodo, ShowActiveTodos, ShowAllTodos, ShowCompletedTodos, Todo, ToggleCompleted } from './types';
function App() {
  const [todos,setTodos] = useState<Array<Todo>>([]);
   const [type,setType] = useState(0)
 const addTodo:AddTodo = newTodo=>{
  if(!newTodo){alert("Please enter your Task!")}
  else if(newTodo!==" "){
    setTodos([...todos,{id:todos.length,text:newTodo,completed:false}]);
  }
 
}
const deleteTodo:DeleteTodo = id=>{
  const result = todos.findIndex((todo) => todo.id === id);
  todos.splice(result, 1);
  setTodos([...todos]);
}
const editTodo:EditTodo =(id,value)=>{
  let newTodo:Todo;
  const newTodos = [...todos];
  const result = newTodos.filter((todo) => todo.id === id);
    for (let index = 0; index < result.length; index++) {
      newTodo = result[index]; 
      if (!value) {
        alert("please enter your task");
    }else{
      newTodo.text = value
      setTodos(newTodos)
    }}
}
const toggleCompleted:ToggleCompleted = selectedTodo =>{
 const updateTodo = todos.map((todo) =>{
  if(todo===selectedTodo){
    return {...todo,completed:!todo.completed}
  }return todo;
 });
 setTodos(updateTodo)
};

  const showAllTodos:ShowAllTodos=()=>{
    setType(0);
  };
  const showActiveTodos:ShowActiveTodos=()=>{
    setType(1);
  };
  const showCompletedTodos:ShowCompletedTodos = ()=>{
     setType(2);
    };
    const clearCompletedTodos:ClearCompletedTodos = ()=>{
      const newTodos = [...todos];
      const rest = newTodos.filter((todo) => todo.completed === false);
      setTodos([...rest]);
    };

  return (
    <div className="todo-app">
      <h1 className='header'>TodoList</h1>
      <TodoForm addTodo={addTodo}/>
      {(type===0)?
      <TodoList editTodo={editTodo} todoData={todos} toggleCompleted={toggleCompleted } deleteTodo={deleteTodo}/>:((type===1)?<TodoList editTodo={editTodo} todoData={todos.filter((todo)=>todo.completed===false)} toggleCompleted={toggleCompleted } deleteTodo={deleteTodo}/>:<TodoList editTodo={editTodo} todoData={todos.filter((todo)=>todo.completed===true)} toggleCompleted={toggleCompleted } deleteTodo={deleteTodo}/>)}
      <div className='button-list'>
        <button className='btn' onClick={showAllTodos}>All</button>
        <button className='btn' onClick={showActiveTodos}>Active</button>
        <button className='btn' onClick={showCompletedTodos}>Completed</button>
        <button className='btn' onClick={clearCompletedTodos}>Clear completed</button>
      </div>
    </div>
  );
}

export default App;
