type AddTodo = (newTodo:string)=>void;
type Todo = {text:string;completed:boolean;}
type ToggleCompleted = (selectedTodo:Todo)=>void;
