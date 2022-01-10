const Todo = require("../models/Todo");

// --- API Controllers

// Create Todo
const createTodos = async (req, res) => {
  const todo = await new Todo({
    text: req.body.text,
  });
  todo.save();
  console.log("Todo Created !");
  res.status(201).json(todo);
};

// Get all Todos
const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  // console.log("GET TODOS", todos);
  if (todos.length === 0) {
    return res.send("Todo List is Empty");
  }
  res.status(200).json(todos);
};

// Complete Todo
const completeTodos = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.status(200).json(todo);
};

// Delete Todo
const deleteTodo = async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  console.log("Todo Deleted !");
  res.status(200).json(result);
};

module.exports = {
  getAllTodos,
  createTodos,
  completeTodos,
  deleteTodo,
};
