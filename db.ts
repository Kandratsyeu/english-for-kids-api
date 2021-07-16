import { CategoryI, DataBaseI } from './interfaces'

const data: DataBaseI = {
  categories: [],
  words: [],
}

const newId = (() => {
  let id = 0
  return function (): number {
    return id++
  }
})()

export function getCategories() {
  return data.categories
}

export function createCategory(name: string, image: string) {
  const newCategory: CategoryI = {
    id: newId(),
    name: name,
    image: image,
  }
  data.categories.push(newCategory)
}

export default data
