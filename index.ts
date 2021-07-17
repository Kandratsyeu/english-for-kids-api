import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import router from './router'

const PORT = Number(process.env.PORT) | 80

const app = express()
app.use(json())
app.use(cors())

app.use('/categories', router.categoriesRouter)

app.listen(PORT, () => console.log('Server has been started...'))
