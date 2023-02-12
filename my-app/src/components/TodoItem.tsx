import React, {MouseEvent, useRef, useState,KeyboardEvent} from 'react'
import { DeleteTodo, EditTodo, Todo, ToggleCompleted } from '../types';
interface TodoItemProps {
    todo:Todo;
    toggleCompleted:ToggleCompleted;
    deleteTodo:DeleteTodo;
    editTodo:EditTodo;

}
export const TodoItem:React.FC<TodoItemProps> = ({todo,toggleCompleted,deleteTodo,editTodo})=>{
    const [getSearchVal, SetGetSearchVal] = useState('');
    const [edited,setEdited] = useState(true);
    const editedValue = useRef(null);
    const getIptValue = (event: { target: { value: string } }) => {
        SetGetSearchVal(event.target.value);
      };
    const handleDelete = (e:MouseEvent<HTMLButtonElement>) => {
        deleteTodo(todo.id)
    }
    const handleEdit = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            setEdited(!edited);
            editTodo(todo.id, getSearchVal);
          }
    }
    return (
        <li className='todo-item'>
        <input onChange={()=>{toggleCompleted(todo)}} type="checkbox" checked={todo.completed}/>{edited?<p className={todo.completed?"done-todo":"wait-todo"} onDoubleClick={()=>{setEdited(!edited)}}>{todo.text}</p>:<input defaultValue={todo.text} type="text" onChange={getIptValue} ref={editedValue} onKeyDown={handleEdit}/>}
        <button className='delete-btn' onClick={handleDelete}>delete</button>
        </li>
    )
}