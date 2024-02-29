import express from 'express'
import {
  getBooks,
  addNewBook,
  updateBook,
  deleteBook,
  errorRoute
} from '../controllers/bookController.js'

const router = express.Router()

router.route('/').post(addNewBook).get(getBooks)
router.route('/:id').delete(deleteBook).put(updateBook)

router.route('/error').get(errorRoute)

export default router
