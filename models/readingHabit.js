const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  didIRead:{type:Boolean, default:false},
  date:{type:Date,default: Date.now },
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  userSessionId:String
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;