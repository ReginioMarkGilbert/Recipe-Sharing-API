
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message }); // Send error message to the client
};

module.exports = errorHandler;
