import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

//importing routes
import postRoutes from "./routes/posts.js";

//initialize express instance as app
const app = express();

//using express middlewear to connect to our application
//every routes in postRoutes is gonna start with posts
//eg. localhost:5000/posts/
app.use("/posts", postRoutes);

//setting bodey-parser (body-parser enables us to send requests)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/posts", postRoutes);

//using express middlewear to connect to our application
//every routes in postRoutes is gonna start with posts
//eg. localhost:5000/posts/

const CONNECTION_URL =
  "mongodb+srv://Arpit_Jethava:Arpit_7707@cluster0.77llici.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

//connect to mongodb database
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((error) => console.error(error));
