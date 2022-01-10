const express = require("express");
const {
  getAllTodos,
  createTodos,
  deleteTodo,
  completeTodos,
} = require("../controllers");

const router = express.Router();

// --- API Routes

// POST routes
router.post("/createTodos", createTodos);

// GET routes
router.get("/getAllTodos", getAllTodos);
router.get("/completeTodos/:id", completeTodos);

// DELETE routes
router.delete("/getSingleTodo/:id", deleteTodo);

module.exports = router;
