const express = require('express');
const router = express.Router();

const db = require('../config/db-config');
 
// GET all tasks
router.get('/', (req, res) => {
    const tasksRef = db.ref('tasks/');

    tasksRef.once('value')
        .then((taskSnap) => {
            const tasks = taskSnap.val();
            res.status(200).send(tasks);
        })
        .catch(() => {
            res.status(500).send({Error: 'cannot get users broh'});
        })
})

// POST a new task object
router.post('/', async (req, res) => {
    const houseId = req.query.houseId;
    const {name, desc, due, points} = req.body;
    const tasksRef = db.ref('tasks/');
    let taskId;

    await tasksRef.push({
        name: name,
        desc: desc,
        due: due,
        points: points
    }, (err) => {
        if (err) {
            res.status(500).send({Error: 'Failed to create task'})
        }
    }).then((snap) => taskId = snap.key); 

    const singleTaskRef = db.ref(`tasks/${taskId}`);
    const singleTask = (await singleTaskRef.once('value')).val();
    await singleTaskRef.set({...singleTask, id: taskId});
    const task = (await singleTaskRef.once('value')).val();
    res.status(200).send(task);

    if (houseId) {
        const houseRef = db.ref(`houses/${houseId}`);
        const house = (await houseRef.once('value')).val();
        if (house.tasks) {
            await houseRef.set({...house, tasks: [...house.tasks, taskId]});
        } else {
            await houseRef.set({...house, tasks: [taskId]})
        }
    }
});

router.delete('/:id', async (req, res) => {
    const taskId = req.params.id;
    const taskRef = db.ref(`tasks/${taskId}`);
    const task = (await taskRef.once('value')).val();
    const points = task.points;
    await taskRef.set(null, (err) => err ? res.status(500).send(err) : res.status(200).send({Success: 'Deleted task'}));
    const houseId = req.query.houseId;
    if (houseId) {
        const houseTasksRef = db.ref(`houses/${houseId}/tasks`);
        const houseTasks = (await houseTasksRef.once('value')).val()
        if (houseTasks) {
            houseTasks.splice(houseTasks.indexOf(taskId), 1);
            // If user is the last to leave, delete house, else just remove the user
            houseTasks.length === 0 ? await houseTasksRef.set(null) : await houseTasksRef.set(houseTasks);
        }
    }

    const userId = req.query.userId;
    if (userId) {
        const userRef = db.ref(`users/${userId}`);
        const user = (await userRef.once('value')).val();
        await userRef.set({...user, points: user.points + parseInt(points)});
    }
});

module.exports = router;