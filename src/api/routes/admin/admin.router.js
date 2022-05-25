const express = require("express")
const {
  createNewUser,
} = require("../../../controllers/admin/manageUsers.controller")
const router = express.Router()

router.route("/create").post(createNewUser)

module.exports = router
