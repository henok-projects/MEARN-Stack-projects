//const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//mongoDB atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log('MongoDB connection established successfully.');
});

//use routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port, () => {
    console.log('Server is running on port:' + port)
});