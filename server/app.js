const express = require('express');
const app = express();
const port = 2001;

const db = require('./config/db-config');

app.get('/users', (req, res) => {
    const usersRef = db.ref('users/');

    usersRef.once('value')
        .then((dataSnap) => {
            const users = dataSnap.val();
            res.send(users);
        })
        .catch(() => {
            console.error('Error broh')
        })
})

app.get('/users/:id', require('./config/middleware'), (req, res) => {
    const userId = req.params.id;
    const userRef = db.ref(`users/${userId}`);

    userRef.once('value')
        .then((dataSnap) => {
            const user = dataSnap.val();

            if (user) {
                res.send(user);
            } else {
                res.status(404).send('User not found');
            }
        })
        .catch(() => {
            res.status(500).send('Server error');
        })
})

app.listen(port, () => {
    console.log("Server running on Chris's birthday");
});