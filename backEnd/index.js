import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import profileRouter from "./routes/profile.js";
import postRouter from "./routes/post.js";
import likeRouter from "./routes/like.js";
import commentRouter from "./routes/comment.js";
dotenv.config();

const app = express();

app.use(express.json())
app

app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/like", likeRouter);
app.use("/api/v1/comment", commentRouter);

app.get("/", (req, res) => {
  console.log("Hello World");
  res.json({
    "message":"Hello World"
  })
});

const start = async () => {
  const port = process.env.PORT || 2000;
  try {
    await connectDB(process.env.MONGO_URI).then(() =>
      console.log("Connected to MongoDB!!!")
    );
    app.listen(port, () => {
      console.log(`Listening at port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
