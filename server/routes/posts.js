import express from "express";

//in react it's ok to write only name
//in node here you have to specify file name with
//extension eg. "posts.js"
import { getPosts, createPost } from "../controllers/posts.js";

//set up router
const router = express.Router();

//setting routes
//for every callback functions req and res parameters will be there
//here all callback functions are declared and written in
//""../controllers/posts" to increase readibility and
//reduce complexness of this file

router.get("/", getPosts);
router.post("/", createPost);

//exporting whole router
export default router;
