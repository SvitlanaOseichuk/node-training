import Books from "./books/index.js"
import { program } from "commander";

async function invokeAction({action, title, id, author}) {
  switch(action) {
    case "getAll":
      const books = await Books.getBooks();
      return books;
    case "getById":
      const book = await Books.getBook(id);
      return book;
    case "create":
      const createBook = await Books.createBook({title, author});
      return createBook;
    case "update":
      const updateBook = await Books.updateBook(id, {title, author});
      return updateBook;
    case "remove":
      const removedBook = await Books.deleteBook(id);
      return removedBook;
    default:
      return "unknown action :(";
  }
}

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Book id")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author");


program.parse(process.argv);

invokeAction(program.opts()).then(console.log).catch(console.error);