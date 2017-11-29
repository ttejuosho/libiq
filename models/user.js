const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String},
  password: { type: String},
  habitId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Habit'}],
  favBooks:{ type : Array , "default" : [] },
  dueBooksId:[{type:mongoose.Schema.Types.ObjectId,ref:'Books'}]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;