import mongoose from "mongoose";

//defining and creating mongoose schema
//each posts is have to have these things
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  //we're gonna convert image into string
  //using base64 encoding
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdApp: {
    type: Date,
    default: new Date(),
  },
});

//turning schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

//exporting mongoose model
//we will gonna able to run command on this model
//such as find, create, delete, update
export default PostMessage;
