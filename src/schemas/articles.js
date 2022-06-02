const mongoose = require("mongoose");
const articleSchema = mongoose.Schema(
  {
    createdBy: {
      type: "User",
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
