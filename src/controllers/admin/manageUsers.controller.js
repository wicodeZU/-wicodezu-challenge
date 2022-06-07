const User = require("../../schemas/users");
exports.CreateNewUser = async (req, res) => {
  const { username, email, image, password } = req.body;
  try {
    if (!username || !email || !image || !password) {
      res.status(400).json({ message: "all fields are required!!" });
    }
    const savedUser = await User.findOne({ email: email });
    if (savedUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    const newUser = await User.create({
      username,
      email,
      password,
      image,
    });

    if (!newUser)
      return res.status(400).json({ message: "user is not created!!" });
    else {
      await newUser.save();
      return res.status(200).json(newUser);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}).exec();
    if (!users) {
      return res.status(400).json({ message: "users not found!!" });
    } else {
      return res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
