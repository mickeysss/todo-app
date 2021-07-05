import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos,filteredTodos,setFilteredTodos}) {
    return (
        <div>
           <ul className='todo-list'>
               {filteredTodos.map((todo) => ( 
           <Todo text={todo.text} id={todo.id} todo={todo} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />)  
               )}
           </ul> 
        </div>
    )
}

export default TodoList
