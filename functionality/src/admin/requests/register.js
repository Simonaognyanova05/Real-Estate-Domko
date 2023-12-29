const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

const connectionString = 'mongodb://localhost:27017/domko';

async function registerAdmin(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const {email, username, password, rePass } = req.body;

    if(password != rePass){
        res.send('Паролите не съвпадат!');
        return;
    }

    if(password.length < 8){
        res.send('Дължината на паролата трябва да е минимум 8 символа!');
        return;
    }

    const hashedPass = await bcrypt.hash(password, 10);

    try{
        const admin = new Admin({
            email, username, hashedPass
        });

        await admin.save();
        req.session.admin = admin;
        res.redirect('/admin');
    }catch(err){
        res.send(err);
    }
}

module.exports = { registerAdmin };