const User = require("../../schemas/users")

exports.employeeLogin = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.status(500).json({ message: "wrong email" })
    }
    const savedPassword = user.password
    if (savedPassword !== password) {
      res.status(401).json({ message: "wrong password" })
    } else {
      return res.status(200).json({ message: "logged in!", user })
    }
  } catch (err) {
    return res.status(400).json({ err })
  }
}
