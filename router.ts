import { Router } from 'express'
import {
  getCategories,
  createCategory,
  removeCategory,
  updateCategory,
  createWord,
  getWords,
} from './db'

const categoriesRouter = Router()
const wordsRouter = Router()

categoriesRouter.get('/', (req, res) => {
  const categories = getCategories()
  res.json(categories)
})

categoriesRouter.post('/', (req, res) => {
  const props = req.body
  createCategory(props.name, props.image)
  res.json(props)
})

categoriesRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  removeCategory(id)
})

categoriesRouter.post('/:id', (req, res) => {
  const id = Number(req.params.id)
  updateCategory({
    id: id,
    name: req.body.name,
    image: req.body.image,
  })
})

wordsRouter.get('/', (req, res) => {
  const categories = getWords()
  res.json(categories)
})

wordsRouter.post('/', (req, res) => {
  const props = JSON.parse(req.body.value)
  createWord(props)
  res.json(props)
})

export default { categoriesRouter, wordsRouter }
