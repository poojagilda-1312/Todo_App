import React, { useState } from 'react'

 const Todo = () => {
    const [todos,setTodos] = useState([])
    const [inputValue, setInputValue ] = useState('');
    const addTodo =()=>{
        if(inputValue.trim()!== ''){
            const newTodo ={
                id: new Date().getTime(),
                text : inputValue
            }
            setTodos([...todos,newTodo])
            setInputValue('')
        }
    }
    const deleteTodo = (id)=>{
      const updatedTodo = todos.filter((todo) =>{
        return   todo.id !== id})
      
       setTodos(updatedTodo)
      
    }
    const editTodo =(id,text)=>{
      setInputValue(text)

    }
  return (    
    <div className='Todo-container'>
        <h2>TODO LIST</h2>
        <input type = 'text' value={inputValue} onChange= {(e)=>{setInputValue(e.target.value)}}></input>
        <button onClick={addTodo}>Add</button>
        <ul> 
            {todos.map((todo)=>{
           return  <li key= {todo.id}>{todo.text}  
            <button onClick={()=>{deleteTodo(todo.id)}}>
              Delete
            </button> <button onClick={()=>{editTodo(todo.id,todo.text)}}>Edit</button>  </li>   
            }) } 
        </ul>
      
    </div>
  )
}
export default Todo
