const User = require("../../schemas/users");
exports.employeeLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(500).json({ message: "wrong email!" });
    }
    const savedPassword = user.password;
    if (savedPassword !== password) {
      return res.status(400).json({ message: "wrong password!" });
    } else {
      return res.status(200).json({ message: "Login successfully!", user });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
