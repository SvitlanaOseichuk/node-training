import express from "express";

import bookRoutes from "./books.js";
import movieRoutes from "./movies.js";
import userRouter from "./users.js";
import wishListRouter from "./wishList.js";


const router = express.Router();

router.use("/users", userRouter);
router.use("/movies", movieRoutes);
router.use("/books", bookRoutes);
router.use("/wishList", wishListRouter);


export default router