const express = require("express");
const { addUser, authenticateUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const userDetails = await addUser(req.body);
    res.status(201).json({
      message: "user created Successfully",
      userDetails,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userDetails = await authenticateUser(req.body);
    res
      .status(200)
      .json({ message: "User authenticated successfully", userDetails });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
