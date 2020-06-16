const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  // console.log(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const isUserExist = await User.findOne({ email: req.body.email });
  if (isUserExist) {
    return res.status(400).send("user exist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  };

  const user = new User(newUser);

  try {
    await user.save();
    res.status(200).send({ user: user._id });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const isUserExist = await User.findOne({ email: req.body.email });

  if (!isUserExist) {
    return res.status(400).send({ msg: "user does not exist" });
  }

  //password is correct
  const validPass = await bcrypt.compare(
    req.body.password,
    isUserExist.password
  );
  if (!validPass) {
    return res.status(400).send("email or password wrong");
  }

  // create token
  const token = jwt.sign({ _id: isUserExist._id }, process.env.SECRET_KEY);
  res.header("auth-token", token).send({ token, user: isUserExist });
});
module.exports = router;
