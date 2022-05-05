require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET_KEY;

exports.signToken = (payload) => {
    try {
        const token = jwt.sign(payload, jwtSecretKey, {
            expiresIn: '6h'
        });
        return token;
    } catch (error) {
        return {
            "success": false,
            "message": "signToken, not successful",
            "error_message":error.message
        };
    }
};

exports.decodeToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, jwtSecretKey);
        return decodedToken;
    } catch (error) {
        return {
            "status": "failed",
            "message": "decode token unsuccessfull",
            "error message": error.message
        };
    }
};