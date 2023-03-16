import * as api from "../api";

//redux-thunk allows us to in here specify an additional arrow function

//using this redux-thunk syntax coz we're dealing with asynchronous logic

//Action Creators are function that returns an action eg. getPosts()
//function returning a function  [redux-thunk syntax]
//getPosts function calling another async function
export const getPosts = () => async (dispatch) => {
  try {
    //going to try fetch data from api
    //response of api.fetchPosts() contains data object and destructuring data from that response
    //coz we're gonna use only that data object that represents the posts
    const { data } = await api.fetchPosts();

    //dispatching action as an object
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error(error);
  }

  //action is object that have type and payload
  //payload is the data where we store our posts(desired response of api call)
  //const action = { type: "FETCH_ALL", payload: {} };

  //according to redux-thunk syntax, istead of returning the action (return action)
  //you have to dispatch the action (dispatch(action))

  //return action
  // dispatch(action);
};

//creating action for creation of new post (post request)
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.error(error);
  }
};

//in this file successfully using redux to pass and dispatch an action from the data from our backend
