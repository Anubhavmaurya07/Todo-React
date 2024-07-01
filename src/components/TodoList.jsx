import './TodoList.css'
const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  const handleToggle = (id) => {
    toggleTodo(id);
  }
  const handleDelete = (id) => {
    deleteTodo(id);
  }
  return (
    <div className='todo-list'  style={{border: todos.length === 0 ? "none" : "1px solid black" }}>
        <ul>
          {
            todos.map((todo) => <li key={todo.id}><p>{todo.text}</p><p>{todo.completed ? "Completed" : "Not Completed"}</p> <button onClick={() => handleToggle(todo.id)}>Toggle</button> <button onClick={() => handleDelete(todo.id)}>Delete</button></li>)
          }
        </ul>
    </div>
  )
}

export default TodoList