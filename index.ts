import express from 'express'
import { json } from 'body-parser'
import router from './router'

const PORT = process.env.PORT || 80

const app = express()
app.use(json())

app.use('/', router.categoriesRouter)

app.listen(PORT, () => console.log('Server has been started...'))
