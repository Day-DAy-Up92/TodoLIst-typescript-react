import React from 'react';
import {TodoItem} from './TodoItem';
interface TodoListProps {
todoData:Array<Todo>;
toggleCompleted:ToggleCompleted;
} 
export const TodoList:React.FC<TodoListProps>=({todoData,toggleCompleted})=>{
    return (<div className='todo-list'>
{todoData.map(todo=>(<TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>))}
    </div>)
};