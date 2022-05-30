const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const db = process.env.MONGO_URL;

try {
  mongoose.connect(db);
  console.log("Mongodb connected");
} catch (error) {
  console.log(error);
}
