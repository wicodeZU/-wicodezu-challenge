const mongoose = require("mongoose");

const gifsSchema = mongoose.Schema({
  gifs: {
    type: String,
    required: true,
  },
});
const Gif = mongoose.model("Gif", gifsSchema);

module.exports = Gif;
