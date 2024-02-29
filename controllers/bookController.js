import books from '../data/books.js';

const getBooks = (req,res) => {
    res.json(books);
}

export {getBooks};