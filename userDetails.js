const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    //collection: "UserInfo",
    collection: "stds",
  }
);

mongoose.model('stds', UserDetailsScehma);
