import React,{ChangeEvent, useState,FormEvent} from 'react';
interface TodoFormProps {
    addTodo:AddTodo;
}

export const TodoForm:React.FC<TodoFormProps> = ({addTodo}) => {
    const [newTodo,setNewTodo] = useState<string>("");
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    const handleSubmit = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        addTodo(newTodo);
        setNewTodo("");
    }
    return (
<form className='todo-form'>
    <input type='text' value={newTodo} className='todo-input' onChange={handleChange} placeholder="what's the next?" />
    <button type='submit' onClick={handleSubmit} className='todo-button'>Add new text</button>
</form>
    )
}