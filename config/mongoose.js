// Require the library
const mongoose = require("mongoose");

// MongoDB URI (replace with your actual MongoDB URI)
const mongodbUrl = "mongodb://127.0.0.1:27017/issue_tracker_latest";

// Connect to the database
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Acquire the connection (to check if it's successful)
const db = mongoose.connection;

// Error
db.on("error", function (err) {
  console.log(err.message);
});

// Up and running, then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
