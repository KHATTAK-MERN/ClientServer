const express = require("express");
const { signUp, signIn } = require("../Controller");
const { checkData } = require("../MiddleWare");

const router = express.Router();

router.post("/register", signUp);

router.post("/signin", signIn);

module.exports = router;
