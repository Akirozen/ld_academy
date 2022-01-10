const Todo = require("../models/Todo");

// --- API Controllers

// Create Todo
const createTodos = async (req, res) => {
  console.log("FROM CLIENT", req.body);
  const todo = await new Todo({
    text: req.body.text,
  });
  todo.save();
  console.log("complete");
  res.json(todo);
};

// Get all Todos
const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  // console.log("GET TODOS", todos);
  if (todos.length === 0) {
    return res.send("Todo List is Empty");
  }
  res.json(todos);
};

// Complete Todo
const completeTodos = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
};

// Delete Todo
const deleteTodo = async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  console.log("Todo Deleted");
  res.json(result);
};

// const testRoute = (req, res) => {
//   res.send('TEST SUCCESFUL !!!')
// }

module.exports = {
  getAllTodos,
  createTodos,
  completeTodos,
  deleteTodo,
};
