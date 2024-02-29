import books from '../data/books.js';

const getBooks = (req,res) => {
    res.json(books);
};


const addNewBook = (req,res) => {
 const book = {
    bookID :  books.length + 1,
    BookTitle : req.body.BookTitle,
    auther : req.body.auther,
    publisher : req.body.publisher,
    ISBN : req.body.ISBN,
    price : req.body.price
 };
 books.push(book);
 res.send(book);
};

const updateBook = (req,res) => {
    const book = books.find(b => b.bookID === parseInt(req.params.id));
    if(!book){
       return res.status(404).send('book with given bookID is not found');
    } 
 else{
 
    book.BookTitle = req.body.BookTitle || book.BookTitle ;
    book.auther = req.body.auther || book.auther;
    book.publisher = req.body.publisher || book.publisher;
    book.ISBN = req.body.ISBN ||  book.ISBN;
    book.price = req.body.price ||  book.price;

 res.send(book);
 }  
};


const deleteBook = (req,res) => {
   const book = books.find(b => b.bookID === parseInt(req.params.id));
    if(!book){
       return res.status(404).send('book with given bookID is not found');
    } 
    const index = books.indexOf(book);
    books.splice(index,1);
    res.send(book);
}

export {getBooks, addNewBook, updateBook , deleteBook};