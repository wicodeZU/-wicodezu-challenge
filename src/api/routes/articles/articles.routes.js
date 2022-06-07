const express = require("express");
const {
  createArticle,
  getArticles,
} = require("../../../controllers/articles/articles.controller");

const router = express.Router();

router.route("/create/:userID").post(createArticle);
router.route("/").get(getArticles);

module.exports = router;
