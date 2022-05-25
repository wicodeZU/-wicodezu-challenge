const User = require("../../schemas/users")

exports.createNewUser = async (req, res) => {
  const { username, email, image, password } = req.body
  try {
    if (!username || !email || !image || !password) {
      return res.status(400).json({ message: "all fields are required" })
    }
    const newUser = await User.create({
      username,
      email,
      password,
      image,
    })
    if (!newUser)
      return res.status(400).json({ message: "user is not created" })
    else {
      await newUser.findOne({ email: req.params.email })
      if (newUser) {
        return res
          .status(400)
          .json({ message: "user already exists" })
          .end()
      }
      await newUser.save()
      res.status(200).json(newUser)
    }
  } catch (err) {
    return res.status(400).json(err)
  }
}
