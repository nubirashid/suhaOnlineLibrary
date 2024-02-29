import express from 'express';
import { getBooks , addNewBook , updateBook , deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.route('/').post(addNewBook).get(getBooks);
router.route('/:id').delete(deleteBook).put(updateBook);

export default router;