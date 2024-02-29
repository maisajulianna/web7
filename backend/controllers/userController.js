const mongoose = require("mongoose");
const User = require("../models/userModel");


// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    } else {
    res.json(users);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  };
};


// add a new user
const addUser = async (req, res) => {
  const { username, email, password, password2, role, pfp } = req.body;
  console.log(req.body);

  try {
    if (!username || !email || !password || !password2) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    };

    const newUser = new User({ username, email, password, password2, role, pfp});
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);

    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    };
};


// get user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'User not found' });
  };
};


// update user by id
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.password2 = req.body.password2;
    const updatedUser = await user.save();
    res.json(updatedUser);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    };
  } catch (error) {
    res.status(500).json({ message: 'Could not update user' });
  };
};

// delete user by id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.remove();
    res.json({ message: 'User removed successfully' });
  }
  catch (error) {
    res.status(500).json({ message: 'Could not delete user' });
  };
}


module.exports = {
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUser
};