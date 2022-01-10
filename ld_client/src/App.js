import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const API = 'http://localhost:5000/api/v1'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    GetTodos()
  }, [])

  // console.log(todos)

  const GetTodos = () => {
    fetch(API + '/getAllTodos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log('Error: ', err))
  }

  return (
    <>
      <Navbar />
      <TodoForm
        todos={(text) => {
          console.log(text)
          setTodos([...todos, text])
        }}
      />
      {todos.map((todo, index) => {
        return (
          <TodoList
            todoNo={index}
            todo={todo.text}
            key={todo._id}
            todoID={todo._id}
          />
        )
      })}
    </>
  )
}

export default App
