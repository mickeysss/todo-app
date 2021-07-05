
import { useState,useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([])
  const [status,setStatus] = useState('all')
  const [filteredTodos,setFilteredTodos] = useState([])

  useEffect(() => {
      filterHandler()
    }
  , [todos,status])

  function filterHandler() {
    switch (status) {
      case 'completed':
      setFilteredTodos(todos.filter(item => item.completed === true))  
      break; 
      case 'uncompleted':
        setFilteredTodos(todos.filter(item => item.completed === false))  
        break; 
      default:
          setFilteredTodos(todos)  
          break; 
    }
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Todo-app</h1>
        <h2>by mickeysss</h2>
      </header>
      <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos} status={status} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} inputText={inputText} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos}/>
    </div>
  );
}

export default App;
