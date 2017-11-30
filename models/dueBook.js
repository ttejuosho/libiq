const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  date:{type:Date,default: Date.now },
  isReturned:{type:Boolean, default:false},
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  userSessionId:String

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
