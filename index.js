const express = require('express')

const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
  res.json({
    1: 23,
  })
})

app.listen(PORT, () => {
  console.log('Server has been started.')
})
