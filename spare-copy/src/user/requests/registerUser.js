const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function registerUser(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password, email, rePass } = req.body;

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
        const user = new User({
            username, email, hashedPass
        })
        await user.save();
        req.session.user = user;
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { registerUser };
