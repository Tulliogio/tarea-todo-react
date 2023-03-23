
const Todo = ({ todo, deleteTodo,updateTodo }) => {
     const { title, description, state, priority } = todo;
   
     return (
       <li className="list-group-item d-flex justify-content-between align-items-start">
         <div>
           <h5 className={`${state && "text-decoration-line-through"}`}>
             {title} 
           </h5>
           <p className={`${state && "text-decoration-line-through"}`}>{description}</p>
           <div className="d-flex gap-2">
             <button
               className="btn btn-sm btn-danger"
               onClick={() => deleteTodo(todo.id)}
             >
               Eliminar
             </button>
             <button
  className="btn btn-sm btn-info"
  onClick={() => updateTodo(todo.id)}
>Actualizar</button>
           </div>
         </div>
         <span className="badge bg-primary rounden-pill">
           {priority && "Prioridad"}
         </span>
       </li>
     );
   };
export default Todo;