import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  //using useDispatch() to dispatch get post requests
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatching action in useEffect hook
    //creating action by calling getPosts()
    dispatch(getPosts());
  }, [dispatch]);

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
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {/* xs={12} denotes that it's gonna take full width on extra small devices */}
              {/* sm={7} means it's gonna take 7 out of 12 spaces on small and larger devises */}
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
