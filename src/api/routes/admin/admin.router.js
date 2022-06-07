const express = require("express");
const {
  CreateNewUser,
  getUsers,
} = require("../../../controllers/admin/manageUsers.controller");

const router = express.Router();

router.route("/create").post(CreateNewUser);
router.route("/").get(getUsers);

module.exports = router;
