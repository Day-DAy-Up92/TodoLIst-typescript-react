import React, {MouseEvent} from 'react'
interface TodoItemProps {
    todo:Todo;
    toggleCompleted:ToggleCompleted;
    deleteTodo:DeleteTodo;

}
export const TodoItem:React.FC<TodoItemProps> = ({todo,toggleCompleted,deleteTodo})=>{
    const handleDelete = (e:MouseEvent<HTMLButtonElement>) => {
        deleteTodo(todo.id)
    }
    return (
        <li className='todo-item'> 
        <label className={todo.completed?'todo-row-completed':'todo-row'}></label>
        <input onChange={()=>{toggleCompleted(todo)}} type="checkbox" checked={todo.completed}/>{todo.text}
        <button className='delete-btn' onClick={handleDelete}>delete</button>
        </li>
    )
}