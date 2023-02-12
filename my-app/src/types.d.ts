type AddTodo = (newTodo:string)=>void;
type Todo = {id:number;text:string;completed:boolean;}
type ToggleCompleted = (selectedTodo:Todo)=>void;
type deleteTodo = (id:number)=>void;