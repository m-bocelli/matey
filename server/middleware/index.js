const admin = require('../config/admin-config');

// Middleware to verify an aunthenticated user before using an API endpoint
async function verifyUser(req, res, next) {
    // Grab token from HTTP request header
    const bearerToken = req.headers.authorization?.split(' ')[1];

    if (!bearerToken) {
        return res.status(401).send({'Error' : 'No token'});
    }

    // Use Firebase built in JWT token verification to make sure user is real
    await admin.auth().verifyIdToken(bearerToken)
    .then((decodedIdToken) => {
        req.user = decodedIdToken;
        return next();
    })
    .catch(() => {
        return res.status(401).send({'Error': 'Invalid credentials'});
    });
}

module.exports = verifyUser;