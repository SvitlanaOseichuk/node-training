import express from "express";
import * as fs from "node:fs/promises";
import path from "node:path";

const app = express();


app.get("/movies", async (req, res, next) => {
    try{
        const data = await fs.readFile(path.resolve("movies.txt"), {
            encoding: "utf-8",
          });
      
          res.send(data);
    } catch(error) {
        // res.status(500).send("internal server error") //500 бо це буде помилка від сервера
        next(error)
    }
      
})



app.get("/books", async (req, res, next) => {
    try{
        const data = await fs.readFile(path.resolve("books.txt"), {
            encoding: "utf-8",
          });
      
          res.send(data);
    } catch(error) {
        next(error)
        // console.error(error)
        // res.status(500).send("internal server error") //500 бо це буде помилка від сервера
    }
      
})






app.get("/books/:bookId", (req, res) => { //додаємо : щоб показати що після них ми можемо вставити те що міняється
    const {bookId} = req.params;//  req.params - обєк, для  зчитування параметру
    res.send(`Book ${bookId}`)
})





//ця міделварка для того щоб впіймати 404 помилку
app.use((req, res, next) => {
    res.status(404).send("route is not found")
})



//для відлловлювання опмилки в кетч(500)
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Internal Server Error, please, try leter");
})





app.listen(8080, () => {
    console.log("servet is ruuning")
})