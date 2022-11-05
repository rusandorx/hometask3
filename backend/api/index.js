const router = require('express').Router();
const { books, reviews, kinds } = require('./mock');

router.get('/kinds', (req, res) => {
  return res.status(200).json(kinds);
});

router.get('/books', (req, res) => {
  const { bookId, kindId } = req.query;

  if (!bookId && !kindId) {
    return res.status(200).json(books);
  }
  if (bookId) {
    return res.status(200).json(books.find(({ id }) => id === bookId));
  }
  const kindBooks = kinds.find(({ id }) => id === kindId).books;
  return res.status(200).json(books.filter(({ id }) => kindBooks.includes(id)));
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
