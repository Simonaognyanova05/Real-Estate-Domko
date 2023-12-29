const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const connectionString = 'mongodb://localhost:27017/domko';

async function registerUser(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const {email, username, password, rePass } = req.body;

    if(password != rePass){
        res.send('Паролите не съвпадат!');
        return;
    }

    const hashedPass = await bcrypt.hash(password, 10);

    try{
        const user = new User({
            email, username, hashedPass
        });

        await user.save();
        req.session.user = user;
        res.redirect('/');
    }catch(err){
        res.send(err);
    }
}

module.exports = { registerUser };