const router = require('express').Router();
const { books, reviews, kinds, booksById, reviewsById } = require('./mock');

router.get('/kinds', (req, res) => {
  res.status(200).json(kinds);
});

router.get('/books', (req, res) => {
  const { bookId, kindId } = req.query;

  if (!bookId && !kindId) {
    return res.status(200).json(books);
  }
  if (bookId) {
    return res.status(200).json(booksById[bookId]);
  }

  // Имитация длительной загрузки, чтобы можно было посмотреть на спиннер.
  setTimeout(() => {
    const kindBooks = kinds.find(({ id }) => id === kindId).books;
    const result = kindBooks.map(book => booksById[book]);
    res.status(200).json(result);
  }, 300);
});

router.get('/reviews', (req, res) => {
  const { reviewId, bookId } = req.query;
  if (!reviewId && !bookId) {
    return res.status(200).json(reviews);
  }
  if (bookId) {
    const reviews = booksById[bookId].reviews;
    const result = reviews.map(review => reviewsById[review]);
    return res.status(200).json(result);
  }
  res.status(200)
    .json(reviewsById[reviewId]);
});

module.exports = router;
