const Article = require("../../schemas/articles");
const User = require("../../schemas/users");

exports.createArticle = async (req, res) => {
  const { heading, content, image } = req.body;
  const id = req.params.id;
  try {
    if (!heading || !content) {
      return res.status(400).json({ message: "all fields ere required" });
    }
    const createdBY = await User.findOne({ _id: id }).exec();
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
