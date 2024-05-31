import express from "express";
import crypto from "node:crypto";

const app = express();



// app.use(express.json())// всі походи розпарсуємо 

const jsonParser = express.json();



app.post("/books", jsonParser, (req, res) => {

    const {title, author, year} = req.body;

    // req.body;
    // console.log(req.body);//ьуде андефайнд  тому треба розпарсити його

    res.status(201).send({id: crypto.randomUUID(), title, author, year})
})








app.listen(8080, () => {
    console.log("server is runing")
})