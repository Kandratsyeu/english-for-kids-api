import { Router } from 'express'
import { getCategories, createCategory } from './db'

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

export default { categoriesRouter }