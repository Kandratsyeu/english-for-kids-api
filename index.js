const express = require('express')
const { Client } = require('pg')

const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
  res.end('<h1>hi</h1>')
})

app.get('/db', async (req, res) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  })

  client.connect()

  client.query(
    'SELECT table_schema,table_name FROM information_schema.tables WHERE table_name = "columns";'
  )
})

app.listen(PORT, () => {
  console.log('Server has been started.')
})
