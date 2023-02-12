import React from 'react';
import {TodoItem} from './TodoItem';
interface TodoListProps {
todoData:Array<Todo>;
toggleCompleted:ToggleCompleted;
deleteTodo:DeleteTodo
} 
export const TodoList:React.FC<TodoListProps>=({todoData,toggleCompleted,deleteTodo})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>))}
    </div>)
};