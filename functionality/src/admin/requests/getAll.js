const mongoose = require('mongoose');
const Rent = require('../models/rent');

const connectionString = 'mongodb://localhost:27017/domko';

async function getAll(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });


    try{
        const data = (await Rent.find({})).map(x => x.toJSON());
        return data;
    }catch(err){
        res.send('Error');
    }
}

module.exports = { getAll };