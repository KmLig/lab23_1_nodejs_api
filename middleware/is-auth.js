const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodeToken;
    try {
        decodeToken = jsonwebtoken.verify(token, 'supersecret');
    } catch (error) {
        error.status = 500;
        throw error;
    }
    if (!decodeToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodeToken.userId;
    next();
}

