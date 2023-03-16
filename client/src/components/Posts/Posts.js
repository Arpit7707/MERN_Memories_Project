import React from "react";

//we have to fetch data from that global redux store using useSelector hook
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  // as parameter of callback function in useSelector() hook, we get access to that whole global redux store (or state)
  //returning state.posts (.posts coz in reducers/index.js it's posts)
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
