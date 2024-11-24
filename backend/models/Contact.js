const mongoose = require('mongoose');

// Define the contact schema
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: false,  // Optional field
  },
  message: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // Timestamps will automatically add 'createdAt' and 'updatedAt'

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact; // Export the model for use in routes
