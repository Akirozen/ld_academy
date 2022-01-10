const Todo = require('../models/Todo')

// --- API Controllers

const createTodo = (req, res) => {
  console.log('FROM CLIENT', req.body)
  const todo = new Todo({
    text: req.body.text,
  })
  todo.save()
  console.log('complete')
  res.json(todo)
}

//!
const getAllTodos = async (req, res) => {
  const todos = await Todo.find()
  // console.log('GET TODOS', todos)
  res.json(todos)
}

const deleteTodo = async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id)
  console.log('Todo Deleted')
  res.json(result)
}

// const testRoute = (req, res) => {
//   res.send('TEST SUCCESFUL !!!')
// }

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
}
