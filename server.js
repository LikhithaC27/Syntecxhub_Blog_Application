const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 👇 THIS LINE MUST EXIST
app.use("/api/posts", require("./routes/postRoutes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(console.error);

app.listen(5000, () =>
  console.log("🚀 Server running at http://localhost:5000")
);
