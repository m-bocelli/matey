const express = require('express');
const router = express.Router();

const db = require('../config/db-config');
const validate = require('../middleware');
 
// get all fish
router.get('/', (req, res) => {
    const fishRef = db.ref('fish/');

    fishRef.once('value')
        .then((fishSnap) => {
            const fish = fishSnap.val();
            res.status(200).send(fish);
        })
        .catch(() => {
            res.status(500).send({Error: 'cannot get users broh'});
        })
})

router.post('/', async (req, res) => {
    const {name, img, size, speed, depth, desc} = req.body;
    const fishRef = db.ref('fish/');
    let fishId;
    await fishRef.push({
        name: name,
        img: img,
        size: size,
        speed: speed,
        depth: depth,
        desc: desc
    }, (err) => {
        if (err) {
            res.status(500).send({Error: 'Failed to create fish'})
        } else {
            res.status(200).send({Success: 'Created fish'});
        }
    }).then((snap) => fishId = snap.key);
});

module.exports = router;