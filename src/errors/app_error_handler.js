const AppError = require('./appError');

// Error Handling For Development Mode
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).send({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
};


// Error Handling For Production Mode
const sendErrorProd = (err, res) => {
    // If error is operational (trusted), send message to client
    if (err.isOperational) {
        res.status(err.statusCode).send({
            status: err.status,
            message: err.message
        });
        // For Unknown errors (untrusted), handle internally
    } else {
        console.error("ERROR", err);
        res.status(500).send({
            status: "Error",
            message: "Something Went Wrong!"
        });
    }
};

// Handle Individual Errors

// DB Cast Error
const castErrorDB = (err) => {
    let message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};

// Duplicate Field Error
const duplicateFieldError = (err) => {
    let value = err.keyValue.name;
    let message = `Duplicate Field Value: ${value}. Please Use Another One!`;
    return new AppError(message, 400);
};

// Validation Error
const validationError = (err) => {
    let errors = Object.values(err.errors).map((el) => el.message);
    let message = `Invalid Input Data. ${errors.join(". ")}`;
    return new AppError(message, 400);
};

//// JWT Errors

// Unauthorized error
const JWTError = () => new AppError("Please Login Again", 401);

// ExpiredError
const JWTExpiredError = () => new AppError("Session Expired! Please Login Again", 401);


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV !== "production") {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV.trim() === "production") {
        let error = {
            ...err,
            message: err.message
        };

        if (error.kind === "ObjectId") error = castErrorDB(error);
        if (error.code === 11000) error = duplicateFieldError(error);
        if (error.name === "ValidationError") error = validationError(error);
        if (error.name === "JsonWebToken") error = JWTError();
        if (error.name === "TokenExpiresError") error = JWTExpiredError();

        sendErrorProd(error, res);
    }
};