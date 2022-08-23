const express = require("express");

const checkData = (req, res, next) => {
  if (!req.body.user_name) return res.status(400).send("User name required");
  if (!req.body.email) return res.send("email required");

  if (!req.body.password) return res.send("password required");
  next();
};

module.exports = { checkData };
