//Dependencies
const mongoose = require('mongoose');

//Chalk for some colors
const chalk = require('chalk');

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;



module.exports = () => {
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log(connected('Mongoose connected'));
    })

    mongoose.connection.on('error', (err) => {
        console.log(error('Error occured:' + err))
    })

    mongoose.connection.on('disconnected', () => {
        console.log(disconnected("Mongoose disconnected"))
    })

    //App termination
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(termination('Mongoose disconnected due to app termination.'))
            process.exit(0);
        })
    })

}