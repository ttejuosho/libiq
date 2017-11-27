const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const archivesSchema = new Schema({
  bookInfo: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
  returnDate:{type:Date,default: Date.now }
});

const Archives = mongoose.model("Archives", archivesSchema);

module.exports = Archives;