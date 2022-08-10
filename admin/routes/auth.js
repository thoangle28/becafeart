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

router.post("/register", async (req, res) => {

  const { username, password, email, nicename } = req.body;

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
        .json({ success: 200, message: "User already existed!" })
    }

    //add new user
    const hashedPassword = await argon2.hash(password)

    const params = { 
      username: username, 
      password: hashedPassword,
      eaddress: email,
      nicename: nicename
    }
    console.log(params)

    const newUser = new User(params)
    await newUser.save();

    //after create new has successful
    //return access token and save to stogare
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRECT
    )

    return res.json({
      success: true,
      message: "User has created successfull.",
      accessToken,
    });

  } catch (err) {
    console.log(err.message)
  }
});

module.exports = router;
