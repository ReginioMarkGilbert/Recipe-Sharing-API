/**
 * Application Entry File
 * 
 * This is the main entry file for the application, setting up the Express server,
 * integrating middleware, defining routes, and handling errors. It's structured as follows:
 * 
 * 1. Module imports: External modules (express) and internal modules (routes, error handler) are imported.
 * 2. Express app initialization: An instance of an Express app is created.
 * 3. Middleware: The express.json() middleware is used for parsing JSON request bodies.
 * 4. Routes: 
 *    - API routes are defined in a separate file and included here under the "/api" path.
 *    - A root route ("/") is defined for basic testing or health check purposes.
 * 5. Error Handling: A custom error handling middleware is used to catch and handle errors globally.
 * 6. Server Initialization: The server listens on a specified port, defaulting to 3000 if not specified in the environment.
 * 
 * This setup provides a scalable structure for further development, allowing for easy addition of new routes,
 * middleware, and error handling strategies.
 */

const express = require("express");
const app = express();
const recipeRoutes = require("./routes/recipeRoutes");
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());

// Routes
app.use("/api", recipeRoutes);

app.get("/", (req, res) => {
    res.send("Test 1 Root route");
});

// Error handling middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}...`));
