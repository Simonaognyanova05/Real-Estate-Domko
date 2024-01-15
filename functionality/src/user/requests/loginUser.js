const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function loginUser(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        const comparedPass = await bcrypt.compare(password, admin.hashedPass);
        if(user && comparedPass){
            req.session.user = user.toJSON();
            res.redirect('/');
        }else{
            res.send('Невалидни данни!');
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = { loginUser };
