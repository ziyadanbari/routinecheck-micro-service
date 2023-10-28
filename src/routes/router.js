const { Router } = require("express");
const { sendMessage } = require("../controllers/sendMessage.js");
const { protectedAPI } = require("../middlewares/protectedAPI.js");

const router = Router();

router.post("/message", [protectedAPI], sendMessage);

module.exports = router;
