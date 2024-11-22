// routes/contact.js

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// POST route to save contact form data
router.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

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
      res.status(500).json({ code: 500, message: 'Failed to save message' });
      console.log(err);
    });
});

module.exports = router;  // Export the route
