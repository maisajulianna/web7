require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routers/userRouter");
const postRoutes = require("./routers/postRouter");


// express app
const app = express();

// MongoDB connection
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("API Running!"));
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);


module.exports = app;


