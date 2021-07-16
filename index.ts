import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import router from './router'

const app = express()
app.use(json())
app.use(cors())

app.use('/categories', router.categoriesRouter)

app.listen(3000, () => console.log('Server has been started...'))
