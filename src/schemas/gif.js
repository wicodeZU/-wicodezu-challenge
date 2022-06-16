const mongoose = require("mongoose");

const gifsSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});
const Gif = mongoose.model("Gifs", gifsSchema);

module.exports = Gif;
