const mongoose = require("mongoose");

const gifsSchema = mongoose.Schema({
  gifs: {
    type: String,
    required: true,
  },
});
const Gif = mongoose.model("Gifs", gifsSchema);

module.exports = Gif;
