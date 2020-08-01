const ErrorResponse = require("../utils/errorRes");

const errorHandler = (err,req,res,next) => {
    let error = { ...err }
    error.message = err.message;
    // Log to console...
    console.log(err.stack.red)

    // Mongoose bad object
    if(err.name === "CastError") {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorResponse(message,404)
    }

    //Mongoose duplicate key
    if(err.code === 11000) {
        const message = "Duplicate field entered";
        error = new ErrorResponse(message,400)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })
    console.log(error)
}
module.exports = errorHandler