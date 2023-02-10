import React from 'react';
import {TodoItem} from './TodoItem';
interface TodoListProps {
todoData:Array<Todo>;
toggleCompleted:ToggleCompleted;
} 
export const TodoList:React.FC<TodoListProps>=({todoData,toggleCompleted})=>{
    return (<ul className='todo-list'>
{todoData.map(todo=>(<TodoItem key={todo.text} todo={todo} toggleCompleted={toggleCompleted}/>))}
    </ul>)
};