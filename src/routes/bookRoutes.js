const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

// GET /api/v1/books
router.get('/', getAllBooks);

// GET /api/v1/books/:id
router.get('/:id', getBookById);

// POST /api/v1/books
router.post('/', createBook);

// PUT /api/v1/books/:id
router.put('/:id', updateBook);

// DELETE /api/v1/books/:id
router.delete('/:id', deleteBook);

module.exports = router;