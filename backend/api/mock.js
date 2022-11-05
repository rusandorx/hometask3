const { books, newReviews: reviews } = require('./data');

const kinds = [
  {
    id: '2d8bbbab-9361-49f4-b0b7-600ac5be5742',
    name: 'Художественная литература',
    books: [
      'f051d07c-3cdc-4a72-a5ef-92d81f8c3718',
      '19f2b879-dcb7-495b-807b-4ace00c59142',
      'fa12ad32-9381-4294-be4f-ce0a7aa435bd',
      '0dbdb172-36da-4609-ba04-7a7c6895f19e',
      '445c9c6f-ff33-429b-bddc-d84db2d053dc',
      '977cbfa8-5ab2-499d-a8cc-91ed53438443',
    ],
  },
  {
    id: 'aa3a9d32-1453-4d61-848a-6c436652f7a2',
    name: 'Нехудожественная литература',
    books: [
      '4dc3cc24-f67a-4355-9a25-4a5d52d5fc9a',
      '4861ff7c-e9e1-4120-91da-6d55dfb077f5',
      '97aa7ca4-0d43-4e00-8938-564e826c1aad',
      'b4a38151-f089-4cb5-b7f3-e52bd3f3861b',
    ],
  },
  {
    id: '262510c0-b902-472c-bba3-e26b4be26be7',
    name: 'Книги для детей',
    books: [
      '7b12f678-6992-4775-9552-d9798d8d65ea',
      '1eacaca3-2b98-4848-b599-424b048e045e',
    ],
  },
  {
    id: '0b06898b-b72d-4b33-b784-1f639aa218e2',
    name: 'Переодические издания',
    books: [
      'c18d5ed0-a688-4e78-9c9a-2c06359b3b6a',
      'bfdb0ef6-d6d2-4552-85e0-9e89fce8abde',
      '3308a3fa-9d39-468b-a1b8-3fea6ac383c7',
      '524c2ca1-ce0f-4074-a0d5-2498874a85db',
      '65a1e525-d78f-4227-898d-9856289f44f4',
    ],
  },
  {
    id: 'fd29a7a1-e895-4645-998c-b5365063db8c',
    name: 'Религия',
    books: [
      '5a245eab-978d-4292-9f91-c9baf5f3816e',
      '228ab8de-ecce-43c9-b84e-8f3841ff7baa',
      '1cf0e7b3-be1e-4178-b8b1-7737f3e0d10f',
      '6cd4a37c-4973-4986-8785-2fb2cdc7d965',
    ],
  },
  {
    id: '5402730b-b28e-4a70-a2b3-5f8fd2cb284f',
    name: 'Учебная литература',
    books: [
      'cca224b3-030c-4f80-9e51-8a72daaf7f0e',
      '617b59a2-6c97-44a1-a72c-52a111023f47',
    ],
  },
  {
    id: '9e491b3c-96a3-4009-94c4-c3801ec4bd3b',
    name: 'Комиксы',
    books: ['4157838b-b7f3-423c-9ecc-9487383adb48'],
  },
];

const booksById = {};

books.forEach(book => { booksById[book.id] = book; });

const reviewsById = {};
reviews.forEach(review => { reviewsById[review.id] = review; });

module.exports = { kinds, books, booksById, reviews, reviewsById };
