const express = require('express');
const app = express();
const cors = require('cors');
const port = 2001;
const db = require('./config/db-config');
const validate = require('./middleware');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/createUser', async (req, res) => {
    const { uid, displayName, photoURL, email } = req.body;
    const userRef = db.ref(`users/${uid}`);
    const user = await userRef.once('value');
    
    if (!user.exists()) {
        await userRef.set({
            date_joined: Date.now(),
            email: email,
            fish: [],
            house: null,
            id: uid,
            name: displayName,
            points: 0,
            icon: photoURL
        });
        res.status(200).send({Success: 'Created user'});
    } else {
        res.status(304).send({Nothing: 'User already exists'});
    }
})

app.get('/users', (req, res) => {
    const usersRef = db.ref('users/');

    usersRef.once('value')
        .then((dataSnap) => {
            const users = dataSnap.val();
            res.status(200).send(users);
        })
        .catch(() => {
            res.status(500).send({Error: 'cannot get users broh'});
        })
})

app.get('/users/:id', validate, (req, res) => {
    const userId = req.params.id;
    const userRef = db.ref(`users/${userId}`);

    userRef.once('value')
        .then((dataSnap) => {
            const user = dataSnap.val();

            if (user) {
                res.status(200).send(user);
            } else {
                res.status(404).send({Error: 'User not found'});
            }
        })
        .catch(() => {
            res.status(500).send({Error: 'Server error'});
        })
})

app.get('/houses', (req, res) => {
    const housesRef = db.ref('houses/');
    housesRef.once('value')
        .then((dataSnap) => {
            const houses = dataSnap.val();
            res.status(200).send(houses);
        })
        .catch(() => {
            res.status(500).send({Error: 'cannot get houses broh'});
        })
})

app.get('/houses/:id', validate, (req, res) => {
    const houseId = req.params.id;
    const houseRef = db.ref(`houses/${houseId}`);
    houseRef.once('value')
        .then((dataSnap) => {
            const house = dataSnap.val();
            res.status(200).send(house);
        })
        .catch(() => {
            res.status(500).send({Error: 'cannot get houses broh'});
        })
})

app.post('/createHouse', async (req, res) => {
    const uid = req.query.id;
    console.log(uid);
    const houseName = req.body.houseName;
    
    const houses = db.ref('houses/');
    await houses.push({
        name: houseName,
        mates: 'bruh2'
    });
})

app.listen(port, () => {
    console.log("Server running on Chris's birthday");
});