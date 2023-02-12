import React from 'react';
import {TodoItem} from './TodoItem';
interface TodoListProps {
todoData:Array<Todo>;
toggleCompleted:ToggleCompleted;
deleteTodo:DeleteTodo;
editTodo:EditTodo;
} 
export const TodoList:React.FC<TodoListProps>=({todoData,toggleCompleted,deleteTodo,editTodo})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem editTodo={editTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>))}
    </div>)
};