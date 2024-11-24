const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to access environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Import Contact model and routes
const Contact = require('./models/Contact');
const contactRoute = require('./routes/Contact');

// Contact route for handling form submissions
app.use('/contact', contactRoute);

// Test route to check if the server is working
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
