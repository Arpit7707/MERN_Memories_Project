import axios from "axios"; //using axios for making api calls

//url pointing to our backend route
const url = "https://mern-memories-project-api.vercel.app/";

//making api call for fetching data
//function to 'get' call to our url
//url returns all posts that are currently have in database
export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
//updatedPost is data to be updated
export const updatePost = (id, updatedPost) =>
  axios.post(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
//all actions towards the backend are going to done using redux
