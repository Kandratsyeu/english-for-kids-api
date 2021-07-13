const express = require('express')
const { Client } = require('pg')

const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
  res.end = '<h1>hi</h1>'
})

app.get('/db', async (req, res) => {
  const { Client } = require('pg')
  const client = new Client()
  client.connect()
  client.query('SELECT NOW()', (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
  })
})

app.listen(PORT, () => {
  console.log('Server has been started.')
})
