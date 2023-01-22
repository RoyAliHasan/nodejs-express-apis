var express = require("express");
const router = express.Router();
// get user
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createUser",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "enter valid email").isEmail(),
    body("password", "password must be >8").isLength({ min: 8 }),
  ],
  async (req, res) => {
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
      password: req.body.password,
    });

    res.send(user);
  }
);

module.exports = router;
