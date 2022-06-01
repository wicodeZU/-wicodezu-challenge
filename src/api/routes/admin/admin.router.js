const express = require("express")
const {
  createNewUser,
  getUsers,
} = require("../../../controllers/admin/manageUsers.controller")
const router = express.Router()

router.route("/create").post(createNewUser)
router.route("/").get(getUsers)

module.exports = router
