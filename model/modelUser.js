const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  eMail: { type: string, require: true, unique: true},
  password: { type: String, require: true},
});

module.exports = mongoose.model("user", userSchema);
