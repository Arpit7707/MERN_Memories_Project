//a reducer is a function that accepts the state variable and also accepts the action
//then based on action type we perform some logic(handling actions)

//in reducers the state always needs to be equal to something, it can't be equal to nothing,
//so we set some initial value

//state is gonna be posts coz its posts reducer

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return state;
//     case "CREATE":
//       return state;
//     default:
//       break;
//   }
// };

//these reducers store response from backend in that global store
//and using useSelector we can access and fetch that data and update our frontend
//using useDispatch() we can get access to redux's dispatch function which triggers(dispatches)
//action declared in action/posts.js
//and reducers/posts.js stores response from backend in that global store

import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      //returning all posts except the one we want to delete
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      //action.payload are actually our posts
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
