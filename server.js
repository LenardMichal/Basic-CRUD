//Adding dotenv
require('dotenv').config(); 
//Node dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//Local dependecies
const db = require('./conifg/database');
const heroRouter = require('./api/heroes/hero.routes');
//Variables
const PORT = process.env.PORT || 3000;




//App initialize
const app = express();

//Added logger
app.use(morgan('tiny'));

//Add body parser
app.use(express.json());

//Call DB
db();


//CORS Headers
app.use(cors());

app.use('/api', heroRouter);


app.get('/', (req, res, next) => {
    res.send('Just basic test');
})


app.listen(PORT, (err) => {
    if(err) throw err;
    console.log('Server is listening on: ', PORT);
})

//Export for test purposes
module.exports = app;