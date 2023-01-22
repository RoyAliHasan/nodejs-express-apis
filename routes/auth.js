var express = require("express");
const router = express.Router();
// get user
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name").isLength({ min: 10 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  (req, res) => {
    const user = User(req.body);
    user.save();

    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);
  }
);

module.exports = router;
