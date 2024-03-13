const { findById } = require('../models/postModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// signup a user
const signupUser = async (req, res) => {
  const {username, email, password, password2} = req.body;
  console.log(req.body);

  try {
    const user = await User.signup(username, email, password, password2);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({username, email, token});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id);

    const userData = await User.findById(user._id);
    const username = userData.username;
    console.log(username);

    res.status(200).json({username, email, token}) 
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = { signupUser, loginUser }