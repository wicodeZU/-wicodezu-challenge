const express = require("express");
const { createGif } = require("../../../controllers/gif/gifs.controller");

const router = express.Router();

router.route("/create").post(createGif);

module.exports = router;
