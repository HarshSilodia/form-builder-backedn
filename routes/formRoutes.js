const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Create a new form
router.post('/forms', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error saving form:', error); // Log the error details
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});


// Get a form by ID
router.get('/forms/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
