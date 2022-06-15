/**gifs crud operation */

const Gif = require("../../schemas/gif");

exports.createGif = async (req, res) => {
  const { gif } = req.body;
  try {
    const doc = await Gif.create({
      gif,
    });
    if (!doc) {
      return res.status(401).json({ message: "an error occured!" });
    }
    await doc.save();
    return res.status(200).json({ data: doc });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
