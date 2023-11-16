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

app.listen(port, () => {
    console.log("Server running on Chris's birthday");
});