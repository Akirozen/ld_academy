const mongoose = require('mongoose')

module.exports = () => {
  mongoose
    .connect('mongodb://localhost/test-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to Mongodb......'))
}
