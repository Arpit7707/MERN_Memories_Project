import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();
  //using useDispatch() to dispatch get post requests
  const dispatch = useDispatch();

  //adding currentId in dependency array coz when we clear the form it resets data that means resetting the currentId
  //if we add currentId here we don't have to refresh our page to see updted data of post
  useEffect(() => {
    //dispatching action in useEffect hook
    //creating action by calling getPosts()
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* Typography in material-ui stands for textual elemnt */}
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        {/* Grow provides some simple animation */}
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {/* xs={12} denotes that it's gonna take full width on extra small devices */}
              {/* sm={7} means it's gonna take 7 out of 12 spaces on small and larger devises */}
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

//1. set route and controller function for that route(controller/posts.js) in backend
//2. in api/index.js make api call
//3. create action creator for that in action/posts.js
//4. handle action in reducer/posts.js
//5. update frontend and implement functionality
