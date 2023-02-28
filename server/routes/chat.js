const express = require("express");
const router = express.Router();
const { getApi } = require("../controllers/chat");

router.get("/", getApi);

module.exports = router;
