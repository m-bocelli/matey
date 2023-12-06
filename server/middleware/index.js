const admin = require('../config/admin-config');

async function verifyUser(req, res, next) {
    const bearerToken = req.headers.authorization?.split(' ')[1];

    if (!bearerToken) {
        return res.status(401).send({'Error' : 'No token'});
    }

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