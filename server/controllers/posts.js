//creating handlers of all routes
//To increase readibility and reducing complexness in
//routes/psts.js we are creating this file for handlers
//of routes

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
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
