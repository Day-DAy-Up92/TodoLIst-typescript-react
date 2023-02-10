import React from 'react'
interface TodoItemProps {
    todo:Todo;
    toggleCompleted:ToggleCompleted;
}
export const TodoItem:React.FC<TodoItemProps> = ({todo,toggleCompleted})=>{
    return (
        <li> 
        <label className={todo.completed?'todo-row-completed':'todo-row'}></label>
        <input onChange={()=>{toggleCompleted(todo)}} type="checkbox" checked={todo.completed}/>{todo.text}
        </li>
    )
}