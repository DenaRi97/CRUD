import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
// const postRoute = require("./routes/post");
import postRoute from "./routes/post.js";
// const categoryRoute = require("./routes/category");
import categoryRoute from "./routes/category.js"
// const multer = require("multer");
import multer from "multer";
// const path = require("path");
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

dotenv.config();
app.use(express.json());

// Use fileURLToPath to convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
// Use path.dirname to get the directory name
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("4000", () => {
  console.log("Backend is running.");
});