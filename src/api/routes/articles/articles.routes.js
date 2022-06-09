const express = require("express");
const {
  createArticle,
  getArticles,
  getArticleById,
  editArticles,
  deleteArticles,
} = require("../../../controllers/articles/articles.controller");

const router = express.Router();

router.route("/create/:userID").post(createArticle);
router.route("/").get(getArticles);
router.route("/:userID").get(getArticleById);
router.route("/update/:id").patch(editArticles);
router.route("/delete/:id").delete(deleteArticles);

module.exports = router;
