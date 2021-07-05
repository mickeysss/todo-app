import React from 'react'

function Todo({text, completed,todo,todos,setTodos,id}) {
    
    const onDeleteTodo = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const onCompletedTodo = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                        ...item, 
                        completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}> {text} </li>
                <button onClick={onCompletedTodo} className='complete-btn'>
                <i class="fas fa-check-circle"></i>
            </button>
            <button onClick={onDeleteTodo} className='trash-btn'>
                 <i class="fas fa-trash"></i>
            </button>

        </div>
        
    )
}

export default Todo
