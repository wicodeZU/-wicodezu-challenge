const Article = require("../../schemas/articles");
const User = require("../../schemas/users");

exports.createArticle = async (req, res) => {
  const { heading, content, image } = req.body;
  const { userId } = req.params;
  try {
    if (!heading || !content) {
      return res.status(400).json({ message: "all fields ere required" });
    }
    const createdBY = await User.findOne({ userId }).exec();
    if (!createdBY) {
      return res.status(400).json({ message: "user not found" });
    }
    const newArticle = await Article.create({
      createdBY,
      heading,
      content,
      image,
    });
    if (!newArticle) {
      return res.status(400).json({ message: "article not created" });
    }
    await newArticle.save();
    res.status(200).json(newArticle);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).exec();
    if (!articles) {
      return res.status(404).json({ message: "no articles found!!!" });
    } else {
      return res.status(200).json({ articles });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.getArticleById = async (req, res) => {
  const id = req.params.id;
  try {
    const article = await Article.findOne({ id }).exec();
    if (!article) {
      return res.status(400).json({ message: "no article found!!" });
    } else {
      return res.status(200).json({ article });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};
/* employees to edit articles and update */
exports.editArticles = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findOneAndUpdate({ id }, req.body, {
      new: true,
    });
    if (!article) {
      return res.status(401).json({ message: "could get the articles!" });
    }
    await article.save();
    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).json(error);
  }
};
/** employees to delete articles */

exports.deleteArticles = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findOneAndRemove({ _id: id }).exec();
    if (!article) {
      res.status(400).json({ message: "no articles found!!" });
    }
    res.status(200).json({ message: "article deleted!!!" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
