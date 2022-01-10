import React, { useState, useEffect } from 'react'
import { Card, CardContent, Typography, Container, Button } from '@mui/material'

const API = 'http://localhost:5000/api/v1'

const TodoList = ({ todoNo, todo, todoID }) => {
  const [todos, setTodos] = useState([])

  const deleteTodo = async (todoID) => {
    console.log(todoID)

    const data = await fetch(API + '/getSingleTodo/' + todoID, {
      method: 'DELETE',
    }).then((res) => res.json())
    setTodos((todos) => todos.filter((todo) => todo._id !== data._id))
  }

  return (
    <Container>
      <Card
        className='root'
        variant='outlined'
        style={{ marginTop: 35, background: 'lightgray' }}
      >
        <CardContent>
          <Typography variant='h5' component='h2'>
            {todoNo + 1}.&nbsp;{todo}
            <Button onClick={() => deleteTodo(todoID)}>Del</Button>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default TodoList
