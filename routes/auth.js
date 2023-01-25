var express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// get user
const JWT_SECRET = "bsf2206737";
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/user",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "enter valid email").isEmail(),
    body("password", "password must be > 8").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // create user   // check if email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "user this email already exists login please" });
    }
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPassword,
    });
    const data = {
      id: user.id,
    };
    //
    const authToken = jwt.sign(data, JWT_SECRET);
    console.log(authToken);
    res.send(authToken);
  }
);
  

module.exports = router;
