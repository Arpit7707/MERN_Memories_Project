import React from "react";

import { Grid, CircularProgress } from "@material-ui/core";

//we have to fetch data from that global redux store using useSelector hook
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();

  // as parameter of callback function in useSelector() hook, we get access to that whole global redux store (or state)
  //returning state.posts (.posts coz in reducers/index.js it's posts)
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
