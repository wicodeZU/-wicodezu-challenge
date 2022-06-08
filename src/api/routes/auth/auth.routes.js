const express = require("express")
const { employeeLogin } = require("../../../controllers/auth/auth.employee")
const router = express.Router()

router.route("/login").post(employeeLogin)

module.exports = router

