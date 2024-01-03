import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import profileRouter from "./routes/profile.js";
dotenv.config();

const app = express();

app.use(express.json())
app

app.use("/profile", profileRouter);

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
