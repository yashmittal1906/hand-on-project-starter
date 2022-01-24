const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ error: "Fill up all details" });
  }

  const hashPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = await User.create({
      email,
      password: hashPassword,
    });

    res.status(200).json({
      status: "Success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    console.log(err);
    if (!email || !password) {
      return res.json({ error: "User already registered" });
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ error: "Fill up all details" });
  }
  const user = await User.findOne({ email }).lean();

  if (!user)
    return res.json({
      status: "error",
      error: "No user found with this email",
    });

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
    );
    return res.json({ status: "Success", data: user, token });
  }

  res.json({
    status: "error",
    error: "Login UnSuccessful",
  });
});

// router.post("/changePassword", async (req,res) => {
//   const {token} =
// })

module.exports = router;
