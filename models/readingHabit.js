const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  didIRead:{type:Boolean, default:false},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;