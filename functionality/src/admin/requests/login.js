const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const connectionString = 'mongodb://localhost:27017/domko';

async function loginAdmin(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { username, password } = req.body;

    try{
        const admin = await Admin.findOne({ username });
        const comparedPass = await bcrypt.compare(password, admin.hashedPass);
        if(admin && comparedPass){
            req.session.admin = admin.toJSON();
            res.redirect('/admin');
        }else{
            res.send('Error');
        }
    }catch(err){
        res.send('Error');
    }
}

module.exports = { loginAdmin };