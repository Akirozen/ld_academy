const express = require('express')
const cors = require('cors')

const { testRoute } = require('./controllers')

require('./database')()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', testRoute)

app.listen('5000', () => {
  console.log('Server connected port 5000...')
})
