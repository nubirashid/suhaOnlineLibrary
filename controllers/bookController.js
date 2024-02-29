import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { paginate, loadJSON } from '../utils/common.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storedData = loadJSON('../data/books.json')

const getBooks = (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const booksList = paginate(storedData?.books, page, limit)
    res.json(booksList)
  } catch (error) {
    next(error)
  }
}

const addNewBook = (req, res, next) => {
  try {
    const book = {
      bookID: storedData?.books?.length + 1,
      BookTitle: req.body.BookTitle,
      author: req.body.author,
      publisher: req.body.publisher,
      ISBN: req.body.ISBN,
      price: req.body.price
    }
    storedData?.books?.push(book)
    writeFileSync(
      path.join(__dirname, '..', 'data', 'books.json'),
      JSON.stringify(storedData, null, 2),
      'utf8'
    )
    res.send(book)
  } catch (error) {
    next(error)
  }
}

const updateBook = (req, res, next) => {
  try {
    const book = storedData?.books?.find(
      (b) => b.bookID === parseInt(req.params.id)
    )
    if (!book) {
      return res.status(404).send('book with given bookID is not found')
    } else {
      book.BookTitle = req.body.BookTitle || book.BookTitle
      book.author = req.body.author || book.author
      book.publisher = req.body.publisher || book.publisher
      book.ISBN = req.body.ISBN || book.ISBN
      book.price = req.body.price || book.price

      writeFileSync(
        path.join(__dirname, '..', 'data', 'books.json'),
        JSON.stringify(storedData, null, 2),
        'utf8'
      )

      res.send(book)
    }
  } catch (error) {
    next(error)
  }
}

const deleteBook = (req, res, next) => {
  try {
    const book = storedData?.books?.find(
      (b) => b.bookID === parseInt(req.params.id)
    )
    if (!book) {
      return res.status(404).send('book with given bookID is not found')
    }
    const index = storedData?.books?.indexOf(book)
    storedData?.books?.splice(index, 1)

    writeFileSync(
      path.join(__dirname, '..', 'data', 'books.json'),
      JSON.stringify(storedData, null, 2),
      'utf8'
    )

    res.send(book)
  } catch (error) {
    next(error)
  }
}

const errorRoute = (req, res, next) => {
  try {
    throw new Error('DB Down. Please try again later')
  } catch (error) {
    next(error)
  }
}

export { getBooks, addNewBook, updateBook, deleteBook, errorRoute }
