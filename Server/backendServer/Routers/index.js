const express = require("express");
const { signUp, signIn } = require("../Controller");
const { checkData } = require("../MiddleWare");

const router = express.Router();

router.post("/register", checkData, signUp);

router.post("/login", signIn);

module.exports = router;
