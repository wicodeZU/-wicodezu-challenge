exports.CreateNewUser = async (req, res) => {
  const { username, email, image, password } = req.body;
  try {
    if (!username || !email || !image || !password) {
      res.status(400).json({ message: "all fields are required!!" });
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
      await newUser.findOne({ email: req.params.email });
      if (newUser) {
        return res.status(400).json({ message: "user already exists" });
      }
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
