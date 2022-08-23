const express = require("express");
const userModel = require("../Model");

const signUp = async (req, res) => {
  const newUser = await userModel.create({
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
  });
  //   const newUserSignUp = await newUser.save();
  console.log(newUser);
  return res.status(201).json("sucess");
};

const signIn = async (req, res) => {
  const user = await userModel.findOne({
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
  });
  if (user.password === req.body.password) res.status(201).json("Signed In");
  else res.status(201).json("Password Incorrect");
};

module.exports = { signUp, signIn };
