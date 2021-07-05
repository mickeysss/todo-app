import React from 'react'

function Form({inputText,setInputText,todos,setTodos,status,setStatus}) {

    const onSetStatus = (event) => {
        setStatus(event.target.value)
    }

    const onSubmitTodo = (event) => {
        event.preventDefault()
        setTodos([
            ...todos, 
            {
                text: inputText,
                id: Math.floor(Math.random() * 1000),
                completed:false 
            }
        ])
        setInputText('')
    }

    const inputTextHandler= (event) => {
        setInputText(event.target.value)
    }

    return (
        <div className='form'>
            <div className='form-todo'>
            <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input' placeholder='push your todo' />
            <button onClick={onSubmitTodo} type='submit' className='todo-btn'>
            <i className="fas fa-plus-square"/>
            </button>
            </div>
            <select onChange={onSetStatus} name="categories" className='form-select' id="">
                <option value="all">Все</option>
                <option value="completed">Завершенные</option>
                <option value= "uncompleted">Незавершенные</option>
            </select>
        </div>
    )
}

export default Form
