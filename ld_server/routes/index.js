const express = require('express')
const { getAllTodos, createTodo, deleteTodo } = require('../controllers')

const router = express.Router()

// --- API Routes

// POST routes
router.post('/createTodos', createTodo)

// GET routes
router.get('/getAllTodos', getAllTodos)

// DELETE routes
router.delete('/getSingleTodo/:id', deleteTodo)

module.exports = router
