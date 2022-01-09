const express = require('express')
const { testRoute } = require('../controllers')

const router = express.Router()

// --- API Routes

// POST routes

// GET routes
router.get('/testRoute', testRoute)

// DELETE routes

module.exports = { routes: router }
