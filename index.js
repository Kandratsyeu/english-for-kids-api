const express = require('express')
const { Client } = require('pg')

const app = express()

const PORT = process.env.PORT || 80

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

app.get('/', (req, res) => {
  res.end('<h1>hi</h1>')
})

app.get('/db', async (req, res) => {
  client.connect()

  res.end(
    await client.query(
      'SELECT table_schema,table_name FROM information_schema.tables WHERE table_name = "columns";'
    )
  )

  client.end()
})

app.listen(PORT, () => {
  console.log('Server has been started.')
})
