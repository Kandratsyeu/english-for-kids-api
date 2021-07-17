import express from 'express'
import { json } from 'body-parser'
import categoriesRouter from './router'

const PORT = process.env.PORT || 80

const app = express()
app.use(json())

app.use('/', categoriesRouter)

app.listen(PORT, () => console.log('Server has been started...'))
