const mongoose = require("mongoose");

const gifsSchema = mongoose.Schema({
  gifs: {
    type: String,
  },
});
const Gif = mongoose.model("Gifs", gifsSchema);

module.exports = Gif;
