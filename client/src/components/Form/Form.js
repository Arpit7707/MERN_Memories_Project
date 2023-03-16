import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const classes = useStyles();

  //first in api/index.js create createPosts() and make api call
  //then in action/index.js create createPost()
  //then write "const dispatch = useDispatch()" in here

  //How it works:
  //- dispatching the action from this file : from handleSubmit()
  //by handleSubmit() , createPost() from actions/index.js is called
  //by createPosts() from actions/index.js  , createPosts() from api/index.js is called that actually makes post request
  //then go to posts reducer

  //allows us to actually dispatch action
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //to not to get refresh in browser
    e.preventDefault();
    //dispatching action and passing whole postData object
    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    //paper is div with white background
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        {/* <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography> */}
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            //we want to update only one property of state object
            //{ ...postData, creator: e.target.value } is that syntax
            //...postData - spreading the postData
            //now creator: e.target.value will change only one field
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          minRows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            //we want to update only one property of state object
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              //base64 endcoding of image
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
