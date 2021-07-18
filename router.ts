import { Router } from 'express'
import {
  getCategories,
  createCategory,
  removeCategory,
  updateCategory,
} from './db'

const categoriesRouter = Router()

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
  res.send(200)
})

categoriesRouter.post('/:id', (req, res) => {
  const id = Number(req.params.id)
  updateCategory({
    id: id,
    name: req.body.name,
    image: req.body.image,
  })
})

export default categoriesRouter
