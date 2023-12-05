const express = require('express');
const app = express();
const cors = require('cors');
const port = 2001;
const db = require('./config/db-config');
const validate = require('./middleware');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const houseId = req.query.houseId;
    const userRef = db.ref(`users/${userId}`);
    const user = (await userRef.once('value')).val();
    if (user && houseId) {
        if (user.house === houseId) {
            const houseRef = db.ref(`houses/${houseId}`);
            const house = (await houseRef.once('value')).val();
            if (house) {
                res.status(200).send(house);
            } else {
                res.status(404).send({Error: 'Invalid house ID'});
            }
        } else {
            res.status(404).send({Error: 'Invalid house ID'});
        }
    } else if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({Error: 'User not found'});
    }    
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

app.put('/createHouse', async (req, res) => {
    console.log(req);
    /*
    const uid = req.query.id;
    const houseName = req.body.houseName;
    
    const houses = db.ref('houses/');
    await houses.push({
        name: houseName,
        mates: uid
    });
    */
})

app.listen(port, () => {
    console.log("Server running on Chris's birthday");
});