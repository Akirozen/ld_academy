const Todo = require("../models/Todo");

// --- API Controllers

// Create Todo
const createTodos = async (req, res) => {
  try {
    
    const todo = await new Todo({
      text: req.body.text,
    });
    todo.save();
    console.log("Todo Created !");
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get all Todos
const getAllTodos = async (req, res) => {
  try {
    
    const todos = await Todo.find();
    // console.log("GET TODOS", todos);
    if (todos.length === 0) {
      return res.send("Todo List is Empty");
    }
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Complete Todo
const completeTodos = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  try {
    
    const result = await Todo.findByIdAndDelete(req.params.id);
    console.log("Todo Deleted !");
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllTodos,
  createTodos,
  completeTodos,
  deleteTodo,
};
