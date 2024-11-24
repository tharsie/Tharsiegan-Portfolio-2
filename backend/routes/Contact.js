const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// POST route to save contact form data
router.post('/', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Log request body to check incoming data
  console.log(req.body);

  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phone,
    message
  });

  newContact.save()
    .then(() => {
      res.status(200).json({ code: 200, message: 'Message saved successfully' });
    })
    .catch((err) => {
      console.log('Error saving message:', err);  // Log the error for debugging
      res.status(500).json({ code: 500, message: 'Failed to save message' });
    });
});

module.exports = router; // Export the route
