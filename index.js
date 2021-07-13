const express = require('express')
const { Client } = require('pg')

const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
  res.end = '<h1>hi</h1>'
})

app.get('/db', async (req, res) => {
  res.end = '<h1>DB</h1>'
})

app.listen(PORT, () => {
  console.log('Server has been started.')
})
