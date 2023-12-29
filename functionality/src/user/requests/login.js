const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const connectionString = 'mongodb://localhost:27017/domko';

async function loginUser(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { username, password } = req.body;

    try{
        const user = await User.findOne({ username });
        const comparedPass = await bcrypt.compare(password, user.hashedPass);
        if(user && comparedPass){
            req.session.user = user.toJSON();
            res.redirect('/');
        }else{
            res.send('Error');
        }
    }catch(err){
        res.send('Error');
    }
}

module.exports = { loginUser };