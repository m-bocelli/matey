const admin = require('./admin-config');

function verifyUser(req, res, next) {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
        return res.status(401).send('Invalid credentials');
    } else {
        console.log(bearerToken);
    }

    admin.auth().verifyIdToken(bearerToken)
    .then((decodedIdToken) => {
        req.user = decodedIdToken;
        return next();
    })
    .catch(() => {
        return res.status(401).send('Invalid credentials');
    });
}

module.exports = verifyUser;