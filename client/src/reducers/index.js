import { combineReducers } from "redux";
import posts from "./posts";

//a reducer is a function that accepts the state variable and also accepts the action
//then based on action type we perform some logic(handling actions) (in reducers/posts.js)

//combining all reducers
//importing all reducers from posts and combining all as combineReducers and using it in index.js file from src

export default combineReducers({
  //as key value pair both have same name (posts:posts), we will write it as posts only
  posts,
});
