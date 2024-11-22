// server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Contact = require('./models/Contact'); // Import the Contact model

const app = express();
const PORT = process.env.PORT || 5000; // Default port is 5000, can be overridden by environment variable

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON request bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

// Contact form route to save messages
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a new contact message
  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phone,
    message
  });

  // Save the new contact message to MongoDB
  newContact.save()
    .then(() => {
      res.status(200).json({ code: 200, message: 'Message saved successfully' });
    })
    .catch((err) => {
      res.status(500).json({ code: 500, message: 'Failed to save message' });
      console.log(err);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
