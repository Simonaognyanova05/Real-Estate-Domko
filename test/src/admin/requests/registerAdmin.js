const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function createAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password, rePass } = req.body;

    if (password != rePass) {
        res.send('Паролите не съвпадат!');
        return;
    }
    if (username.length < 5) {
        res.send('Потребителското име трябва да е минимум 5 символа!');
        return;
    }

    const hashedPass = await bcrypt.hash(password, 10);
    try {
        const admin = new Admin({
            username, hashedPass
        })
        await admin.save();
        req.session.admin = admin;
        res.redirect('/admin');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { createAdmin };
