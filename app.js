/**
 * Express Server Application with MongoDB Integration
 * 
 * Sets up an Express server with routes for managing recipes,
 * including a connection to MongoDB using Mongoose.
 * Uses basic CRUD operations within a RESTful API structure.
 * 
 * Features:
 * - Express server setup with JSON body parsing middleware.
 * - MongoDB connection via Mongoose for object data modeling.
 * - Recipe routes for handling recipe-related API requests.
 * - Global error handling middleware for centralized error management.
 * - Environment variable support for port configuration, defaulting to 3000.
 * 
 * MongoDB Connection:
 * Connects to MongoDB using a MongoDB Atlas URI
 * 
 * Error Handling:
 * Implements a custom error handling middleware that catches and processes
 * all unhandled errors in the application, ensuring a graceful response to the client.
 * 
 * Environment Variables:
 * - PORT: The port number on which the Express server will listen.
 */
require('dotenv').config({ path: './vars/.env' });

const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', recipeRoutes);

app.get('/', function (req, res) {
    res.send('Test 1')
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI)
// MongoDB Atlas URI for connecting to a cloud database instance
.then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
});

