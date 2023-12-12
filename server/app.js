const express = require('express');
const app = express();
const cors = require('cors');
const port = 2001;
const db = require('./config/db-config');
const validate = require('./middleware');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // body parsers needed for posts

// creates a user object in the database using values from Google's user response (put into request on front-end)
app.post('/createUser', async (req, res) => {
    const { uid, displayName, photoURL, email } = req.body;
    const userRef = db.ref(`users/${uid}`);
    const userSnap = await userRef.once('value');
    
    if (!userSnap.exists()) {
        await userRef.set({
            date_joined: Date.now(),
            email: email,
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
        .then((usersSnap) => {
            const users = usersSnap.val();
            res.status(200).send(users);
        })
        .catch(() => {
            res.status(500).send({Error: 'cannot get users broh'});
        })
})

// using async-await here instead of .then.catch to avoid nested chaining
app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const houseId = req.query.houseId;

    const userRef = db.ref(`users/${userId}`);
    const user = (await userRef.once('value')).val(); // skip snap, go straight to user object value

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

// get all houses
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

// get a specific house
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

// create house from user's perspective defined in query param
app.post('/createHouse', async (req, res) => {
    const userId = req.query.user;
    const houseName = req.body.houseName;
    const housesRef = db.ref('houses/');
    let houseID;

    await housesRef.push({
        name: houseName,
        mates: [userId]
    }, (err) => {
        if (err) {
            res.status(500).send({Error: 'Failed to create house'})
        } else {
            res.status(200).send({Success: userId});
        }
    }).then((snap) => houseID = snap.key);

    const userRef = db.ref(`users/${userId}`);
    const user = (await userRef.once('value')).val();
    await userRef.set({...user, house: houseID});
});

app.listen(port, () => {
    console.log("Server running on Chris's birthday");
});

app.delete('/leaveHouse', async(req,res) => {
    const userId = req.query.userId;
    // Remove house reference from user
    const userRef = db.ref(`users/${userId}`);
    const user = (await userRef.once('value')).val();
    await userRef.set({...user, house: null});
    

    // Remove user reference from house
    const houseId = req.query.houseId;
    const matesRef = db.ref(`houses/${houseId}/mates`);
    const mates = (await matesRef.once('value')).val()
    mates.splice(mates.indexOf(userId), 1);
    // If user is the last to leave, delete house, else just remove the user
    mates.length === 0 ? await db.ref(`houses/${houseId}`).set(null) : await matesRef.set(mates);
    res.status(200).send({mates: mates});
});