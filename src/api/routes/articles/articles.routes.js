const express = require("express")
const {
  createArticle,
  getArticles,
  editArticles,
  deleteArticles,
} = require("../../../controllers/articles/articles.controller")

const router = express.Router()
router.route("/update/:id").patch(editArticles)
router.route("/delete/:id").delete(deleteArticles)
router.route("/create/:userID").post(createArticle)
router.route("/").get(getArticles)

module.exports = router
