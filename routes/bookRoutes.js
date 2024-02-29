import express from 'express'
import {
  getBooks,
  addNewBook,
  updateBook,
  deleteBook,
  errorRoute
} from '../controllers/bookController.js'
import authRequired from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(authRequired, addNewBook).get(getBooks)
router
  .route('/:id')
  .delete(authRequired, deleteBook)
  .put(authRequired, updateBook)

router.route('/error').get(errorRoute)

export default router
