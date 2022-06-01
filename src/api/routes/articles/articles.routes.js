const express = require("express")
const {
  createArticle,
} = require("../../../controllers/articles/articles.controller")

const router = express.Router()

router.route("/create/:userID").post(createArticle)

module.exports = router
