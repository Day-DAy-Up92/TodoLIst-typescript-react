type AddTodo = (newTodo:string)=>void;
type Todo = {id:number;text:string;completed:boolean;}
type ToggleCompleted = (selectedTodo:Todo)=>void;
type DeleteTodo = (id:number)=>void;
type EditTodo = (id:number,editedTodo:string)=>void;