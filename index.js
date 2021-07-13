const express = require('express')
const { Client } = require('pg')

const app = express()

const PORT = process.env.PORT || 80

client.connect()

app.get('/', (req, res) => {
  res.end = '<h1>hi</h1>'
})

app.get('/db', async (req, res) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  })
  res.end = client.query(
    'SELECT table_schema,table_name FROM information_schema.tables;'
  )
  client.end()
})

app.listen(PORT, () => {
  console.log('Server has been started.')
})
