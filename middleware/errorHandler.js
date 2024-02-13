/**
 * Error Handling Middleware.
 * 
 * This middleware function is responsible for handling errors that occur in the application.
 * It logs the error stack to the console for debugging purposes and sends a generic error response
 * to the client to avoid exposing sensitive error details.
 * 
 * @param {Object} err - The error object that was thrown.
 * @param {Object} req - The request object. Not used in this function, but required by middleware signature.
 * @param {Object} res - The response object. Used to send the error response to the client.
 * @param {Function} next - The next middleware function in the stack. Not used in this function, but required by middleware signature.
 */

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging.
    res.status(500).json({ message: err.message }); // Send a 500 Internal Server Error status code and the error message.
};

module.exports = errorHandler; // Export the errorHandler middleware for use in the application.