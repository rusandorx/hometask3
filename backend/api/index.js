const router = require('express').Router();
const { books, reviews } = require('./mock');

router.get('/books', (req, res) => {
  const { bookId, bookKind } = req.query;

  if (!bookId && !bookKind) {
    return res.status(200).json(books);
  }
  if (bookId) {
    return res.status(200).json(books.find(({ id }) => id === bookId));
  }
  return res.status(200).json(books.filter(({ kind }) => kind === bookKind));
});

router.get('/reviews', (req, res) => {
  const { reviewId, bookId } = req.query;
  if (!reviewId && !bookId) {
    return res.status(200).json(reviews);
  }
  if (bookId) {
    return res.status(200).json(reviews[bookId]);
  }
  return res.status(200)
    .json(Object.values(reviews).flat().find(({ id }) => id === reviewId));
});

module.exports = router;
