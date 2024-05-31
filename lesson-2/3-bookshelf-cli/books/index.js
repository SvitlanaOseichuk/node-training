import * as fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto"


const filePath = path.resolve("books", "books.json");

async function readBooks() {
   const data = await fs.readFile(filePath, { encoding: "utf-8"});


   console.log(typeof data)
   return JSON.parse(data);
}
//отримуємо книжки з файлу джейсона


async function writeBooks(books) {
    await fs.writeFile(filePath, JSON.stringify(books, undefined, 2))
}
//записуються книжки



async function getBooks() {
    const books = await readBooks();

    return books;
}
//отримуємо всі книжки 


async function getBook(id) {
    const books = await readBooks();

    const book = books.find(book => book.id === id);

    if (typeof book === "undefined") {
        return null;
    }

    return book;
}
//отримуємо одну конкретну книгу за id


async function createBook(book) {
    const books = await readBooks();

    const newBook = { ...book, id: crypto.randomUUID() };

    books.push(newBook);

    await writeBooks(books);

    return newBook;
}
//щоб створити книгу додаючи їй id



async function updateBook(id, book) {
    const books = await readBooks();

    const index = books.findIndex((book) => book.id === id)

    if (index === -1) {
        return null
    }

    const updatedBook = {...book, id};

    // const newBooks = [
    //     ...books.slice(0, index),
    //     updatedBook,
    //     ...books.slice(index + 1),
    // ]

    // await writeBooks(newBooks);  1й варіант  хороший 

    books [index] = updatedBook;

    await writeBooks(books) //2й вар. недуже  але в даному випадку цей вар. добрий бо book має короткий час мутування 

    return updatedBook;
}




async function deleteBook(id) {
    const books = await readBooks();

    const index = books.findIndex((book) => book.id === id)

    if (index === -1) {
        return null
    }

    const removedBook = books[index]

    
    //імутабельний(кращий)
    // const newBooks = [ ...books.slice(0, index), ...books.slice(index+1)];

    // await writeBooks(newBooks);

    //мутабельний варіант
    books.splice(index, 1);

    await writeBooks(books);

    return removedBook;

}


export default {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};