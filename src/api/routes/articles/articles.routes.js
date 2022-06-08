const express = require("express");
const {
  createArticle,
  getArticles,
  getArticleById,

} = require("../../../controllers/articles/articles.controller");

const router = express.Router();

router.route("/create/:userID").post(createArticle);
router.route("/").get(getArticles);
router.route("/:userID").get(getArticleById);

module.exports = router;

