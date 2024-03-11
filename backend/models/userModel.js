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
    // console.log("username:", username, "email:", email, "pw:", password, "pw2:", password2);
    
    if (!username || !email ) {
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
    
    // check if username already exists
    const usernameExists = await this.findOne({ username });
    if (usernameExists) {
      throw Error("Username already in use");
    };  

    // check if email already exists
    const emailExists = await this.findOne({ email });

    if (emailExists) {
      throw Error("Email already in use");
    };
  
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ username, email, password: hash });
    
    console.log("User created!", user);
  
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