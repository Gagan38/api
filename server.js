require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Changed line
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api", require("./routes/shayari"));

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
