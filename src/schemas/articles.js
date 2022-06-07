const mongoose = require("mongoose");
const User = require("./users");
const articleSchema = mongoose.Schema(
  {
    createdBY: {
      type: ["User"],
      required: true,
    },

    heading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
