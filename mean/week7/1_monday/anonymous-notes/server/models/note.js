const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  note: {
    type: String,
    required: true,
    minlength: [3, "Note must be at least 3 characters long."],
    trim: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);
