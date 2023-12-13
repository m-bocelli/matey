const express = require('express');
const router = express.Router();

const db = require('../config/db-config');
const validate = require('../middleware');
 
// get all houses
router.get('/', (req, res) => {
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
router.get('/:id', (req, res) => {
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
router.post('/', async (req, res) => {
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

router.delete('/', async (req,res) => {
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

router.post('/join', async(req,res) => {
    const houseId = req.body.houseId;
    const houseRef = db.ref(`houses/${houseId}`);
    const house = (await houseRef.once('value')).val();
    if (house) {
        const userId = req.query.userId;
        const userRef = db.ref(`users/${userId}`);
        const user = (await userRef.once('value')).val();
        await userRef.set({...user, house: houseId});

        const matesRef = db.ref(`houses/${houseId}/mates`);
        const mates = (await matesRef.once('value')).val()
        mates.push(userId);
        await matesRef.set(mates);
        res.status(200).send({mates: mates});
    } else {
        res.status(500).send({Error: 'invalid house ID'});
    }
});

router.post('/invite', async (req,res) => {
    const emailData = {
        service_id: 'matey_service',
        template_id: 'matey_invite',
        user_id: 'Rd1J0_l_enIWvpoQ6',
        template_params: {
            'to_email': req.body.toEmail,
            'to_name': req.body.toName,
            'invite': req.query.houseId,
            'from_name': req.query.fromName
        }
    }
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(emailData)
        })
        .then(() => res.status(200).send({Success: 'Invite sent.'}))
        .catch(() => res.status(500).send({Error: 'Failed to send invite.'}));
});

router.get('/:id/mates', validate, async (req, res) => {
    try {
        const houseId = req.params.id;
        const matesRef = db.ref(`houses/${houseId}/mates`);
        const mates = (await matesRef.once('value')).val();
        let users = [];
        
        for (const userId of mates) {
            const userRef = db.ref(`users/${userId}`);
            const user = (await userRef.once('value')).val();
            users.push(user);
        }

        res.status(200).send(users);
    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = router;