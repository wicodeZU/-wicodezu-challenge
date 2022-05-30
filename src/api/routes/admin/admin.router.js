const express = require("express");
const {
  CreateNewUser,
} = require("../../../controllers/admin/manageUsers.controller");

const router = express.Router();

router.route("/create").post(CreateNewUser);

module.exports = router;
