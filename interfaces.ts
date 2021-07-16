export interface CategoryI {
  id: number
  name: string
  image: string
}

export interface WordI {
  category: number
  word: string
  translate: string
  image: string
  audio: string
}

export interface DataBaseI {
  categories: CategoryI[]
  words: WordI[]
}
