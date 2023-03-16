//creating handlers of all routes
//To increase readibility and reducing complexness in
//routes/psts.js we are creating this file for handlers
//of routes

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    //allowing "http://localhost:3000" (frontend) to access (according to cors policy)
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    //retrieving all posts we have currently in database
    const postMessages = await PostMessage.find();
    //setting status to 200(OK) and returning array of
    //all messages
    res.status(200).json(postMessages);
  } catch (error) {
    //404 = not found
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );

  //we have access to request's body
  const post = req.body;
  //creating a new post Message
  const newPost = new PostMessage(post);

  try {
    //saving new post in databse
    await newPost.save();
    //status = 201 for successfull creation
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
