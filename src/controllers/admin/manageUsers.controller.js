const User = require("../../schemas/users")

exports.createNewUser = async (req, res) => {
  const { username, email, image, password } = req.body
  try {
    if (!username || !email || !image || !password) {
      return res.status(400).json({ message: "all fields are required" })
    }
    const savedUser = await User.findOne({ email: email })
    //console.log(savedUser)
    if (savedUser) {
      return res.status(400).json({ message: "user already exists" })
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
      await newUser.save()
      res.status(200).json(newUser)
    }
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
}
exports.getUsers = async (_req, res) => {
  try {
    const users = await User.find()
    if (!users) {
      res.status(400).json({ message: "no users found" })
    }
    res.status(200).json({ users })
  } catch (err) {
    res.status(400).end()
  }
}
