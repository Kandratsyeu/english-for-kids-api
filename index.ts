import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router'

const PORT = process.env.PORT || 80

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/', router.categoriesRouter)
app.use(cors())
app.use('/words', router.wordsRouter)

app.listen(PORT, () => console.log('Server has been started...'))
