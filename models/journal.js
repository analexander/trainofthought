const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  header: { type: String, required: true },
  entry: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
