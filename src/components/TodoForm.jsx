import { useState } from 'react';
import './TodoForm.css';
const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  }
  return (
    <div className="todo-container">
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Enter Todo'
                onChange={handleChange}
                value={input}
            />
            <button type='submit'>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm