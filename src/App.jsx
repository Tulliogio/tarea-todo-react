import { useEffect, useState } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';

const InitialTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(InitialTodos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
},[todos])
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id) => {
    const newTodos = todos.map((todo => 
     { if(todo.id === id) {
      todo.state = !todo.state
    }
    return todo}
    ))
    setTodos(newTodos)
  }

  const orderTodos = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) {
        return 0;
      }
      if (a.priority) {
        return -1;
      }
      if (!a.priority) {
        return 1;
      }
    });
  };

  return (
    <div className='container mb-2'>
      <h1 className='my-3 text-center'>Formulario</h1>
    
      <Form addTodo={addTodo} />
      <Todos todos={orderTodos(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo } />
    </div>
  )
};
export default App;