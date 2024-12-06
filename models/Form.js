const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['Categorize', 'Cloze', 'Comprehension'] },
  question: { type: String, required: true }, // This is required
  options: [String], // Optional array for Categorize questions
  answer: String,    // Optional field for Cloze questions
  image: String,     // Optional image for the question
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: String,
  questions: [questionSchema],
});

module.exports = mongoose.model('Form', formSchema);
