//на основі поперднього 03-body файлу
import express from "express";
import crypto from "node:crypto";
import bookSchema from "./schema/book.js"

const app = express();




const jsonParser = express.json();



app.post("/books", jsonParser, (req, res) => {

    // const {title, author, year} = req.body;

    const book = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }

    const { error, value } = bookSchema.validate(book, { abortEarly: false });


    if (typeof error !== "undefined") {
        return res
          .status(400)
          .send(error.details.map((error) => error.message).join(", "));
      }
    
    res.status(201).send({
        id: crypto.randomUUID(),
        title: value.title,
        author: value.author, 
        year: value.year,
    })
})



app.listen(8080, () => {
    console.log("server is runing")
})