const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

require("dotenv").config();

// @router POST api/auth/register
// @desc Register User
// @access Public

router.get("/", (req, res) => res.send("Test"));

router.post("/regsiter", async (req, res) => {
  const { username, password } = res.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username / Password" });
  }

  try {
    //checking for an user
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(200)
        .json({ success: 200, message: "User already existed!" });
    }

    //add new user
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    //after create new has successful
    //return access token and save to stogare
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRECT
    );
    return;
  } catch (err) {}
});

module.exports = router;
