const mongoose = require('mongoose');

// make all mongoose methods and functions compliant with ES6 promises
mongoose.Promise = global.Promise;

// create the mongo connection
mongoose.connect('mongodb://localhost/userData', {useNewUrlParser: true, useUnifiedTopology: true})
    .then( res => {
        console.log('woohoo connected!');
    })
    .catch( err => {
        console.error('Error at mongoose connection', err);
    })

const db = mongoose.connection;
    // report error regardless of where the connection is used
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {});

// this sets the "table" and it's "columns"
const userSchema = new mongoose.Schema({

    username: String,
    password: String
});

const collection = mongoose.model('userData', userSchema);

module.exports = {
    collection, 
}
