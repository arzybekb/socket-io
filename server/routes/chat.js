const express = require("express");
const router = express.Router();
const { getApi } = require("../controllers/chat");

router.get("/api", getApi);

module.exports = router;
