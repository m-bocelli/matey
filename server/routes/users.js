const express = require('express');
const router = express.Router();

const db = require('../config/db-config');
const validate = require('../middleware');
 
router.get('/', (req, res) => {
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

// creates a user object in the database using values from Google's user response (put into request on front-end)
router.post('/', async (req, res) => {
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

// using async-await here instead of .then.catch to avoid nested chaining
router.get('/:id', async (req, res) => {
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

router.get('/:id/fish',  (req, res) => {
    const userId = req.params.id;
    const userFishRef = db.ref(`users/${userId}/fish`);
    userFishRef.once('value')
    .then((snap) => {
        const userFish = snap.val();
        res.status(200).send(userFish);
    })
    .catch((err) => {
        res.status(500).send(err);
    })
})

router.post('/:id/fish',  async (req, res) => {
    const newFish = req.body;
    const userId = req.params.id;
    const userFishRef = db.ref(`users/${userId}/fish`);
    let userFish = (await userFishRef.once('value')).val();
    const newIds = newFish.map((fish) => fish.id);

    if (userFish) {
        newIds.forEach((fishId) => userFish.push(fishId));
    } else {
        userFish = [...newIds];
    }

    await userFishRef.set(userFish,
        ((err) =>
            err ? res.status(500).send(err) 
                : res.status(200).send({Success: 'Added fish.'})
        )
    );
})

router.post('/:id/points',  async (req, res) => {
    const lost = req.query.lost;
    const gained = req.query.gained;

    const userId = req.params.id;
    const userRef = db.ref(`users/${userId}`);
    const user = (await userRef.once('value')).val();
    let newPoints = user.points;

    lost ? newPoints -= lost : newPoints += gained || 0;
     
    await userRef.set({...user, points: newPoints},
        (err) => 
            err ? res.status(500).send(err)
                : res.status(200).send({Success: 'Points altered.'})
    );
})

module.exports = router;