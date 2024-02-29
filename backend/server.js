require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const port = process.env.PORT || 4000;

const userRouter = require("./routers/userRouter");
const app = express();

// connect to MongoDB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running!"));

// routes
app.use("/api/user", userRouter);


app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);