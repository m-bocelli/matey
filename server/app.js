const express = require('express');
const app = express();
const cors = require('cors');
const port = 2001;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // body parsers needed for posts

const usersRoutes = require('./routes/users');
const housesRoutes = require('./routes/houses');
const fishRoutes = require('./routes/fish');

app.use('/users', usersRoutes);
app.use('/houses', housesRoutes);
app.use('/fish', fishRoutes);

app.listen(port, () => {
    console.log("Server running on Chris's birthday");
});