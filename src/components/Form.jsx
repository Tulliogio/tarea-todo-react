import { useState } from "react";
import Swal from "sweetalert2";


const Form = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "pendiente",
    priority: true,
});

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    // utilizando el callback
    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, state, priority } = todo;

    // pequeña validación
    if (!title.trim() || !description.trim()) 
       {
        console.log("Datos incompletos");
        Swal.fire({
            title: "Error!",
            text: "Título y descripción son obligatorios",
            icon: "error",
        });
        return;
    }
    addTodo({
        id: Date.now(),
        ...todo,
        state: state === "completado",
    });
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tarea agregada con éxito",
        showConfirmButton: false,
        timer: 1500,
    });
};
  const PintarError = () => (
    <div className="alert alert-danger">Todos los campos obligatorios</div>
  );

  return (
    <div className="container mt-2">
      {error && <PintarError />}
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoNombre"
          value={todo.todoNombre}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoDescripcion"
          value={todo.todoDescripcion}
          onChange={handleChange}
        />
        <select
          className="form-control mb-2"
          name="todoEstado"
          value={todo.todoEstado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={todo.todoCheck}
            onChange={handleChange}
            name="todoCheck"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            Dar prioridad
          </label>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Form;
