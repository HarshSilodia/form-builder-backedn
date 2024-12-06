const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Categorize', 'Cloze', 'Comprehension'],
  },
  question: { type: String, required: true },
  options: [String], // For Categorize questions
  answer: String,    // For Cloze questions
  passage: String,   // For Comprehension questions
  image: String,     // Optional image for the question
});

module.exports = questionSchema;
