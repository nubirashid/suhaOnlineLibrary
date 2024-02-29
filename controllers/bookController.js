import books from '../data/books.js'
import { paginate } from '../utils/paginate.js'

const getBooks = (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const booksData = paginate(books, page, limit)
    res.json(booksData)
  } catch (error) {
    next(error)
  }
}

const addNewBook = (req, res, next) => {
  try {
    const book = {
      bookID: books.length + 1,
      BookTitle: req.body.BookTitle,
      auther: req.body.auther,
      publisher: req.body.publisher,
      ISBN: req.body.ISBN,
      price: req.body.price
    }
    books.push(book)
    res.send(book)
  } catch (error) {
    next(error)
  }
}

const updateBook = (req, res, next) => {
  try {
    const book = books.find((b) => b.bookID === parseInt(req.params.id))
    if (!book) {
      return res.status(404).send('book with given bookID is not found')
    } else {
      book.BookTitle = req.body.BookTitle || book.BookTitle
      book.auther = req.body.auther || book.auther
      book.publisher = req.body.publisher || book.publisher
      book.ISBN = req.body.ISBN || book.ISBN
      book.price = req.body.price || book.price

      res.send(book)
    }
  } catch (error) {
    next(error)
  }
}

const deleteBook = (req, res, next) => {
  try {
    const book = books.find((b) => b.bookID === parseInt(req.params.id))
    if (!book) {
      return res.status(404).send('book with given bookID is not found')
    }
    const index = books.indexOf(book)
    books.splice(index, 1)
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
