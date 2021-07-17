import express from 'express'
import bodyParser from 'body-parser'
import categoriesRouter from './router'

const PORT = process.env.PORT || 80

const app = express()
app.use(bodyParser.json())

app.use('/', categoriesRouter)

app.listen(PORT, () => console.log('Server has been started...'))
