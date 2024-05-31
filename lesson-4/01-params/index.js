import express from "express";

const app = express();


// app.get("/books/1", (req, res) => {
//     res.send("Book 1")
// })


// app.get("/books/2", (req, res) => {
//     res.send("Book 2")
// })


// app.get("/books/3", (req, res) => {
//     res.send("Book 3")
// })


app.get("/books/:bookId", (req, res) => { //додаємо : щоб показати що після них ми можемо вставити те що міняється
    const {bookId} = req.params;//  req.params - обєк, для  зчитування параметру
    res.send(`Book ${bookId}`)
})




app.listen(8080, () => {
    console.log("server is runing");
})
