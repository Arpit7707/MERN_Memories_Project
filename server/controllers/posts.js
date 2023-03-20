//creating handlers of all routes
//To increase readibility and reducing complexness in
//routes/psts.js we are creating this file for handlers
//of routes

import mongoose from "mongoose";
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
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //we have access to request's body (the data)
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

//when user will make request it'll be /posts/123
//123 is id and we can access by req.params
//: _id is for renaming
export const updatePost = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  const { id: _id } = req.params;
  //receiving the data for the updates
  const post = req.body;

  //going to do check if _id is really a mongoose object id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post With that ID");

  //if _id is valid then updating it
  //2nd parameter is data we want to update in post
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  const { id } = req.params;

  //going to do check if _id is really a mongoose object id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post With that ID");

  await PostMessage.findByIdAndRemove(id);

  console.log("DELETE");

  res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  const { id } = req.params;

  //going to do check if _id is really a mongoose object id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Post With that ID");

  const post = await PostMessage.findById(id);
  //2nd parameter is data we want to update in post
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
};
