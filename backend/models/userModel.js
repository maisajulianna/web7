const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    password2: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        default: "user",
    },
    pfp: {
        type: String,
        default: "",
    },
});


// static signup method
userSchema.statics.signup = async function (username, email, password, password2) {
    // validation
    console.log("username:", username, "email:", email, "pw:", password);
    if (!username || !email) {
      throw Error("All fields must be filled");
    };
    if (!validator.isEmail(email)) {
      throw Error("Email not valid");
    };
    if (!validator.isStrongPassword(password)) {
      throw Error("Password not strong enough");
    };
    if (password !== password2){
        throw Error("Passwords must match");
    };
  
    const exists = await this.findOne({ username, email });
  
    if (exists.username){
      throw Error("Username already in use");
    };

    if (exists.email) {
      throw Error("Email already in use");
    };
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hash });
  
    return user;
};
  
// static login method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
  
    const user = await this.findOne({ email });
    if (!user) {
      throw Error("Incorrect email");
    }
  
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Incorrect password");
    }
  
    return user;
};


module.exports = mongoose.model("User", userSchema);