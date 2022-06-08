const Article = require("../../schemas/articles");
const User = require("../../schemas/users");

exports.createArticle = async (req, res) => {

  const { heading, content, image } = req.body
  const { userID } = req.params
  try {
    if (!heading || !content) {
      return res.status(400).json({ message: "all fields ere required" });
    }

    const createdBY = await User.findOne({ userID }).exec()
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
    console.log(error);
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
    console.log(error);
  }
};

}

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).exec()
    if (!articles) {
      res.status(400).json({ message: "no articles found" })
    }
    return res.status(200).json({ articles })
  } catch (error) {
//     console.log(error)
    return res.status(500).json({ error })
  }
}

