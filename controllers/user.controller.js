const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const { isRequired } = require("../utils/validation");

const addUser = async (userDetails) => {
  const { username, password } = userDetails;
  isRequired(username, "Username");
  isRequired(password, "Password");

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("Username already exist");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({ username, password: hashedPassword });
  try {
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error("Error saving user to database: " + error.message);
  }
};

const authenticateUser = async (userDetails) => {
  const { username, password } = userDetails;
  isRequired(username, "Username");
  isRequired(password, "Password");

  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid Username");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid Password");
  } else {
    return user;
  }
};

module.exports = { addUser, authenticateUser };
