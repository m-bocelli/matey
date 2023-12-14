const express = require('express');
const app = express();
const cors = require('cors');
const port = 2001;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // body parsers needed for posts

// Endpoint routes
const usersRoutes = require('./routes/users');
const housesRoutes = require('./routes/houses');
const fishRoutes = require('./routes/fish');
const tasksRoutes = require('./routes/tasks');

app.use('/users', usersRoutes);
app.use('/houses', housesRoutes);
app.use('/fish', fishRoutes);
app.use('/tasks', tasksRoutes);

app.listen(port, () => {
    console.log("Server running on Chris's birthday");
});