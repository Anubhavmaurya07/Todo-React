import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {id:Date.now(),text,completed:false}
    setTodos([...todos, newTodo])
  }
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed } : todos));
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <h1 style={{color:"crimson", fontWeight:"800"}}>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
