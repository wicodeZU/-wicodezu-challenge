const mongoose = require("mongoose")

const gifsSchema = mongoose.Schema({
  gif: {
    type: String,
    required: true,
  },
})
const Gif = mongoose.model("Gif", gifsSchema)
module.exports = Gif
