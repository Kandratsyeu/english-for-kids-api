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

client.connect()

app.get('/', (req, res) => {
  client.query(
    'SELECT table_schema,table_name FROM information_schema.tables;',
    (err, res) => {
      if (err) throw err
      for (let row of res.rows) {
        console.log(JSON.stringify(row))
      }
      client.end()
    }
  )
})

app.listen(PORT, () => {
  console.log('Server has been started.')
})
