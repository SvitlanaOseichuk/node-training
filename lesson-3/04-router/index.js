import express from "express";

import routes from "./routes/index.js"

const app = express();

app.use(routes)

app.listen(8080, () => {
    console.log("server is runing, so u have too");
});