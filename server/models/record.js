let mongoose = require('mongoose');

const Schema = mongoose.Schema;

var recordSchema = new Schema({
    key: String,
    value:   String,
    createdAt: Date,
    counts: [Number]
  });

var Record = mongoose.model("record",recordSchema);

module.exports =  Record;