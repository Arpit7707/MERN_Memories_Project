import axios from "axios"; //using axios for making api calls

//url pointing to our backend route
const url = "http://localhost:5000/posts";

//making api call for fetching data
//function to 'get' call to our url
//url returns all posts that are currently have in database
export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);

//all actions towards the backend are going to done using redux
