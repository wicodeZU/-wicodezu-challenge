const mongoose = require("mongoose")
const articlesSchema = mongoose.Schema(
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
      //required: true,
    },
  },
  { timestamps: true },
)
const Article = mongoose.model("Article", articlesSchema)
module.exports = Article
