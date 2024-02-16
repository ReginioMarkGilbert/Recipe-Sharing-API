/**
 * Error Handling Middleware
 * 
 * This middleware function is designed to handle errors that occur during the execution of the application.
 * It captures exceptions and errors that are passed through the middleware stack using the `next` function or
 * thrown in asynchronous operations. It then formats a response to send back to the client, providing a generic
 * error message to avoid exposing sensitive details about the application's internal workings or potential vulnerabilities.
 * 
 * The function logs the error for debugging purposes, allowing developers to investigate the cause of the error
 * without exposing this information to the client. It is crucial for maintaining the security and integrity of the application.
 * 
 * Customization of the error response based on the error type or status code can be implemented to provide more
 * detailed feedback in development environments or for specific types of errors, while still avoiding the disclosure
 * of sensitive information in production environments.
 *
 * Parameters:
 * - @err (Error): The error object that was thrown or passed to the `next` function.
 * - @req (Request): The HTTP request object. Not used in this function, but required by middleware signature.
 * - @res (Response): The HTTP response object, used to send the error response to the client.
 * - @next (Function): The next middleware function in the stack. Not used in this function, but required by middleware signature.
 * 
 * Usage:
 * This middleware should be added towards the end of the middleware stack, after all routes and other middleware functions.
 * This ensures that it can catch any errors that occur during request handling. It should be registered using the `app.use()` -
 * - method in the main application file, typically after all routes have been defined.
 *
*/

function errorHandler(err, req, res, next) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).send({
        error: {
            message: "An unexpected error occurred.",
        }
    });
}

module.exports = errorHandler;