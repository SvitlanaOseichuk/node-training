import express from "express";
import * as fs from "node:fs/promises";
import path from "node:path";

const app = express();

function checkAuth(req, res, next) {
    const {apiKey} = req.query;

    if (apiKey !== "12345") {
        return res.status(401).send("please provide a valid API key");
    }

    next();
}

// app.use(checkAuth) // (глобальна) спрацьовує на сві запити незалежно які вони
//(локальна) але якщо потрібно лише для одного посилання ("/movies") то ми вставляємо посеред "/movies",___ , async(req, res)

app.get("/movies", checkAuth, async(req, res) => {
    const data = await fs.readFile(path.resolve("movies.txt"), {encoding: "utf-8"});

    res.send(data);
})

app.get("/books", (req, res) => {
    res.send("Book")
})

app.listen(8080, () => {
    console.log("server is runing, so u have too");
});