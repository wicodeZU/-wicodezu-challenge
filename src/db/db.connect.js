const mongoose = require("mongoose")
require("dotenv").config()

const db = process.env.DB

try {
  mongoose.connect(db)
  console.log("mongodb connected")
} catch (err) {
  console.log(err)
}
